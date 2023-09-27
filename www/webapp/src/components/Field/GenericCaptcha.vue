<template>
  <v-row dense align="center" class="text-center">
    <v-col cols="12" sm="">
      <v-text-field
          v-model="inputSolution"
          :label="l.inputSolution"
          :hint="kind === 'image' ? l.hintImage : l.hintAudio"
          :prepend-icon="mdiAccountCheck"
          :rules="rules"
          :error-messages="errors"
          :tabindex="tabindex"
          outlined
          required
          class="uppercase"
          ref="captchaField"
      />
    </v-col>
    <v-col cols="12" sm="auto">
      <v-progress-circular v-if="working" indeterminate/>
      <img v-if="captcha && !working && kind === 'image'"
           :src="'data:'+mimeImage+';base64,'+captcha.challenge"
           :alt="l.altImage"
      >
      <audio v-if="captcha && !working && kind === 'audio'" controls>
        <source :src="'data:'+mimeAudio+';base64,'+captcha.challenge" :type="mimeAudio">
      </audio>
      <br>
      <v-btn-toggle>
        <v-btn text outlined @click="getCaptcha(true)" :aria-label="l.newCaptcha" :disabled="working">
          <v-icon v-if="!working">{{ mdiRefresh }}</v-icon>
          <v-icon v-if="working" class="icon-spinner">{{ mdiRefresh }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      &nbsp;
      <v-btn-toggle v-model="kind" :disabled="working">
        <v-btn text outlined value="image" :aria-label="l.switchImage">
          <v-icon>{{ mdiEye }}</v-icon>
        </v-btn>
        <v-btn text outlined value="audio" :aria-label="l.switchAudio">
          <v-icon>{{ mdiEarHearing }}</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
import {mdiAccountCheck, mdiEarHearing, mdiEye, mdiRefresh} from "@mdi/js";
import axios from "axios";

const HTTP = axios.create({
  baseURL: '/api/v1/',
  headers: {},
});

export default {
  name: 'GenericCaptcha',
  captcha_kind: '',
  props: {
    tabindex: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    mdiAccountCheck,
    mdiEarHearing,
    mdiEye,
    mdiRefresh,
    captcha: null,
    working: true,
    inputSolution: '',
    rules: [v => !!v || 'Please enter the text displayed in the picture so we are (somewhat) convinced you are human.'],
    errors: [],
    kind: 'image',
    mimeAudio: 'audio/wav',
    mimeImage: 'image/png',
    l: {
      altImage: 'Sign up / password reset is also possible by sending an email to our support.',
      hintAudio: 'Can\'t see? Hear an audio CAPTCHA instead.',
      hintImage: 'Trouble hearing? Switch to an image CAPTCHA.',
      inputSolution: 'Type CAPTCHA text here',
      newCaptcha: 'Get new CAPTCHA',
      switchAudio: 'Switch to Audio CAPTCHA',
      switchImage: 'Switch to Image CAPTCHA',
    },
  }),
  methods: {
    async getCaptcha(focus = false) {
      this.working = true;
      this.inputSolution = '';
      await HTTP
          .post('captcha/', {kind: this.kind})
          .then((res) => {
            this.captcha = res.data;
          })
          .catch((e) => {
            if(e.response) {
              this.errors = ['Captcha request: Server error(' + e.response.status.toString() + "): " + e.response.data.detail];
            } else if(e.request) {
              this.errors = ['Captcha request: Could not request from server.'];
            } else {
              this.errors = ['Captcha request: Unknown error.'];
            }
          })
      ;
      if(focus) {
        this.$refs.captchaField.focus();
      }
      this.working = false;
    },
    addError(values) {
      this.errors.push(values);
    },
  },
  async mounted() {
    await this.getCaptcha();
  },
  computed: {
    id() {
      return this.captcha.id;
    },
    solution() {
      return this.inputSolution.toUpperCase();
    },
  },
  watch: {
    kind(oldKind, newKind) {
      if(oldKind !== newKind) {
        this.getCaptcha(true);
      }
    },
  },
};
</script>

<style>
.icon-spinner {
  animation: spin-animation 1.5s infinite;
  display: inline-block;
}

@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>

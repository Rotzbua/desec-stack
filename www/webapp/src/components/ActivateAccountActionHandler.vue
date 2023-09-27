<template>
  <div>
    <div class="text-center" v-if="captcha_required && !success">
      <v-container class="pa-0">
        <generic-captcha
            :id="captchaID"
            :solution="captchaSolution"
            tabindex="3"
            ref="captchaField"
        />
      </v-container>
      <v-btn
          depressed
          color="primary"
          type="submit"
          :disabled="working || !valid"
          :loading="working"
          tabindex="2"
      >Submit
      </v-btn>
    </div>
    <v-alert type="success" v-if="success">
      <p>{{ this.response.data.detail }}</p>
    </v-alert>
  </div>
</template>

<script>
  import GenericActionHandler from "./GenericActionHandler"
  import GenericCaptcha from "@/components/Field/GenericCaptcha.vue";

  export default {
    name: 'ActivateAccountActionHandler',
    components: {GenericCaptcha},
    extends: GenericActionHandler,
    data: () => ({
      auto_submit: true,
      LOCAL_PUBLIC_SUFFIXES: process.env.VUE_APP_LOCAL_PUBLIC_SUFFIXES.split(' '),

      /* captcha field */
      captcha_required: false,
      captchaID: null,
      captchaSolution: '',
    }),
    computed: {
      captcha_error: function() {
        return this.error && this.response.data.captcha !== undefined
      }
    },
    watch: {
      captcha_error(value) {
        if(value) {
          this.$emit('clearerrors');
          this.captcha_required = true;
          this.payload.captcha = {};
          this.$refs.captchaField.getCaptcha(true);
          this.payload.captcha.id = this.captchaID;
        }
      },
      success(value) {
        if(value) {
          let domain = this.response.data.domain;
          if(domain === undefined) {
            return;
          }
          if(this.LOCAL_PUBLIC_SUFFIXES.some((suffix) => domain.name.endsWith('.' + suffix))) {
            let token = this.response.data.token;
            this.$router.push({name: 'dynSetup', params: {domain: domain.name}, hash: `#${token}`});
          } else {
            let ds = domain.keys.map(key => key.ds);
            ds = ds.concat.apply([], ds)
            this.$router.push({
              name: 'customSetup',
              params: {
                domain: domain.name,
                ds: ds,
                dnskey: domain.keys.map(key => key.dnskey),
                isNew: true,
              },
            });
          }
        }
      }
    }
  };
</script>

<script>
import {ipAddress, required} from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {useVuelidate} from "@vuelidate/core";
import {int16} from "@/validation";

export default {
  name: 'RecordA',
  extends: RecordItem,
  setup() {
    return {v$: useVuelidate()}
  },
  data: () => ({
    errors: {
      ipAddress: 'This field must contain an IPv4 address.',
    },
    test: '',
    fields: [
      {label: 'IPv4 address', value: '', validations: {ipAddress}},
    ],
  }),
  validations() {
    const validations = {
      test: {required, int16},
    };

    console.log("validations()AAAAAAAAAAAAAAAA")
    return validations;
  },

};
</script>

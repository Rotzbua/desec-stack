<script>
import { integer } from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {base64, int16, int8, MAX16, MAX8} from "@/validation";

const equals3 = (value) => !value || value == 3;

export default {
  name: 'RecordDNSKEY',
  extends: RecordItem,
  data: () => ({
    fields: [
      { label: 'Flags', validations: { integer, int16 } },
      { label: 'Protocol', validations: { integer, equals3 } },
      { label: 'Algorithm', validations: { integer, int8 } },
      { label: 'Public Key', validations: { base64 } },
    ],
    errors: {
      integer: 'Please enter an integer.',
      int8: `0 ≤ … ≤ ${MAX8}`,
      int16: `0 ≤ … ≤ ${MAX16}`,
      equals3: 'Must be 3.',
      base64: 'Please use base64 encoding.',
    },
  }),
};
</script>

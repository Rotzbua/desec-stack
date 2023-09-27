<script>
import { integer } from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {hex, int8, MAX8, trim} from "@/validation";

export default {
  name: 'RecordTLSA',
  extends: RecordItem,
  data: () => ({
    fields: [
      { label: 'Usage', validations: { integer, int8 } },
      { label: 'Selector', validations: { integer, int8 } },
      { label: 'Matching Type', validations: { integer, int8 } },
      { label: 'Certificate Data', validations: { trim, hex } },
    ],
    errors: {
      integer: 'Please enter an integer.',
      int8: `0 ≤ … ≤ ${MAX8}`,
      hex: 'Please use hexadecimal format.',
      trim: 'Only internal whitespace allowed.',
    },
  }),
};
</script>

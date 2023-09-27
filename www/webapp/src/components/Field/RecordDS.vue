<script>
import { integer } from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {hex, int16, int8, MAX16, MAX8, trim} from "@/validation";

export default {
  name: 'RecordDS',
  extends: RecordItem,
  data: () => ({
    fields: [
      { label: 'Key Tag', validations: { integer, int16 } },
      { label: 'Algorithm', validations: { integer, int8 } },
      { label: 'Digest Type', validations: { integer, int8 } },
      { label: 'Digest', validations: { trim, hex } },
    ],
    errors: {
      integer: 'Please enter an integer.',
      int8: `0 ≤ … ≤ ${MAX8}`,
      int16: `0 ≤ … ≤ ${MAX16}`,
      hex: 'Please use hexadecimal format.',
      trim: 'Only internal whitespace allowed.',
    },
  }),
};
</script>

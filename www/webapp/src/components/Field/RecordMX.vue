<script>
import { integer } from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {hostname1, int16, MAX16, trailingDot} from "@/validation";


export default {
  name: 'RecordMX',
  extends: RecordItem,
  data: () => ({
    fields: [
      {
        label: 'Preference',
        validations: { integer, int16 },
      },
      {
        label: 'Hostname',
        validations: { hostname1, trailingDot },
      },
    ],
    errors: {
      integer: 'Please enter an integer.',
      int16: `0 ≤ … ≤ ${MAX16}`,
      hostname: 'Please enter a valid hostname.',
      trailingDot: 'Hostname must end with a dot.',
    },
  }),
};
</script>

<script>
import { integer } from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {hostname3, int16, MAX16, trailingDot} from "@/validation";

export default {
  name: 'RecordSVCB',
  extends: RecordItem,
  data: () => ({
    fields: [
      { label: 'Priority', validations: { integer, int16 } },
      { label: 'Target Name', validations: { hostname3, trailingDot } },
      { label: 'Service Parameters', validations: { }, optional: true },
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

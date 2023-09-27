<script>
import RecordItem from './RecordItem.vue';
import {hostname1, trailingDot} from "@/validation";

export default {
  name: 'RecordNS',
  extends: RecordItem,
  data: () => ({
    fields: [
      {
        label: 'Hostname',
        validations: { hostname1, trailingDot },
      },
    ],
    errors: {
      hostname: 'Please enter a valid hostname.',
      trailingDot: 'Hostname must end with a dot.',
    },
  }),
};
</script>

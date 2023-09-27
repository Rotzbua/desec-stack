<script>
import RecordItem from './RecordItem.vue';
import {hostname2, trailingDot} from "@/validation";

export default {
  name: 'RecordCNAME',
  extends: RecordItem,
  data: () => ({
    errors: {
      hostname: 'Please enter a valid hostname.',
      trailingDot: 'Hostname must end with a dot.',
    },
    fields: [
      { label: 'Target hostname', validations: { hostname2, trailingDot } },
    ],
  }),
};
</script>

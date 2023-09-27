<script>
import RecordItem from './RecordItem.vue';
import {ip6Address} from "@/validation";

export default {
  name: 'RecordAAAA',
  extends: RecordItem,
  data: () => ({
    errors: {
      ip6Address: 'This field must contain an IPv6 address.',
    },
    fields: [
      { label: 'IPv6 address', validations: { ip6Address } },
    ],
  }),
};
</script>

<script>
import RecordItem from './RecordItem.vue';
import {ipAddressOrSubnet} from "@/validation";

export default {
  name: 'RecordSubnet',
  extends: RecordItem,
  data: () => ({
    errors: {
      ipAddressOrSubnet: 'This field must contain an IP address or subnet.'
    },
    fields: [
      { label: 'Subnet (IPv4 / IPv6)', validations: { ipAddressOrSubnet } },
    ],
  }),
};
</script>

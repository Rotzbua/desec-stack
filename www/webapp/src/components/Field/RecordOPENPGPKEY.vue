<script>
import RecordItem from './RecordItem.vue';
import {base64} from "@/validation";

export default {
  name: 'RecordOPENPGPKEY',
  extends: RecordItem,
  data: () => ({
    fields: [
      { label: 'Public Key', validations: { base64 } },
    ],
    errors: {
      base64: 'Please use base64 encoding.',
    },
  }),
};
</script>

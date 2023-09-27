<script>
import RecordItem from './RecordItem.vue';
import {txtToken} from "@/validation";

export default {
  name: 'RecordTXT',
  extends: RecordItem,
  data: () => ({
    errors: {
      txtToken: 'This record must begin and end with quotes (").',
    },
    fields: [
      { label: 'Content', validations: { txtToken } },
    ],
  }),
};
</script>

<script>
import { integer } from '@vuelidate/validators';
import RecordItem from './RecordItem.vue';
import {int8, MAX8} from "@/validation";

// https://www.iana.org/assignments/pkix-parameters/pkix-parameters.xhtml#caa-properties
const tags = ['issue', 'issuewild', 'iodef', 'contactemail', 'contactphone'];
const tag = (value) => !value || tags.some(v => value == v);

export default {
  name: 'RecordCAA',
  extends: RecordItem,
  data: () => ({
    fields: [
      { label: 'Flags', validations: { integer, int8 } },
      { label: 'Tag', validations: { tag } },
      { label: 'Value', validations: { } },
    ],
    errors: {
      integer: 'Please enter an integer.',
      int8: `0 ≤ … ≤ ${MAX8}`,
      tag: 'Not a valid tag.',
    },
  }),
};
</script>

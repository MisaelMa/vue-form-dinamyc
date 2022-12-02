import { defineComponent, h, 
   // ref, 
   toRefs,
   resolveComponent 
} from "vue";
import BTextField from "./Inputs/BTextField.vue"
import BSelect from "./Inputs/BSelect.vue"
 // eslint-disable-next-line no-empty-pattern, no-unused-vars
import { useForm } from 'vee-validate';
export default defineComponent({
  name: "FormBuild",
  props: {
    onSubmit: {
      default: undefined,
    },
    onInvalidSubmit: {
      default: undefined,
    },
    fields: {
      default: []
    },
  },
  components: {
    BTextField,
    BSelect
  },
  setup(props, ctx) {
    const {fields, ...more} = toRefs(props)
    // eslint-disable-next-line no-empty-pattern
  
// eslint-disable-next-line no-unused-vars
const { handleSubmit, values }  = useForm({
  validateOnMount: true,
  initialValues:{
userName:"jose"
  }
});
    return () =>h('div',{},
    [
      h("form",
        {
          ...ctx.attrs,
          ...more,
         
          // eslint-disable-next-line no-unused-vars
          'on:submit':handleSubmit((values, { resetForm }) => {
            console.log(values); // send data to API
            // reset the form and the field values to their initial values
            // resetForm();
          }),
        },
        fields.value.map((input) => {  
          return h(resolveComponent(input.components) , {
            ...input
          })
        }),
        h("button", { type:'submit'},'Enviar'),
      )
    ]
    )
  },
});

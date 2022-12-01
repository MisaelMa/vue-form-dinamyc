import { defineComponent, h, 
   // ref, 
   toRefs,
   resolveComponent 
} from "vue";
import BTextField from "./Inputs/BTextField.vue"
import BSelect from "./Inputs/BSelect.vue"
// import { useForm } from 'vee-validate';
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
    return () =>h("form",
        {
          ...ctx.attrs,
          ...more,
          'on:submit': (event) => {
            event.preventDefault()
          }
        },
        fields.value.map((input) => {  
          return h(resolveComponent(input.components) , {
            ...input,
            "onUpdate:modelValue": (value)=>{
              console.log(value[0])
                input.modelValue = value
            }
          })
        }),
        h("button", { type:'submit'},'Enviar'),
      );
  },
});

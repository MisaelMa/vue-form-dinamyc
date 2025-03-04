import { h, defineComponent, defineModel, defineEmits, computed, toRefs, watch, toRaw } from 'vue';
import BSelect from './Inputs/BSelect.vue';
import BTextField from './Inputs/BTextField.vue';
import { useForm } from 'vee-validate';
import type { Field } from '@/common/forms/login.form';
import * as Yup from 'yup'

export default defineComponent({
  name: 'FormBuild',
  props: {
    fields: Array as () => Field[],
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['onSubmit', 'update:modelValue'],
  setup(props, { emit }) {
    const { fields, ...more } = toRefs(props);
    const validateSchema = Yup.object(fields.value.reduce((acc, field) => {
      const { name, rule } = field.props;
      if (rule) {
        acc[name] = rule;
      }
      return acc
    }, {}))
    const form = useForm({
      validateOnMount: true,
      initialValues: props.modelValue,
      name: 'form',
      validationSchema: validateSchema,
      
    });

    const values = computed(() => form.values);

    watch(
      () => values.value,
      () => {
        emit('update:modelValue', toRaw(values.value));
      },
      { deep: true }
    );

    const components: Record<string, any> = {
      BTextField,
      BSelect,
    };

    const submitForm = (values: any, { resetForm }: { resetForm: () => void }) => {
      console.log(values);
      //resetForm(); // Descomentar si se desea resetear el formulario
    };

    const handleSubmit = form.handleSubmit(submitForm);

    return () =>
      h(
        'form',
        { ...more, onSubmit: handleSubmit },
        [
          fields.value?.map((field, index) =>
            h(
              'div',
              { key: index, class: field.class },
              h(components[field.component], field.props)
            )
          ),
          h('button', { type: 'submit' }, 'Enviar'),
        ]
      );
  },
});

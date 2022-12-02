<template>
  <div class="container">
    <c-form id="amir" 
            @submit="onSubmit"
            class="row g-3 needs-validation" 
            novalidate 
            :fields="inputsFields"/>
            <c-form id="amir2" 
            @submit="onSubmit"
            class="row g-3 needs-validation" 
            novalidate 
            :fields="inputsFields2"/>
      </div>
</template>

<script>
import CForm from "./components/core/Form";
import { defineComponent, ref } from "vue";
import { inputsFields, inputsFields2 } from './common/forms/login.form';
 // eslint-disable-next-line no-empty-pattern, no-unused-vars
import { useForm } from 'vee-validate';
import { useField } from 'vee-validate';
export default defineComponent({
  name: "App",
  components: {
    
    // eslint-disable-next-line vue/no-unused-components
    CForm
  },
  setup() {
    const page = ref(1);
    
    const aqui = ref("amir")
    const getBeforePage = (emitPage) => {
      console.log("before",emitPage)
    };
    const getNextPage = (emitPage) => {
      console.log("next",emitPage)
    };
    
    // a simple `name` field with basic required validator
    const { value, errorMessage } = useField('name', inputValue => !!inputValue);

 // eslint-disable-next-line no-empty-pattern, no-unused-vars
const { handleSubmit } = useForm();
const { value: email } = useField('email');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

    return {
      email,
      onSubmit,
       value, errorMessage ,
      page,
      aqui,
      getBeforePage,
      getNextPage,
      inputsFields,
      inputsFields2
    };
  },
});
</script>

<style>
</style>

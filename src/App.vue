<template>
  <div class="container">
    <div style="border: solid 1px blue; padding: 20px">
      {{aqui}}
      
      <BTextField v-model="aqui"></BTextField>  
      <span>{{ errorMessage }}</span>

    </div>
    
    {{inputsFields[0].modelValue}}
    {{inputsFields[1].modelValue}}
    {{inputsFields[2].modelValue ? inputsFields[2].modelValue[0].name : 'nada'}}
    <c-form id="amir" 
            @submit="onSubmit"
            class="row g-3 needs-validation" 
            novalidate 
            :fields="inputsFields"/>
      </div>
</template>

<script>
import CForm from "./components/core/Form";
import { defineComponent, ref } from "vue";
import BTextField from "./components/core/Inputs/BTextField.vue"
import { inputsFields } from './common/forms/login.form';

import { useField } from 'vee-validate';
export default defineComponent({
  name: "App",
  components: {
    BTextField,
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
 function onSubmit() {
      console.log('Submitted');
    }

// a simple `name` field with basic required validator
const { value, errorMessage } = useField('name', inputValue => !!inputValue);

    return {
       value, errorMessage ,
      page,
      onSubmit,
      aqui,
      getBeforePage,
      getNextPage,
      inputsFields,
    };
  },
});
</script>

<style>
</style>

import * as yup from 'yup';

import { reactive, } from "vue";

export const inputsFields = reactive([
      {
        label: 'name',
        type: 'text',
        name: 'userName',
        placeholder: "Hola",
        components: 'BTextField',
        rule: yup.string().required('Please Enter your Email').min(8),
        class: 'col-md-6'
      },
      {
        id:"pass",
        name: 'password',
        label: 'password',
        type: 'password',
        components: 'BTextField',
        class: 'col-md-6'
      },
      {
        id:"file-test",
        name: 'file',
        label: 'Upload Picture',
        type: 'file',
        components: 'BTextField',
        class: 'col-md-12'
      },
      {
        label: 'password',
        type: 'password',
        name: 'password',
        components: 'BSelect',
        options: [
          {
            label: 'Uno',
            value: "1"
          }
        ]
      }
    ]);


    export const inputsFields2 = reactive([
      {
        label: 'hola mundo',
        type: 'text',
        name: 'gola',
        placeholder: "Hola",
        components: 'BTextField',
        rule: yup.string().required('Please Enter your ssjsj').min(8),
        class: 'col-md-6'
      },

      {
        label: 'name',
        type: 'text',
        name: 'userName2',
        placeholder: "Hola",
        components: 'BTextField',
        rule: yup.string().required('Please Enter your Email').min(8),
        class: 'col-md-6'
      },
      {
        id:"pass2",
        name: 'password2',
        label: 'password',
        type: 'password',
        components: 'BTextField',
        class: 'col-md-6'
      },
      {
        id:"file-test2",
        name: 'file2',
        label: 'Upload Picture',
        type: 'file',
        components: 'BTextField',
        class: 'col-md-12'
      },
      {
        label: 'password',
        type: 'password',
        name: 'password2',
        components: 'BSelect',
        options: [
          {
            label: 'Uno',
            value: "1"
          }
        ]
      }
    ]);
import { reactive,  } from "vue";


export const inputsFields = reactive([
      {
        label: 'name',
        type: 'text',
        name: 'userName',
        modelValue: 'hola mike',
        placeholder: "Hola",
        components: 'BTextField',
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
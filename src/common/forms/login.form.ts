import * as yup from 'yup'

import { reactive } from 'vue'
export interface Field {
  props: any
  component: string
  class?: string
}
export const form1 = ({
  catalogs: { estados, municipios },
  onEvents: { onChangeOptions },
}: any) => {
  return reactive<Field[]>([
    {
      props: {
        label: 'name',
        type: 'text',
        name: 'userName',
        placeholder: 'Hola',
        rule: yup.string().required('Please Enter your Email').min(8,  'Minimo 8 Caracteres'),
      },
      component: 'BTextField',
      class: 'col-md-6',
    },
    {
      props: {
        label: 'año',
        type: 'number',
        name: 'año',
        placeholder: 'ejemplo ingresa año',
      },
      component: 'BTextField',
      class: 'col-md-6',
    },
    {
      props: {
        id: 'pass',
        name: 'password',
        label: 'password',
        type: 'password',
        rule: yup.string().required('Please Enter your Password').min(2),
      },
      component: 'BTextField',
      class: 'col-md-6',
    },
    {
      props: {
        id: 'pass2',
        name: 'confirmPassword',
        label: 'confirmPassword',
        type: 'password',
        rule: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')

      },
      component: 'BTextField',
      class: 'col-md-6',
    },
    {
      props: {
        label: 'optiones',
        type: 'select',
        name: 'options',
        itemText: 'label',
        itemValue: 'value',
        options: estados,
        'on:change': onChangeOptions,
      },
      component: 'BSelect',
    },

    {
      props: {
        label: 'municipios',
        type: 'select',
        name: 'municipios',
        itemText: 'label',
        itemValue: 'value',
        options: municipios,
      },
      component: 'BSelect',
    },
    {
      props: {
        id: 'file-test2',
        name: 'file2',
        label: 'Upload Picture',
        type: 'file',
      },
      component: 'BTextField',
      class: 'col-md-12',
    },
  ])
}
export const inputsFields2 = reactive<Field[]>([
  {
    props: {
      label: 'hola mundo',
      type: 'text',
      name: 'gola',
      placeholder: 'Hola',
      rule: yup.string().required('Please Enter your ssjsj').min(8),
    },
    component: 'BTextField',
    class: 'col-md-6',
  },

  {
    props: {
      label: 'name',
      type: 'text',
      name: 'userName2',
      placeholder: 'Hola',
      rule: yup.string().required('Please Enter your Email').min(8),
    },
    component: 'BTextField',
    class: 'col-md-6',
  },
  {
    props: {
      id: 'pass2',
      name: 'password2',
      label: 'password',
      type: 'password',
    },
    component: 'BTextField',
    class: 'col-md-6',
  },
  {
    props: {
      id: 'file-test2',
      name: 'file2',
      label: 'Upload Picture',
      type: 'file',
    },
    component: 'BTextField',
    class: 'col-md-12',
  },
  {
    props: {
      label: 'password',
      type: 'password',
      name: 'password2',
      options: [
        {
          label: 'Uno',
          value: '1',
        },
      ],
    },
    component: 'BSelect',
  },
])

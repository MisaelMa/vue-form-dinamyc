<template>
  <div class="container">
    {{ initialValues }}
    {{ select }}
    <BSelect v-model="select" name="states" :options="estados"></BSelect>
    ssss
    <button @click="addField()">add</button>
    <c-form
      id="amir"
      v-model="initialValues"
      class="row g-3 needs-validation"
      novalidate
      :fields="inputsFields"
    />

    <!-- <c-form
      id="amir"
      @submit="onSubmit"
      v-model="initialValues"
      class="row g-3 needs-validation"
      novalidate
      :fields="inputsFields2"
    /> -->
  </div>
</template>

<script setup lang="ts">
import CForm from './components/core/Form'
import BSelect from './components/core/Inputs/BSelect.vue'
import { ref, watch} from 'vue'
import { form1 /* inputsFields2 */ } from './common/forms/login.form'

const initialValues = ref({
  userName: 'josesss',
})

const select = ref('')
const estados = ref([
  {
    label: 'Quintana Roo',
    value: '1',
  },
  {
    label: 'Yucatan',
    value: '2',
  },
])

const municipios = ref([])

const onChangeOptions = (e) => {
  const stadoId = e.target.value
  const municipioByState = {
    1: [
      {
        label: 'Playa del Carmen',
        value: '1',
      },
      {
        label: 'Cancún',
        value: '2',
      },
    ],
    2: [
      {
        label: 'Merida',
        value: '1',
      },
      {
        label: 'Progreso',
        value: '2',
      },
    ],
  }

  municipios.value = municipioByState[stadoId]
}
const inputsFields = form1({
  catalogs: {
    estados,
    municipios,
  },
  onEvents: {
    onChangeOptions
  },
})

const addField = () => {
  inputsFields.push({
    id: Math.floor(1000),
    label: 'jose',
    type: 'text',
    name: 'jose',
    placeholder: 'ejemplo ingresa año',
    components: 'BTextField',
  })
}

watch(() => initialValues, () => {
  console.log('initialValues', initialValues.value)
}, { deep: true, immediate: true })
/* const aqui = ref('amir')


// a simple `name` field with basic required validator
const { value, errorMessage } = useField('name', (inputValue) => !!inputValue)

 
const { value: email } = useField('email')

const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2))
} */
</script>

<style></style>

<template>
  <div>
    <label v-if="label" :for="getFor">{{ label }}</label>
    <input
      :id="getFor"
      :type="type"
      v-model="inputValue"
      :name="name"
      class="form-control"
      v-bind:class="{
        'is-invalid': errorMessage,
        'is-valid': meta.valid && rule,
      }"
      :placeholder="placeholder"
      @change="handleFileChange"
    />
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineModel } from 'vue'
import { useField } from 'vee-validate'
import { useUtils } from '../utils/useUtils'

const props = defineProps({
  name: String,
  label: String,
  type: String,
  id: String,
  rule: [String, Object],
  placeholder: String,
})

const { getFor } = useUtils({ id: props.id })
const fileValue = ref<File | null>(null)

const { errorMessage, meta, value } = useField(
  props.name,
  {},
  {
    uncheckedValue: false,
    validateOnInput: true,
    validateOnMount: false,
    syncVModel: true,
  },
)

// Maneja archivos manualmente
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    fileValue.value = target.files // Guarda el archivo
    value.value = target.files // Asigna el archivo al campo de vee-validate
  }
}

// v-model dinámico dependiendo del tipo
const inputValue = computed({
  get: () => (props.type === 'file' ? fileValue.value : value.value),
  set: (val) => {
    if (props.type === 'file') {
      fileValue.value = val as File
      value.value = val
    } else {
      value.value = val
    }
  },
})

defineModel({
  get: () => inputValue.value,
  set: (val) => {
    inputValue.value = val
  },
})
</script>

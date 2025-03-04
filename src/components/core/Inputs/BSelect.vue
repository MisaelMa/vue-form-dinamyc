<template>
  <div>
    <label v-if="props.label" class="form-label">{{ props.label }}</label>
    <select v-model="value" class="form-select" required @change="onChangeOptions">
      <option selected disabled value="">Choose...</option>
      <option v-for="option of options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div class="invalid-feedback">Please select a valid state.</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { useField } from 'vee-validate'

const emit = defineEmits(['onChange'])
const props = defineProps({
  label: String,
  type: String,
  name: {
    type: String,
    required: true,
  },
  rule: Object,
  options: Array<Record<string, string>>,
    onChange: {
      type: Function,},

})

const {  value } = useField(
  props.name,
  {},
  {

    uncheckedValue: false,
    validateOnMount: false,
    syncVModel: true,
  },
)

defineModel({
  get: () => value.value,
  set: (val) => {
    if (val) {
      value.value = val
    }
  },
})

const onChangeOptions = (e) => {
  emit('onChange', e.target.value)
  /* console.log(props)
  props.onChange(e.target.value) */
}
</script>

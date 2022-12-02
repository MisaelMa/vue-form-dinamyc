<template>
  <div>
    {{nameRef}}
    {{value}}
    {{errorMessage}}
    <label v-if="props.label" :for="getFor">{{ props.label }}</label>
    <input
      :id="getFor"
      :type="props.type"
      :value="modelValue"
      :name="props.name"
      class="form-control"
      @input="input"
      :placeholder="props.placeholder"
    />
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please provide a valid city.</div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, toRef } from "vue";
import { useField } from 'vee-validate';

import { useUtils } from '../utils/useUtils'
const props = defineProps({
  modelValue: {
    required: false,
    default: "",
  },
  name: String,
  label: String,
  type: String,
  id: String,
  placeholder: String,
});

const { getFor } = useUtils({id:props.id})

const emit = defineEmits(["update:modelValue"]);

const input = (data) => {
  console.log(data.target.value);
  emit("update:modelValue", data.target.value);
};














function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required ,';
}
const nameRef = toRef(props.modelValue, props.name);
console.log(props.modelValue)
const { errorMessage, value } = useField(nameRef, isRequired);
</script>

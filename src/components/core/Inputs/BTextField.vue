<template>
  <div>
    <label v-if="label" :for="getFor">{{ label }}</label>
    <input
      :id="getFor"
      :type="type"
      v-model="value"
      :name="name"
      class="form-control"
      v-bind:class="{ 
        'is-invalid': errorMessage,
        'is-valid': meta.valid && rule
      }"
      @input="input"
      :placeholder="placeholder"
    />
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">{{errorMessage}}</div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
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
  rule: [String, Object],
  placeholder: String,
});

const { getFor } = useUtils({id:props.id})

const emit = defineEmits(["update:modelValue"]);

const input = (data) => {
  if (data.target.type === 'file') {
     const selectedFile = data.target.files;
    emit("update:modelValue", selectedFile);   
  } else {
    emit("update:modelValue", data.target.value);
  }
};

 
const { errorMessage, meta, value } = useField(props.name, props.rule ? props.rule : { required: false,validate: false }, {
  uncheckedValue: false,
  validateOnMount: true,
 });

</script>

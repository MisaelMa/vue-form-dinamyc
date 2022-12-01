<template>
<div>

    <label v-if="props.label"  for="validationCustom04" class="form-label">{{props.label}}</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option v-for="option of options" :key="option.value">{{option.label}}</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
</div>

</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    required: false,
    default: '',
  },
  label: String,
  type: String,
  options: Array
});

//const emit = defineEmits(["value", "update:modelValue"]);

/* const input = (data)=>{
    console.log(data.target.value);
    emit('update:modelValue', data.target.value)
} */
</script>

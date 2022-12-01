<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" @click="before">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li
        v-for="(item, i) of props.totalRows"
        :key="i"
        v-bind:class="{ active: item === props.modelValue }"
        class="page-item"
      >
        <a class="page-link" href="#">{{ item }}</a>
      </li>
      <li class="page-item" @click="next">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    default: 1,
  },
  totalRows: Number,
  perPage: Number,
});

const emit = defineEmits(["modelValue","next", "before"]);

const next = () => {
  const data = props.modelValue + 1;
  emit("update:modelValue", data);
  emit("next",data);
};

const before = () => {
  const data = props.modelValue - 1;
  emit("update:modelValue", data);
  emit("next", data);
};
</script>
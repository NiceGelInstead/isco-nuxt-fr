<template>
  <div class="mt-0 md:mt-16">
    <div class="mb-1.5 font-semibold">Pilih Kategori</div>
    <select v-model="internalCategory" class="border-b" @change="emitCategory">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "Semua" },
  options: {
    type: Array as PropType<string[]>,
    default: () => ["Semua", "berita", "artikel"],
  },
});
const emit = defineEmits(["update:modelValue"]);

const internalCategory = ref(props.modelValue);

const emitCategory = () => {
  emit("update:modelValue", internalCategory.value);
};

watch(
  () => props.modelValue,
  (val) => (internalCategory.value = val),
);
</script>

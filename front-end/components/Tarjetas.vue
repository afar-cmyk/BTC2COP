<script lang="ts" setup>
defineProps({
  divisa: {
    type: String,
    default: 'Divisa'
  },
  valor: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <div class="min-w-[300px]">
    <div class="py-6 px-4 text-gray-200 text-4xl font-bold text-center bg-sky-600 font-workSans rounded-t-md">
      {{ valor.toLocaleString("es-CO", { maximumFractionDigits: 2 }) }}
    </div>
    <div class="p-2 text-2xl font-light text-center bg-green-500 font-heebo rounded-b-md">{{ divisa }}</div>
  </div>
</template>

<style scoped>
</style>


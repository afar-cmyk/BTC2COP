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
  <div class="max-w-[20%] min-w-[66%] 2xl:min-w-[20%] md:min-w-[40%] xl:min-w-[30%]">
    <div class="py-6 px-4 text-gray-200 text-5xl font-bold text-center bg-sky-600 font-workSans rounded-t-md">
      {{ valor.toLocaleString("en") }}
    </div>
    <div class="p-2 text-2xl font-light text-center bg-green-500 font-heebo rounded-b-md">{{ divisa }}</div>
  </div>
</template>

<style scoped>
</style>


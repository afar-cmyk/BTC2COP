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
  <div class="w-8/12">
    <div class="py-6 text-gray-200 text-5xl font-bold text-center bg-sky-600 font-workSans rounded-t-md">
      ${{ valor }}
    </div>
    <div class="p-2 text-2xl font-light text-center bg-green-500 font-heebo rounded-b-md">{{ divisa }}</div>
  </div>
</template>

<style scoped>
</style>

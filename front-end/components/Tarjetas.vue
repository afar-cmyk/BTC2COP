<script lang="ts" setup>
defineProps({
  divisa: {
    type: String,
    default: 'Divisa'
  },
  valor: {
    type: Number,
    default: 12345
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center w-2/4 gap-2 border-4 rounded-md border-emerald-700 bg-emerald-500 text-slate-900 h-1/6 md:w-1/4 ">
    <h1 class="text-3xl">{{divisa}} </h1>
    <h2 class="text-4xl">$ {{valor}}</h2>
  </div>
</template>

<style scoped></style>

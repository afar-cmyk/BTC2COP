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
  <div class="flex gap-2 bg-emerald-500 text-slate-50 w-2/4  h-1/6 rounded-md flex-col justify-center items-center md:w-1/4">
    <h1 class="text-3xl">{{divisa}} </h1>
    <h2 class="text-4xl">$ {{valor}}</h2>
  </div>
</template>

<style scoped></style>

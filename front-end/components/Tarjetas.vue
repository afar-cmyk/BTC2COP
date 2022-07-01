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
  <div class="flex bg-emerald-500 text-slate-50 w-1/4 h-3/6 rounded-xl flex-col justify-center items-center">
    <h1 class="text-3xl mb-4">{{divisa}} </h1>
    <h2 class="text-4xl mb-4">$ {{valor}}</h2>
  </div>
</template>

<style scoped></style>

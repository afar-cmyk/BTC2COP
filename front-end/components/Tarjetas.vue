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
  <div class="flex flex-col items-center justify-center w-2/4 gap-2 border-4 rounded-md bg-sky-200 border-emerald-400 text-slate-900 h-1/6 md:w-1/4 ">
    <h2 class="text-5xl font-semibold font-workSans ">${{valor}}</h2>
    <h1 class="text-4xl font-heebo font-extralight ">{{divisa}}</h1>
  </div>
</template>

<style scoped></style>

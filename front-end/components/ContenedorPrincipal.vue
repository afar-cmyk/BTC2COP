<script lang="ts" setup></script>

<template>
  <main class="w-full h-screen bg-stone-100">
    <div class="flex flex-col items-center justify-center gap-4  h-1/3 bg-slate-100">
      <img class="w-40" src="../images/b2c-logo.svg" />
      <p class="text-2xl font-light text-center font-heebo">Convertidor de divisas internaciones y electronicas a pesos
        colombianos</p>
    </div>
    <div class="flex flex-col items-center justify-center h-fit bg-slate-200 py-5">
      <Convertidor />
    </div>
    <div class="flex flex-col gap-10 items-center justify-center  h-4/6 bg-slate-100">
      <h1 class=" text-sky-700 text-4xl font-bold text-center font-heebo pb-4">
        Divisas en Pesos Colombianos</h1>
      <Tarjetas divisa="US Dollar" :valor="4535" />
      <Tarjetas divisa="Bitcoin" :valor="29000000" />
    </div>
  </main>
</template>

<style scoped>
</style>

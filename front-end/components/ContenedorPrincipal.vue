<script lang="ts" setup>
const { data: datos, pending } = await useLazyAsyncData("datos", () =>
  $fetch("/api/fetch-db")
)
const bitcoin = datos.value.body[0].btc
const dollar = datos.value.body[0].cop
</script>

<template>
  <main class="w-full h-screen bg-stone-100">
    <div class="flex flex-col items-center justify-center gap-4  h-1/3 bg-slate-100">
      <img class="w-40" src="../images/b2c-logo.svg" />
      <p class="text-2xl font-light text-center font-heebo">Convertidor de divisas internaciones y electronicas a pesos
        colombianos</p>
    </div>
    <div class="flex flex-col items-center justify-center h-fit bg-slate-200 py-5">
      <Convertidor :propDollar="dollar" :prop-bitcoin="bitcoin" />
    </div>
    <div class="flex flex-col gap-10 items-center justify-center h-fit py-12 bg-slate-100">
      <h1 class=" text-sky-700 text-4xl font-bold text-center font-heebo max-w-md">
        Precio de hoy:</h1>
      <div class="flex flex-col gap-10 items-center justify-center w-fit  md:flex-row">
        <Tarjetas v-if="!pending" divisa="US Dollar" :valor="dollar" />
        <Tarjetas v-if="!pending" divisa="Bitcoin" :valor="bitcoin" />
        <h1 class="text-green-500 text-lg font-bold text-center font-heebo" v-else>Cargando Valores...</h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>

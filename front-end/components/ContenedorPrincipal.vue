<script lang="ts" setup></script>

<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen bg-stone-100">
    <div class="flex flex-col items-center justify-center w-screen">
      <img class="w-40" src="../images/b2c-logo.svg" />
      <p>Convertidor de divisas electronicas y extranjeras a pesos colombianos.</p>
    </div>
    <div class="flex flex-row gap-16 items-center justify-center w-screen">
      <Tarjetas divisa="US Dollar" :valor="4500" />
      <Tarjetas divisa="Bitcoin" :valor="45000000" />
    </div>
  </main>
</template>

<style scoped>
</style>

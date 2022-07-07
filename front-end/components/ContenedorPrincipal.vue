<script lang="ts" setup></script>

<template>
  <main class="w-screen h-screen bg-stone-100">
    <div class="flex flex-col items-center justify-center w-screen h-1/3 bg-slate-100">
      <img class="w-40" src="../images/b2c-logo.svg" />
    </div>
    <div class="flex flex-col gap-8 items-center justify-center w-screen h-4/6 bg-slate-100">
      <Tarjetas divisa="US Dollar" :valor="4500" />
      <Tarjetas divisa="Bitcoin" :valor="45000000" />
    </div>
  </main>
</template>

<style scoped>
</style>

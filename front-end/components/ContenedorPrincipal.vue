<script lang="ts" setup></script>

<template>
  <main class="flex flex-col gap-16 h-screen justify-center items-center bg-stone-100 text-neutral-900 md:flex-row">
    <img class="w-60" src="../images/b2c-logo.svg" />
    <Tarjetas divisa="US Dolar" :valor="4500" />    
    <Tarjetas divisa="Bitcoin" :valor="45000000"/>
  </main>
</template>

<style scoped></style>

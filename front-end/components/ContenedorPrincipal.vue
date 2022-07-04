<script lang="ts" setup></script>

<template>
  <main class="flex flex-col items-center justify-center h-screen gap-16 bg-stone-100 text-neutral-900 md:flex-row">
    <img class="w-60" src="../images/b2c-logo.svg" />
    <Tarjetas divisa="US Dollar" :valor="4500" />    
    <Tarjetas divisa="Bitcoin" :valor="45000000"/>
  </main>
</template>

<style scoped></style>

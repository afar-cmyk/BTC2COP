<script lang="ts" setup>
const props = defineProps({
  propDollar: {
    type: Number,
    default: 1
  },
  propBitcoin: {
    type: Number,
    default: 1
  }
})

let valorIngresado = ref<number>(0);
const valorBitcoin: number = props.propDollar * props.propBitcoin;
const arrayPrueba = ref({ '': 1, dollar: props.propDollar, bitcoin: valorBitcoin });
const valorSeleccionado = ref('');
</script>

<template>
  <p class="font-heebo font-light text-base text-slate-70 text-center mb-2">
    Seleccione una divisa:
  </p>
  <ul class="grid grid-cols-2 gap-x-5 max-w-md mx-auto mb-6">
    <li class="relative ">
      <input v-model="valorSeleccionado" class="sr-only peer" type="radio" value="dollar" name="answer"
        id="divisa_dollar">
      <label
        class="flex justify-center border border-solid border-gray-300 py-1 px-2 font-workSans bg-stone-100 text-sky-700  rounded-md cursor-pointer focus:outline-none hover:bg-stone-50 peer-checked:text-green-600 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
        for="divisa_dollar">Dollar</label>
    </li>
    <li class="relative ">
      <input v-model="valorSeleccionado" class="sr-only peer" type="radio" value="bitcoin" name="answer"
        id="divisa_bitcoin">
      <label
        class="flex justify-center border border-solid border-gray-300 py-1 px-2 font-workSans bg-stone-100 text-sky-700 rounded-md cursor-pointer focus:outline-none hover:bg-stone-50 peer-checked:text-yellow-600 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
        for="divisa_bitcoin">Bitcoin</label>
    </li>
  </ul>
  <p class="font-heebo font-light text-base text-slate-70 text-center mb-2">
    Ingrese la cantidad que desea convertir:
  </p>
  <form class="px-3 mb-8">
    <div class=" flex flex-row justify-center align-middle gap-4">
      <input type="text" maxlength="12" :disabled="valorSeleccionado == ''" v-model.number="valorIngresado" class="
    min-w-[159px]
    px-3
    py-1.5 
    text-left
    font-worksans
    text-gray-700
    border border-solid border-gray-300
    rounded
     focus:ring
     focus:ring-offset-0
     focus-visible:ring-sky-600
     focus-visible:outline-transparent">
    </div>
  </form>
  <div>
    <div class="text-sky-700 text-3xl font-bold text-center font-workSans rounded-t-md">
      {{ (valorIngresado * arrayPrueba[valorSeleccionado]).toLocaleString("en", { maximumFractionDigits: 2 }) }}
    </div>
    <div class="text-2xl font-light text-center font-heebo rounded-b-md">Pesos Colombianos</div>
  </div>
</template>

<style scoped>
</style>

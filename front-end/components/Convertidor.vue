<script lang="ts" setup>
defineProps({
  divisa: {
    type: String,
    default: 'Divisa'
  }
})

let valorIngresado = ref<number>(0);
const arrayPrueba = ref({ '': 1, dollar: 4500, bitcoin: 40000 })
const valorSeleccionado = ref('')
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

  <form class="px-3 mb-10">
    <label>
      <div class=" flex flex-row justify-center align-middle gap-4">
        <input type="text" maxlength="12" :disabled="valorSeleccionado == ''" v-model.number="valorIngresado" class="
        form-control
        block
        min-w-[159px]
        px-3
        py-1.5 
        text-left
        font-workSans
        text-gray-700
        border border-solid border-gray-300
        rounded-md
        transition
        ease-in-out
        m-0
       focus-visible:text-gray-700 focus-visible:bg-white focus-visible:border-2 focus-visible:border-red-800
      " />
      </div>
    </label>
  </form>


  <div>
    <div class="text-sky-700 text-4xl font-bold text-center font-workSans rounded-t-md">
      {{ (valorIngresado * arrayPrueba[valorSeleccionado]).toLocaleString("en") }}
    </div>
    <div class="text-2xl font-light text-center font-heebo rounded-b-md">Pesos Colombianos</div>
  </div>

  <!-- <Tarjetas :valor="valorIngresado * arrayPrueba[valorSeleccionado]" divisa="Pesos Colombianos" /> -->
</template>

<style scoped>
</style>

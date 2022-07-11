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

//150000000 input maximo
</script>

<template>
  <p class="font-heebo font-light mt-2 text-sm text-slate-70 text-center">
    Seleccione una divisa, luego ingrese la cantidad que desea convertir a pesos Colombianos.
  </p>

  <ul class="grid grid-cols-2 gap-x-5 max-w-md mx-auto">
    <li class="relative ">
      <input v-model="valorSeleccionado" class="sr-only peer" type="radio" value="dollar" name="answer"
        id="divisa_dollar">
      <label
        class="flex justify-center py-1 px-2 font-regular font-workSans bg-stone-100 text-sky-700  rounded-md cursor-pointer focus:outline-none hover:bg-stone-50 peer-checked:text-green-600 peer-checked:ring-green-500 peer-checked:ring-2"
        for="divisa_dollar">Dollar</label>
    </li>
    <li class="relative ">
      <input v-model="valorSeleccionado" class="sr-only peer" type="radio" value="bitcoin" name="answer"
        id="divisa_bitcoin">
      <label
        class="flex justify-center py-1 px-2 font-regular font-workSans bg-stone-100 text-sky-700 rounded-md cursor-pointer focus:outline-none hover:bg-stone-50 peer-checked:text-yellow-600 peer-checked:ring-yellow-500 peer-checked:ring-2"
        for="divisa_bitcoin">Bitcoin</label>
    </li>
  </ul>

  <form>
    <label>
      <div class=" flex flex-row justify-center align-middle gap-4">
        <input type="text" :disabled="valorSeleccionado == ''" v-model.number="valorIngresado" class="
        form-control
        block
        min-w-[159px]
        px-3
        py-1.5
        text-center
        font-normal
        text-gray-700
        border border-solid border-gray-300
        rounded-md
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " placeholder="Ingrese un valor" />
      </div>
    </label>
  </form>

  <Tarjetas :valor="valorIngresado * arrayPrueba[valorSeleccionado]" divisa="Pesos Colombianos" />
</template>

<style scoped>
</style>

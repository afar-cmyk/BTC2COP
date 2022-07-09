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
  <form>
    <label>
      <p class="font-heebo font-light mt-2 text-sm text-slate-70 text-center">
        Seleccione una divisa, luego ingrese la cantidad que desea convertir a pesos Colombianos.
      </p>
      <div class=" flex flex-row justify-center align-middle gap-4">
        <select v-model="valorSeleccionado" name="divisas" id="seleccionar-divisa">
          <option disabled value="">💵 Divisas 💵</option>
          <option value="dollar">Dolar</option>
          <option value="bitcoin">Bitcoin</option>
        </select>
        <input :disabled="valorSeleccionado == ''" v-model.number="valorIngresado"
          class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
      </div>
    </label>
  </form>
  <Tarjetas :valor="valorIngresado * arrayPrueba[valorSeleccionado]" divisa="Pesos Colombianos" />
</template>

<style scoped>
</style>

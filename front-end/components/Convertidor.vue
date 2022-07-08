<script lang="ts" setup>
defineProps({
  divisa: {
    type: String,
    default: 'Divisa'
  }
})

let valorIngresado = ref<number>(0);
const dollar: number = 4500;
const bitcoin: number = 10000;

</script>

<template>
  <form>
    <label>
      <p class="font-heebo font-light mt-2 text-sm text-slate-70 text-center">
        Seleccione una divisa e ingrese la cantidad que desea convertir a pesos Colombianos.
      </p>
      <div class=" flex flex-row justify-center align-middle gap-4">
        <select name="divisas" id="seleccionar-divisa">
          <option value="">💵 Divisas 💵</option>
          <option value="dolar">Dolar</option>
          <option value="bitcoin">Bitcoin</option>
        </select>
        <input v-model.number="valorIngresado"
          class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
      </div>
    </label>
  </form>
  <Tarjetas :valor="valorIngresado * dollar" divisa="Peso Colombiano" />
</template>

<style scoped>
</style>

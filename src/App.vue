<template>
  <div id="app" class="flex flex-col items-center min-h-screen p-2 text-center bg-red-100">
    <img alt="Vue logo" width="250" src="./assets/cars.png" />
    <h1>Каршеринг-калькулятор</h1>
    <p class="my-3">
      Приложение поможет выбрать самый выгодный тариф,<br />
      на основе небольшого количества данных
    </p>
    <BaseForm />
    <Results class="my-2" />
    <CarSharingList class="mt-auto" />
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
import CarSharingList from './components/CarSharingList.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    BaseForm,
    CarSharingList,
    Results,
  },
}
</script>

<style></style>

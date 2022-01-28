<template>
  <div
    id="app"
    class="flex flex-col items-center text-center min-h-screen p-2 bg-red-100"
  >
    <img alt="Vue logo" width="250" src="./assets/cars.png" />
    <h1>Каршеринг-калькулятор</h1>
    <p class="my-4">
      Приложение поможет выбрать самый выгодный тариф,<br />
      на основе небольшого количества данных
    </p>
    <Form />
    <div class="h-32">
      <Results v-if="results.length" :results="results" />
    </div>
    <CarSharingList class="mt-auto" />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import CarSharingList from "./components/CarSharingList.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Form,
    CarSharingList,
    Results,
  },
  data() {
    return {
      results: [],
    };
  },
};
</script>

<style></style>

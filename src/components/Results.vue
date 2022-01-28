<template>
  <section class="results">
    <h3>Лучшее:</h3>
    <ResultItem v-for="result in results" :key="result" />
    <button @click="other = true">Еще</button>
    <template>
      <h3>Другие варианты:</h3>
    </template>
  </section>
</template>

<script>
import ResultItem from "./ResultItem.vue";

export default {
  name: "Form",
  components: {
    ResultItem,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    other: false,
  }),
  watch: {
    results() {
      this.other = false;
    },
  },
};
</script>

<style scoped></style>

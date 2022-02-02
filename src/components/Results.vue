<template>
  <div>
    <section v-show="results.length" class="results">
      <h3>Лучшее:</h3>
      <div class="flex gap-4 m-3">
        <ResultItem v-for="result in results" v-bind="result" :key="result.company + result.title" />
      </div>
      <button class="px-6 py-2 text-white bg-gray-600 rounded hover:bg-gray-500" @click="other = true">Еще...</button>
      <section v-show="other">
        <h3>Другие варианты:</h3>
        <div class="flex gap-4 m-3">
          <ResultItem v-for="result in otherResults" v-bind="result" :key="result.company + result.title" />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import ResultItem from './ResultItem.vue'
import { get } from 'vuex-pathify'

export default {
  name: 'Form',
  components: {
    ResultItem,
  },
  data: () => ({
    other: false,
  }),
  computed: {
    ...get(['results', 'otherResults']),
  },
  watch: {
    results() {
      this.other = false
    },
  },
}
</script>

<style scoped></style>

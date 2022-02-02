<template>
  <div class="text-left max-w-[800px] px-4">
    <div class="w-4/5 mx-auto bg-gray-400">
      <div class="relative z-10 h-6 -mb-2 bg-white"></div>
      <div class="h-12 bg-yellow-200"></div>
      <div class="relative z-10 h-6 -mt-2 bg-blue-200"></div>
    </div>

    <BaseInput v-model.number="time" label="Продолжительность аренды (мин):" type="number" min="0" class="mb-3" />
    <BaseInput v-model.number="distance" label="Расстояние (км):" type="number" min="0" class="mb-3" />
    <BaseInput v-model.number="parking" label="Продолжительность стоянки (мин):" type="number" min="0" />
  </div>
</template>

<script>
// ToDo добавить линии
import BaseInput from './BaseInput.vue'
import { sync } from 'vuex-pathify'

export default {
  name: 'BaseForm',
  components: {
    BaseInput,
  },
  computed: {
    ...sync(['time', 'distance', 'parking']),
  },
}
</script>

<style></style>

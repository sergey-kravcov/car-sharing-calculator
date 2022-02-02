<template>
  <section class="p-2 border border-gray-600 rounded w-[100px]">
    <h4>{{ title }}</h4>
    <sub>{{ company }}</sub>
  </section>
</template>

<script>
export default {
  name: 'ResultItem',
  props: {
    company: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    included: {
      type: Object,
      required: true,
    },
    extra: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>

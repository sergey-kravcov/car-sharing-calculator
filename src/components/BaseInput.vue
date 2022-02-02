<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" for="time" class="text-sm font-semibold">{{ label }}</label>
    <input
      id="time"
      v-bind="$attrs"
      :value="value"
      class="px-3 py-1 rounded"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>

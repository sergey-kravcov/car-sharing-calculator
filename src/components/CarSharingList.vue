<template>
  <section>
    <h3>Список каршерингов</h3>
    <ul class="flex gap-4 text-green-500">
      <li v-for="({ url, name }, index) in companies" :key="index">
        <a :href="url" class="hover:underline" target="_blank" rel="noopener">{{ name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CarSharingList',
  data: () => ({
    companies: [
      {
        name: 'Hello',
        url: 'https://hello.by/',
      },
      {
        name: 'Везуха',
        url: 'https://vezuha.club/',
      },
      {
        name: 'Anytime',
        url: 'https://anypass.any-time.by/',
      },
      {
        name: 'Multimotors',
        url: 'https://multik.by/',
      },
    ],
  }),
}
</script>

<style></style>

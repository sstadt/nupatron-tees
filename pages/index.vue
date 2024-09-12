<template>
  <div class="message-wrapper p-10 w-full relative flex justify-center items-center flex-col space-y-12">
    <p v-if="design.type === 'simple-text'" class="text-6xl text-center">
      {{ design.options.text }}
    </p>
    <img v-else-if="design.type === 'simple-image'" :src="simpleImageName" />
    <a class="text-xs text-slate-500 text-center absolute bottom-0 left-0 w-full block py-2 hover:underline" href="/">
      Threadorama - Say it without saying it.
    </a>
  </div>
</template>

<script setup>
  import SHIRTS from '~/data/shirts';

  const { query } = useRoute();
  const design = query.t ? SHIRTS.find((shirt) => shirt.id === query.t) : {};

  const simpleImageName = computed(() => {
    return `images/${design.options.image}`;
  });
</script>

<style scoped>
  .message-wrapper {
    height: 100dvh;
  }
</style>

<template>
  <div class="p-10 h-screen w-full flex justify-center items-center flex-col space-y-12">
    <p class="text-6xl">{{ message }}</p>
  </div>
</template>

<script setup>
  const message = ref('');
  const { query } = useRoute();

  // basic message
  if (query.message) {
    message.value = query.message;
  }
</script>

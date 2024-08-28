<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style type="scss">
  /* fade */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-active {
    opacity: 0;
  }

  /* paginate-right */
  .paginate-right-enter-active,
  .paginate-right-leave-active {
    transition: all 0.3s ease;
  }

  .paginate-right-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }

  .paginate-right-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

  /* paginate-left */
  .paginate-left-enter-active,
  .paginate-left-leave-active {
    transition: all 0.3s ease;
  }

  .paginate-left-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .paginate-left-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>

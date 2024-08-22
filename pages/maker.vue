<template>
  <div class="container">
    <div class="p-6">
      <h1 class="text-5xl border-b">QR Code Maker</h1>
      <div class="flex justify-between py-8 space-x-8">
        <div class="w-1/3">
          <h2 class="text-2xl">Simple Text</h2>
          <InputText label="Message" v-model="simpleText" />
          <a :href="previewLink" target="_blank">Preview</a>
        </div>
        <div class="w-2/3" :style="{ 'height': `${qrcodeSize / 2}px` }">
          <QrcodeVue
            class="max-w-full object-contain"
            :style="{ 'height': `${qrcodeSize / 2}px` }"
            :value="qrcodeUrl"
            :size="qrcodeSize"
            level="H"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import QrcodeVue from 'qrcode.vue';
  import { productionUrl } from '~/config/site';

  // saved as PNG at 2x
  // 300 DPI prints
  // 1350 x 2 = 2700 / 300 = 9" print on shirt
  const qrcodeSize = 1350;
  const simpleText = ref('');

  const qrcodeUrl = computed(() => {
    return `${productionUrl}?message=${simpleText.value}`;
  });

  const previewLink = computed(() => {
    return `${location.origin}?message=${simpleText.value}`;
  });
</script>

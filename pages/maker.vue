<template>
  <div class="container">
    <div class="p-6">
      <h1 class="text-5xl border-b">QR Code Maker</h1>
      <div class="flex justify-between py-8 space-x-8">
        <div class="w-1/3 space-y-4">
          <InputText label="Title" v-model="title" />
          <InputText label="ID" v-model="id" />
          <div class="space-x-2">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              class="text-sm text-slate-500 font-bold"
              :class="{ 'text-black border-b border-b-slate-600': tab.id === activeTab.id }"
              @click="setTab(tab)"
            >
              {{ tab.name }}
            </button>
          </div>
          <transition :name="tabTransition" mode="out-in">
            <div v-if="activeTab.id === 'simple-text'" class="space-y-2">
              <InputText label="Message" v-model="simpleText" />
            </div>
            <div v-else-if="activeTab.id === 'simple-image'" class="space-y-2">
              <InputText label="Image File" v-model="simpleImage" />
              <img :src="simpleImageName" />
            </div>
            <div v-else-if="activeTab.id === 'custom-url'" class="space-y-2">
              <InputText label="URL" v-model="customUrl" />
            </div>
          </transition>
          <div class="space-x-4">
            <a :href="previewLink" class="inline-block" target="_blank">
              <UIButton size="sm" priority="secondary">Preview</UIButton>
            </a>
            <UIButton size="sm" priority="secondary" @click="refreshId">Refresh ID</UIButton>
          </div>
        </div>
        <div class="w-2/3">
          <pre>{{ jsonOutput }}</pre>
          <div :style="{ 'height': `${qrcodeSize / 2}px` }">
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
  </div>
</template>

<script setup>
  if (process.env.NODE_ENV !== 'development') navigateTo('/');

  import SHIRTS from '~/data/shirts.json';

  import { Vue3ColorPicker } from '@cyhnkckali/vue3-color-picker';

  import QrcodeVue from 'qrcode.vue';
  import { productionUrl } from '~/config/site';
  import { uuidv4 } from '~/helpers/utility';

  // saved as PNG at 2x
  // 300 DPI prints
  // 1350 x 2 = 2700 / 300 = 9" print on shirt
  const qrcodeSize = 1350;

  // Data

  const id = ref(uuidv4());
  const title = ref('');
  const simpleText = ref('');
  const simpleImage = ref('');
  const customUrl = ref('');

  // Tabs

  const tabs = [
    { name: 'Simple Text', id: 'simple-text' },
    { name: 'Image', id: 'simple-image' },
    { name: 'Custom URL', id: 'custom-url' },
  ];
  const {
    activeTab,
    tabTransition,
    setTab,
  } = useTabs({ tabs });

  // Computed

  const previewLink = computed(() => {
    const origin = location ? location.origin : '/';

    return `${origin}?t=${id.value}`;
  });

  const simpleImageName = computed(() => {
    return `images/${simpleImage.value}`;
  });

  const jsonOutput = computed(() => {
    const options = {};

    if (activeTab.value.id === 'simple-text') {
      options.text = simpleText.value;
    }

    if (activeTab.value.id === 'simple-image') {
      options.image = simpleImage.value;
    }

    return {
      id: id.value,
      title: title.value,
      type: activeTab.value.id,
      options: { ...options },
    };
  });

  const qrcodeUrl = computed(() => {
    if (activeTab.value.id === 'custom-url') return customUrl.value;

    return `${productionUrl}?t=${id.value}`;
  });

  // Methods

  const refreshId = () => {
    id.value = uuidv4();
  };
</script>

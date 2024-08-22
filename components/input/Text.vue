<template>
  <div class="input--text flex flex-col" :class="wrapperClass">
    <label
      v-if="label && !hideLabel"
      class="uppercase font-bold text-slate-500"
      :class="{ 'sr-only': hideLabel }"
    >
      {{ label }} <span v-if="required">*</span>
    </label>
    <input
      :type="type"
      class="px-4 py-2 text-xl outline-0 w-full"
      :class="inputClass"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <AuthPasswordStrength v-if="passwordStrength" :password="modelValue" />
    <transition name="slide-fade-left">
      <p class="text-red-400 font-bold" v-if="firstError">{{ firstError.$message }}</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'InputText',
  };
</script>

<script setup>
  const props = defineProps({
    modelValue: {},
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: null,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: [],
    },
    passwordStrength: {
      type: Boolean,
      default: false,
    },
  });

  const wrapperClass = computed(() => {
    return {
      'disabled': props.disabled,
    };
  });

  const inputClass = computed(() => {
    return {
      'bg-slate-100 focus:bg-slate-200': props.errors.length === 0,
      'bg-red-100 focus:bg-red-200': props.errors.length > 0,
      'border': !props.passwordStrength,
      'border-t border-x': props.passwordStrength,
    };
  });

  const firstError = computed(() => {
    const [firstError] = props.errors;
    return firstError;
  });
</script>

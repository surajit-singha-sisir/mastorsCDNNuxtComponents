<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot>Click me</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useButton } from '../composables/useButton'

export default defineComponent({
  name: 'MyButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value) // Line 11
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { buttonClasses, handleClick } = useButton(props, emit)
    return {
      buttonClasses,
      handleClick
    }
  }
})
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.primary {
  background-color: #007bff;
  color: white;
}
.secondary {
  background-color: #6c757d;
  color: white;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
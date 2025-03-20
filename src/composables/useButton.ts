import { computed } from 'vue'
import type { PropType } from 'vue'

export function useButton(props: {
  variant: string
  disabled: boolean
}, emit: (event: 'click', ...args: any[]) => void) {
  const buttonClasses = computed(() => [
    props.variant,
    { disabled: props.disabled }
  ])

  const handleClick = (event: Event) => {
    if (!props.disabled) {
      emit('click', event)
    }
  }

  return {
    buttonClasses,
    handleClick
  }
}
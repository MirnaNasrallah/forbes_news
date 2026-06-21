import { useLocalStorage } from '@vueuse/core'

export function useBackgroundToggle() {
  const showBackground = useLocalStorage('forbes-show-background', true)

  function toggleBackground() {
    showBackground.value = !showBackground.value
  }

  return { showBackground, toggleBackground }
}

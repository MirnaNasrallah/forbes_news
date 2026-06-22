export function useBackgroundToggle() {
  const showBackground = useState('forbes-show-background', () => false)

  function toggleBackground() {
    showBackground.value = !showBackground.value
  }

  return { showBackground, toggleBackground }
}

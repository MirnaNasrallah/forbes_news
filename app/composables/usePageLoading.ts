import type { Ref } from 'vue'

export function usePageLoading(
  pending: Ref<boolean>,
  data: Ref<unknown>,
  status?: Ref<string>,
) {
  return computed(
    () => pending.value || status?.value === 'pending' || data.value == null,
  )
}

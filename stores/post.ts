import type { Post } from '~/types/post'

export const usePostStore = defineStore('post', () => {
  const apiOperations = createApiOperation<Post>('/api/posts')

  // Add your custom store properties here
  // https://pinia.vuejs.org/core-concepts/#Setup-Stores

  return {
    ...apiOperations,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot))
}

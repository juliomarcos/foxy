<template>
  <code v-html="stories"></code>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let stories
    try {
      stories = await $content('stories').fetch()
    } catch (e) {
      error({ message: 'stories not found' })
    }
    return { stories }
  },
  layout: 'api',
}
</script>

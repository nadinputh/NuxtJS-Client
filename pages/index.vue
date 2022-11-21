<template>
  <div v-if="$auth.loggedIn" class="px-4 py-6 sm:px-0">
    <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: ['auth'],
  computed: {
    user() {
      return this.$auth.user
    },
  },
}
</script>
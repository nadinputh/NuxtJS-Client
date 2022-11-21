<template>
  <div>
    <div v-show="!isShow" class="h-screen w-screen grid place-content-center">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <span v-else>Woooooop! Something when wrong...</span>
      <nuxt-link
        to="/"
        class="no-underline hover:underline text-blue-600 text-center"
      >
        Home page
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'blank', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
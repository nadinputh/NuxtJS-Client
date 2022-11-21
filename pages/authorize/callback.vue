<template>
  <div>
    <div v-show="isShow" class="h-screen w-screen grid place-content-center">
      <span class="">Signing in...</span>
    </div>
    <div v-show="!isShow" class="h-screen w-screen grid place-content-center">
      <span class="">Woooooop! Something when wrong...</span>
      <nuxt-link
        to="/"
        class="no-underline hover:underline text-blue-600 text-center"
      >
        Go Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallbackPage',
  layout: 'blank',
  loading: false,
  data() {
    return {
      isShow: true,
    }
  },
  mounted() {
    const { errors } = this.$route.query
    if (errors) {
      this.isShow = false
    }
  },
}
</script>
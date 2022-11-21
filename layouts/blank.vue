<template>
  <nuxt />
</template>

<script>
export default {
  name: 'DefaultLayout',
  async mounted() {
    if (process.client && !!this.$fire.messaging) {
      const currentToken = await this.$fire.messaging.getToken()
      localStorage.setItem('fcm_token', currentToken)
      this.$fire.messaging.onMessage((payload) => {
        const notificationTitle = payload.notification.title
        const options = {
          body: payload.notification.body,
          icon: payload.notification.icon,
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
          },
        }

        navigator.serviceWorker.ready.then(function (serviceWorker) {
          serviceWorker.showNotification(notificationTitle, options)
        })
      })
    }
  },
}
</script>
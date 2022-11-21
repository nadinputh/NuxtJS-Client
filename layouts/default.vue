<template>
  <div class="min-h-full">
    <banner :is-show="false" />
    <navbar />
    <header class="bg-white shadow">
      <dashboard-header />
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <nuxt />
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  async mounted() {
    if (process.client && !!this.$fire.messaging) {
      const currentToken = await this.$fire.messaging.getToken()
      localStorage.setItem('fcm_token', currentToken)
      this.$fire.messaging.onMessage((payload) => {
        const options = {
          body: payload.notification.body,
          icon: payload.notification.icon,
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
          },
        }
        const notificationTitle = payload.notification.title
        console.log(payload)
        navigator.serviceWorker.ready.then(function (serviceWorker) {
          serviceWorker.showNotification(notificationTitle, options)
        })
      })
    }
  },
}
</script>
// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
// messaging.onBackgroundMessage(function (payload) {
//   // console.log(
//   //   '[firebase-messaging-sw.js] Received background message ',
//   //   payload
//   // )
//   // Customize notification here
//   data = payload
//   const options = {
//     body: data.notification.body,
//     icon: data.notification.icon,
//   }
//   const notificationTitle = data.notification.title
//   self.registration.showNotification(notificationTitle, options)
// })

// self.addEventListener('push', function (e) {
//   // console.log(
//   //   '[firebase-messaging-sw.js] Received Push message ',
//   //   e.data.json()
//   // )
//   data = e.data.json()
//   const options = {
//     body: data.notification.body,
//     icon: data.notification.icon,
//   }
//   self.registration.showNotification(data.notification.title, options)
// })

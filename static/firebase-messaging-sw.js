
    importScripts(
      'https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyBe07RcuCuMjx9lYwboAfr_QvRmOwwQxqM","authDomain":"nestjs-fcm-d7391.firebaseapp.com","databaseURL":"https:\u002F\u002Fnestjs-fcm-d7391-default-rtdb.asia-southeast1.firebasedatabase.app","projectId":"nestjs-fcm-d7391","storageBucket":"nestjs-fcm-d7391.appspot.com","messagingSenderId":"259497344937","appId":"1:259497344937:web:0b0504e0c8ccd8ea924eb8"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    // Setup event listeners for actions provided in the config:
    self.addEventListener('notificationclick', function(e) {
      const actions = [{"action":"view","url":"\u002F"}]
      const action = actions.find(x => x.action === e.action)
      const notification = e.notification

      if (!action) return

      if (action.url) {
        clients.openWindow(action.url)
        notification.close()
      }
    })

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

    
import { readFileSync } from 'fs'

require('dotenv').config()

export default {
  ssr: false,

  target: 'static',

  loading: {
    color: 'white',
    height: '3px',
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },

  head: {
    title: 'Admin Panel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [{ src: '~/plugins/sweetalert.js', mode: 'client' }],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/firebase'],

  firebase: {
    lazy: false,
    onFirebaseHosting: false,
    config: JSON.parse(readFileSync('./firebase-config.json')),
    services: {
      messaging: false,
      // {
      //   createServiceWorker: true,
      //   actions: [
      //     {
      //       action: 'view',
      //       url: '/',
      //     },
      //   ],
      //   fcmPublicVapidKey: process.env.FCM_PUBLIC_VAPI_KEY, // OPTIONAL : Sets vapid key for FCM after initialization
      //   inject: readFileSync('./firebase-messaging-sw.js'),
      // },
    },
  },

  router: {
    prefetchLinks: false,
    middleware: ['user-agent', 'auth'],
  },

  auth: {
    watchLoggedIn: true,
    redirect: {
      login: '/home',
      callback: '/authorize/callback',
      error: '/authorize/error',
      home: '/',
    },
    strategies: {
      local: false,
      oauth: {
        scheme: '~/schemes/oauth2',
        endpoints: {
          authorization: new URL(
            process.env.OAUTH_AUTHORIZATION,
            process.env.OAUTH_BASE_URL
          ),
          token: new URL(process.env.OAUTH_TOKEN, process.env.OAUTH_BASE_URL),
          userInfo: new URL(
            process.env.OAUTH_USERINFO,
            process.env.OAUTH_BASE_URL
          ),
          logout: !process.env.OAUTH_LOGOUT
            ? false
            : new URL(process.env.OAUTH_LOGOUT, process.env.OAUTH_BASE_URL),
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1 * 60,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 30 * 60,
        },
        accessType: undefined,
        redirectUri: undefined,
        logoutRedirectUri: undefined,
        tokenRequired: true,
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: process.env.OAUTH_CLIENT_ID,
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256',
      },
    },
  },

  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:8500/',
  },

  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },

  pwa: {
    workbox: {
      importScripts: ['./firebase-messaging-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV !== 'production',
    },
  },
}

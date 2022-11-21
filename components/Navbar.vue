<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
              alt="Workflow"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link to="/">
                <a
                  href="#"
                  :class="
                    isActive('/') + ' px-3 py-2 rounded-md text-sm font-medium'
                  "
                  >Dashboard</a
                >
              </nuxt-link>

              <a
                href="#"
                :class="
                  isActive('/teams') +
                  ' px-3 py-2 rounded-md text-sm font-medium'
                "
                >Team</a
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- <nuxt-link to="/notifications"> -->
            <button
              type="button"
              :class="
                isActive('/notifications') +
                ' focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded-full p-1'
              "
              @click="isNotificationOpen = !isNotificationOpen"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <!-- </nuxt-link> -->

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  id="user-menu-button"
                  type="button"
                  class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="isProfileMenuOpen = !isProfileMenuOpen"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="Profile"
                  />
                </button>
              </div>
              <div
                v-show="isProfileMenuOpen"
                class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <nuxt-link to="profile">
                  <a
                    id="user-menu-item-0"
                    href="#"
                    :class="
                      isActive('/profile', true) +
                      ' block px-4 py-2 text-sm text-gray-700'
                    "
                    role="menuitem"
                    tabindex="-1"
                    @click="isProfileMenuOpen = !isProfileMenuOpen"
                    >Your Profile</a
                  >
                </nuxt-link>

                <a
                  id="user-menu-item-2"
                  href="#"
                  class="block px-4 py-2 text-sm text-bold text-red-700"
                  role="menuitem"
                  tabindex="-1"
                  @click="logout"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/bars-3

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
              Heroicon name: outline/x-mark

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-show="isMobileMenuOpen" id="mobile-menu" class="md:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/">
          <a
            href="#"
            :class="
              isActive('/') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            "
            aria-current="page"
            >Dashboard</a
          >
        </nuxt-link>

        <a
          href="#"
          :class="
            isActive('/teams') +
            ' block px-3 py-2 rounded-md text-base font-medium'
          "
          >Team</a
        >
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div v-if="$auth.loggedIn" class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt="Profile"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              {{ $auth.user.lastName }} {{ $auth.user.firstName }}
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              @{{ $auth.user.username }}
            </div>
          </div>
          <button
            type="button"
            class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div v-if="$auth.loggedIn" class="mt-3 space-y-1 px-2">
          <nuxt-link to="profile">
            <a
              href="#"
              :class="
                isActive('/profile') +
                ' block px-3 py-2 rounded-md text-base font-medium'
              "
              >My Profile</a
            >
          </nuxt-link>

          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-red-400 hover:bg-gray-700 hover:text-red"
            @click="logout"
            >Sign out</a
          >
        </div>
      </div>
    </div>
    <notification
      :show="isNotificationOpen"
      :on-close="() => (isNotificationOpen = !isNotificationOpen)"
    />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      isSignOut: false,
      isProfileMenuOpen: false,
      isMobileMenuOpen: false,
      isNotificationOpen: false,
    }
  },
  computed: mapGetters(['isAuthenticated']),
  mounted() {},
  methods: {
    async login() {
      await this.$auth.loginWith('oauth')
    },
    logout() {
      this.isProfileMenuOpen = false
      this.isMobileMenuOpen = false
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: 'You want to do this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, Sign me out!',
        })
        .then(async (result) => {
          if (result.value) {
            await this.$auth.logout()
          }
        })
    },
    isActive(path, isLink) {
      if (path === this.$route.path) {
        if (isLink) {
          return 'bg-gray-100'
        }
        return 'bg-gray-900 text-white'
      }
      if (isLink) {
        return
      }
      return 'text-gray-300 hover:bg-gray-700 hover:text-white'
    },
  },
}
</script>
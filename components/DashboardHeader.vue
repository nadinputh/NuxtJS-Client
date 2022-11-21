<template>
  <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900">
      Hello,
      {{
        $auth.loggedIn
          ? $auth.user.fullName || `${$auth.user.firstName} ${$auth.user.lastName}`
          : 'friend'
      }}!
    </h1>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeaderComponent',
}
</script>
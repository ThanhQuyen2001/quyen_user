<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <NuxtLogo />
    <SplashScreen :loading="loading" @update="(val) => (loading = val)" />
  </div>
</template>

<script>
import SplashScreen from '~/components/SplashScreen.vue'
export default {
  name: 'IndexPage1',
  components: {
    SplashScreen,
  },
  data() {
    return {
      loading: true,
    }
  }
}
</script>

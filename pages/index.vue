<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <NuxtLogo />
    <SplashScreen :loading="loading" @update="(val) => (loading = val)" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage1',
  data() {
    return {
      loading: true,
    }
  }
}
</script>

<template>
  <div class="splash-screen" :class="{ 'splash-screen__hide': !loading }">
    <div class="splash-screen__img">
      <img loading="lazy" src="~assets/images/logo.svg" alt="Logo" />
    </div>
    <h1 class="ml-4">Xã thông minh</h1>
  </div>
</template>
<script>
export default {
  name: 'SplashScreen',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: () => 500,
    },
  },
  data() {
    return {
      internal: null,
    }
  },
  beforeDestroy() {
    if (this.internal) {
      clearTimeout(this.internal)
    }
  },
  mounted() {
    if (this.duration) {
      this.internal = setTimeout(() => {
        this.$emit('update', false)
      }, this.duration)
    }
  },
}
</script>

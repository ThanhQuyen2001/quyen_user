<template>
  <header>
    <Topbar />
    <Navbar />
  </header>
</template>

<script>
import Navbar from './partials/Navbar.vue'
import Topbar from './partials/Topbar.vue'

export default {
  name: 'UserHeader',
  components: { Topbar, Navbar },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style>
</style>

<template>
  <div class="layout-master" id="to-top">
    <div>
      <UserHeader />
      <Nuxt />
      <UserFooter />
      <a v-show="isShow" class="to-top-button" href="#" v-scroll-to="'#to-top'"><i class='bx bx-chevron-up'></i></a>
    </div>
    <div v-if="loading" class="d-flex justify-content-center align-items-center" style="height: 100vh">
      <NuxtLogo />
      <SplashScreen :loading="loading" @update="(val) => (loading = val)" />
    </div>
  </div>
</template>
<script>
import UserHeader from '~/components/layouts/UserHeader.vue'
import UserFooter from '~/components/layouts/UserFooter.vue'
import SplashScreen from '~/components/SplashScreen.vue';

export default {
  name: 'LayoutMaster',
  components: { UserHeader, UserFooter, SplashScreen },
  data() {
    return {
      loading: false,
      isShow: false,
      eventToTop: ""
    };
  },
  watch: {
    "$route.name": {
      handler() {
        this.loading = true
      }
    },
    "$route.params.category": {
      handler() {
        this.loading = true
      }
    },
    "$route.params.id": {
      handler() {
        this.loading = true
      }
    }
  },
  mounted() {
    this.eventToTop = window.addEventListener('scroll', () => {
      if (window.scrollY >= 300) {
        if (this.isShow === true) return;
        this.isShow = true
      }
      else {
        if (this.isShow === false) return;
        this.isShow = false
      }
    })
  },
  destroyed() {
    if (this.eventToTop) {
      window.removeEventListener(this.eventToTop)
    }
  },
}
</script>

<style scoped>
.to-top-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999999;
  display: block;
  background-color: #28666E;
  color: #fff;
  line-height: 0;
  font-size: 30px;
  font-weight: 300;
  padding: 10px;
  border-radius: 50%;
}
.layout-master {
  overflow: hidden;
}
</style>
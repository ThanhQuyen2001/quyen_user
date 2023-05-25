<template>
  <div>
    <div>
      <div class="row">
        <div class="col-lg-4 mb-4 pointer" v-for="item in entries" :key="item.id" @click="$router.push({ path: `images/${item.id}/detail` })">
          <vueper-slides
          ref="slideService"
          :dragging-distance="70" 
          class="no-shadow thumbnails"
          :duration="5000"
          :arrows="false"
          :bullets="false"
          autoplay
          fade
          fixed-height="300px" 
          >
            <vueper-slide
              v-for="(image, index) in item.images"
              :key="index"
              :image="$addPrefixImage(image)"
            />
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      entries: [],
    }
  },
  created() {
    this.getListImages()
  },
  methods: {
    async getListImages() {
      const response = await this.$store.dispatch('images/ListImages')
      if (response.code === 200) {
        this.entries = response.data.entries
      }
    },
  },
}
</script>
<style scoped>
.position-relative {
  width: 100%;
  height: 100%;
}
.mx-auto {
  color: #fff;
  position: absolute;
  font-size: 42px;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
</style>
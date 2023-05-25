<template>
  <div class="mt-5">
    <home-service>
      <template #category>
        <home-header-category
          title="VIDEO"
          name-emit="smartDevices"
          @viewAll="$router.push('data/videos')"
        />
      </template>
      <template #content>
        <div class="container">
          <vueper-slides
            class="no-shadow"
            :arrows-outside="false"
            :visible-slides="3"
            slide-multiple
            :slide-ratio="1 / 4"
            :dragging-distance="70"
            :gap="3"
            :breakpoints="{
              800: { visibleSlides: 2, slideMultiple: 2, slideRatio: 1 / 3 },
              600: { visibleSlides: 1, slideMultiple: 1, slideRatio: 2 / 3 },
            }"
          >
            <vueper-slide
              v-for="(item, index) in entries"
              :key="index"
              :title="item.name"
              :video="item.video"
            />
          </vueper-slides>
        </div>
      </template>
    </home-service>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import HomeHeaderCategory from './partials/home-header-category.vue'
import HomeService from '~/components/homes/partials/home-service.vue'
export default {
  components: {
    HomeService,
    VueperSlides,
    VueperSlide,
    HomeHeaderCategory,
  },
  data() {
    return {
      entries: [],
    }
  },
  methods: {
    formatPrice(price) {
      const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
      return VND.format(price)
    },
    getSrcYoutube(url) {
      if (url.includes('embed')) {
        return {
          url: url,
          props: {
            allow: 'autoplay',
          },
        }
      }
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      const ID = match && match[2].length === 11 ? match[2] : null
      return {
        url: 'https://www.youtube.com/embed/' + ID,
        props: {
          allow: 'autoplay',
        },
      }
    },
    async getListVideos() {
      const response = await this.$store.dispatch('videos/ListVideos')
      if (response.code === 200) {
        this.entries = response.data.entries.slice(0,6)
        this.entries = this.entries.map((video) => {
          return {
            ...video,
            video: this.getSrcYoutube(video.url),
          }
        })
      }
    },
  },
  created() {
    this.getListVideos()
  },
}
</script>

<style>
.vueperslides__bullet .default {
  background-color: rgba(251, 251, 251, 0.925);
  border-width: 2px;
  box-shadow: none;
  transition: 0.3s;
  width: 14px;
  height: 14px;
}

.vueperslides__bullet--active .default {
  background-color: #42b983;
  border-color: #42b983;
}

.vueperslide__content-wrapper:not(
    .vueperslide__content-wrapper--outside-top
  ):not(.vueperslide__content-wrapper--outside-bottom) {
  justify-content: flex-end !important;
  align-items: flex-start;
  padding: 12px;
  color: black;
  text-decoration: none;
}

.vueperslides__inner div,
.vueperslides__inner a {
  text-decoration: none !important;
  border: none !important;
}

.vueperslide__title {
  color: #44494d;
  font-size: 18px;
}

.vueperslide__content {
  color: #44494d;
  font-weight: 700;
  font-size: 30px;
}
</style>

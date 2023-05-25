<template>
  <div>
    <div>
      <div>
        <div class="text-default font-size-22 font-weight-bold mb-2">
          Mô tả giải pháp
        </div>
        <div v-html="entry.description"></div>
      </div>
      <div>
        <img class="img-contain" :src="entry.image" alt="" style="height: 600px;" />
      </div>
      <div>
        <div class="text-default font-size-22 font-weight-bold mb-2 mt-4">
          Hướng dẫn cài đặt và sử dụng
        </div>
        {{ entry.instruction }}
      </div>
    </div>
    <div class="col-lg-12 mt-5">
      <div class="row">
        <div class="col-lg-6 mb-5">
          <vueper-slides
          ref="slideService"
            :dragging-distance="70"
            class="no-shadow thumbnails"
            @slide="changSelected"
            :duration="5000"
            :arrows="false"
            :bullets="false"
            autoplay
            fixed-height="500px"      
          >
            <vueper-slide
            v-for="(item,index) in entry.detail_instruction" :key="index"
              :image="item.image"
            />
          </vueper-slides>
        </div>
        <div class="col-lg-6 mb-5">
          <ol class="numbered">
            <li @click="changeSlide(index)" :class="{ 'focus-slide': selected == index }"
            class="pointer"
              v-for="(item, index) in entry.detail_instruction" :key="index">
              {{ item.text }}
            </li>
          </ol>
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
    VueperSlide,
  },
  data() {
    return {
      selected: 0,
      loading: true,
      entry: {
        description: '',
      }
    }
  },
  methods: {
    changSelected(event) {
      this.selected = event.currentSlide.index
    },
    changeSlide(index) {
      this.$refs.slideService.goToSlide(index)
    },
    async getRuralServicesDetail() {
      const response = await this.$store.dispatch('rural-services/GetRuralServicesDetail', this.$route.params.id)
      console.log(response);
      if (response.code === 200) {
        this.entry = response.data.entry
      }
    },
  },
  created() {
    this.getRuralServicesDetail()
  }
}
</script>
<style scoped lang="scss">
// RESET
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
}

// TIMELINE ORDERED LIST
ol.numbered {
  $bullet-line-width: 3px;
  $bullet-color: #b3b3b3;
  $bullet-border-width: $bullet-line-width;
  $bullet-background-color: white;
  $bullet-size: 40px;
  border-left: $bullet-line-width solid $bullet-color;
  counter-reset: numbered-list;
  margin-left: 10px;
  position: relative;

  li {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 80px;
    padding-left: 30px;

    &:last-child {
      border-left: $bullet-line-width solid $bullet-background-color;
      margin-left: -$bullet-line-width;
    }

    &:before {
      $half-of-font-size: -0.65em;
      background-color: $bullet-color;
      border: $bullet-border-width solid $bullet-background-color;
      border-radius: 50%;
      color: $bullet-background-color;
      content: counter(numbered-list, decimal);
      counter-increment: numbered-list;
      display: block;
      font-weight: bold;
      width: $bullet-size;
      height: $bullet-size;
      margin-top: $half-of-font-size;
      line-height: $bullet-size;
      position: absolute;
      left: -$bullet-size / 2 - $bullet-line-width / 2 - $bullet-border-width + 3px;
      text-align: center;
    }
  }

  .focus-slide {
    &:before {
      background-color: #44b97c !important;
    }

    color: #44b97c;
  }
}
</style>
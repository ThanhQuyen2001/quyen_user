<template>
  <div>
    <h4 class="text-center text-default font-weight-bold bg-white py-4 mb-0 mt-5 font-md-20" style="letter-spacing: 2px">
      MẠNG LƯỚI NÔNG THÔN THÔNG MINH
    </h4>
    <GmapMap :center="center" :zoom="12" :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    }" map-type-id="terrain" style="height: 70vh">
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="{
        lat: Number(m.coordinates.lat),
        lng: Number(m.coordinates.long),
      }" :clickable="true" :draggable="false" :icon="{
  url: require('@/assets/images/home/logo_map.png'),
  scaledSize: { width: 50, height: 50 },
}" @click="showInformation(m)" />
    </GmapMap>
    <div>
      <b-modal id="bv-modal-network" size="sm" hide-footer fade hide-header centered>
        <div class="div">
          <img class="img-cover rounded" style="height: 165px" :src="makerSelected.avatar" alt="" />
        </div>
        <div class="text-center text-default font-weight-bold py-2">
          {{ makerSelected.full_name }}
        </div>
        <div style="border-bottom: 2px solid #28666e"></div>
        <div v-show="isOpenFullModel">
          <div class="d-flex py-2">
            <i class="mr-1 bx bxs-phone-call"></i>
            <span class="font-size-12">{{ makerSelected.phone_number }}</span>
          </div>
          <div class="d-flex py-2">
            <i class="mr-1 bx bxs-envelope"></i>
            <span class="font-size-12">{{ makerSelected.email }}</span>
          </div>
          <div class="d-flex py-2">
            <i class="mr-1 bx bxs-map"></i>
            <span class="font-size-12">{{ makerSelected.province.name + ', ' + makerSelected.district.name + ', ' +
              makerSelected.ward.name }}</span>
          </div>
          <div class="d-flex py-2">
            <i class="mr-1 bx bx-globe"></i>
            <span class="font-size-12">{{ 'https://xathongminh.com' + makerSelected.url }}</span>
          </div>
          <div class="d-flex py-2">
            <span style="width: 16px; line-height: 1">
              <i class="bx bxs-right-arrow-alt text-default animate-size"></i>
            </span>
            <span @click="changeWard(makerSelected.url)" class="ml-1 font-size-12 text-default font-weight-bold pointer">
              Khám phá ngay
            </span>
          </div>
        </div>
        <div v-if="isShowIconModal" class="pt-2 text-center">
          <i @click="isOpenFullModel = !isOpenFullModel" :class="{
            'bx bx-chevron-down p-1 text-white pointer':
              isOpenFullModel == false,
            'bx bx-chevron-up p-1 text-white pointer':
              isOpenFullModel == true,
          }" class="style_model"></i>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 16.628056, lng: 107.346667 },
      markers: [],
      isOpenFullModel: true,
      isShowIconModal: false,
      makerSelected: {
        province: {
          name: "Tỉnh"
        },
        district: {
          name: "Huyện"
        },
        ward: {
          name: 'xã'
        },
        name: 'Mô hình xã thông minh Phong hòa',
        phone: '(+84) 0543553414',
        email: 'phonghoa@thuathienhue.gov.vn',
        address: 'Xã Phong Hòa, Huyện Phong Điền, Tỉnh Thừa Thiên Huế',
        url: 'http://xathongminh.vn/xaphonghoa',
      },
    }
  },
  methods: {
    showInformation(maker) {
      this.makerSelected = maker
      this.$bvModal.show('bv-modal-network')
    },
    handleShowMore() {
      const widthScreen = window.innerWidth
      if (widthScreen <= 768) {
        this.isOpenFullModel = false
        this.isShowIconModal = true
      }
    },
    changeWard(url) {
      window.location.href = url + '/home'
    },
    async getListRuralNetworks() {
      const response = await this.$store.dispatch(
        'rural-networks/ListRuralNetworks'
      )
      if (response.code === 200) {
        this.markers = response.data.entries.map(item => {
          return {
            ...item,
            url: '/' + item.ward.slug
          }
        })
      }
    },
  },
  mounted() {
    this.handleShowMore()
    this.getListRuralNetworks()
  },
}
</script>

<style scoped>
@media (max-width: 992px) {
  .font-md-20 {
    font-size: 18px;
    letter-spacing: 0px !important;
  }
}

@keyframes styleSize {
  from {
    width: 0px;
  }

  to {
    width: 16px;
  }
}

.animate-size {
  overflow: hidden;
  animation: styleSize 1s infinite;
}

.style_model {
  background-color: #44b97c;
  font-size: 18px;
  border-radius: 50%;
}
</style>
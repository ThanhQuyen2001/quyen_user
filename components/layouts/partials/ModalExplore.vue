<template>
    <div class="explore-modal">
        <b-modal id="explore" size="lg" hide-footer fade hide-header centered>
            <div class="d-flex justify-content-between">
                <div class="d-flex header" style="gap:6px;">
                    <img width="34" height="34" src="@/assets/images/colorfulLogo.png" alt="logo" />
                    <p class="mb-0">XÃ THÔNG MINH</p>
                </div>
                <i class='bx bx-x close-icon' @click="() => {this.$bvModal.hide('explore')}"></i>
            </div>
            <div class="text-success mt-4 mb-4 font-size-19">Mô hình Xã Thông Minh được xây dựng dựa trên các yếu tố thế
                mạnh
                và nhu cầu của từng địa phương</div>
            <div class="row">
                <div class="col-lg-7 pr-lg-5">
                    <div class="mb-1" style="text-align: justify;">
                        Các giải pháp của mô hình Xã Thông Minh được lựa chọn, xây dựng và triển khai dựa trên các yếu tố
                        thế mạnh
                        về văn hóa, kinh tế xã hội,... và nhu cầu của người dân, cán bộ chính quyền ở khu vực nông thôn.
                    </div>
                    <div style="text-align: justify;">
                        Từ đó hình thành nên mạng lưới kết nối dữ liệu, chia sẻ thông tin tri thức và kinh nghiệm xây dựng
                        mô hình
                        cho các địa phương trên cả nước.
                    </div>
                </div>
                <div class="col-lg-5"><img src="@/assets/images/navbar_explore/explore.png" alt=""></div>
            </div>
            <div class="inter mt-4 mb-4">Chọn địa điểm bạn cần đến để khám phá</div>
            <div class="row px-lg-2">
                <div class="col-lg-4 px-lg-1">
                    <multiselect label="name" track-by="id" :allow-empty="false" :clear-on-select="false"
                        placeholder="Chọn Tỉnh/Thành" :show-labels="false" :searchable="true" v-model="province"
                        :options="provinces">
                        <span slot="noOptions">Danh sách trống</span>
                        <span slot="noResult">Danh sách trống</span>
                        <span slot="placeholder">Chọn Tỉnh/Thành</span>
                    </multiselect>
                </div>
                <div class="col-lg-4 px-lg-1">
                    <multiselect label="name" track-by="id" :allow-empty="false" :clear-on-select="false"
                        placeholder="Chọn Quận/Huyện" :show-labels="false" :searchable="true" v-model="district"
                        :options="districts">
                        <span slot="noOptions">Danh sách trống</span>
                        <span slot="noResult">Danh sách trống</span>
                        <span slot="placeholder">Chọn Quận/Huyện</span>
                    </multiselect>
                </div>
                <div class="col-lg-4 px-lg-1">
                    <multiselect label="name" track-by="id" :allow-empty="false" :clear-on-select="false"
                        placeholder="Chọn Phường/xã" :show-labels="false" :searchable="true" v-model="ward"
                        :options="wards">
                        <span slot="noOptions">Danh sách trống</span>
                        <span slot="noResult">Danh sách trống</span>
                        <span slot="placeholder">Chọn Phường/xã</span>
                    </multiselect>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            provinces: [],
            districts: [],
            wards: [],
            province: null,
            district: null,
            ward: null
        }
    },
    props: {
        openExplore: {
            type: Boolean
        }
    },
    watch: {
        openExplore() {
            this.$bvModal.show('explore')
        },
        "province": {
            handler() {
                this.districts = []
                this.district = null
                if (this.province) {
                    this.getDistricts(this.province.id)
                }
            },
            deep: true
        },
        "district": {
            handler() {
                this.wards = []
                this.ward = null
                if (this.district) {
                    this.getWards(this.district.id)
                }
            },
            deep: true
        },
        "ward": {
            handler() {
                if (this.ward) {
                    this.$bvModal.hide('explore')
                    console.log(process.env, "env");
                    window.location.href = '/' + this.ward.slug + '/home'
                }
            },
            deep: true
        }
    },
    methods: {
        async getProvinces() {
            let response = await this.$store.dispatch('address/ListProvinces')
            if (response.code === 200) {
                this.provinces = response.data.entries
            }
        },
        async getDistricts(options) {
            let response = await this.$store.dispatch('address/ListDistricts', options)
            if (response.code === 200) {
                this.districts = response.data.entries
            }
        },
        async getWards(options) {
            let response = await this.$store.dispatch('address/ListWards', options)
            if (response.code === 200) {
                this.wards = response.data.entries
            }
        }
    },
    created() {
        this.getProvinces()
    }
}
</script>

<style scoped>
.header {
  font-family: 'UTM Aptima';
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  color: #28666E;
}
.close-icon {
    padding: 5px;
    border-radius: 100px;
    height: 26px;
}
.close-icon:hover {
    background-color: rgba(184, 184, 184, 0.315);
}
</style>

<style lang="scss">
@import 'vue-multiselect/dist/vue-multiselect.min.css';

.inter {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}

// fix multiselect weird height when using a placeholder
.multiselect__placeholder {
    display: inline-block !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
}

// error class on multiselect
.multiselect.invalid .multiselect__tags {
    border: 1px solid #f86c6b !important;
}

// override default multiselect styles
.multiselect__option--highlight {
    background: #428bca !important;
}

.multiselect__option--highlight:after {
    background: #428bca !important;
}

.multiselect__tags {
    padding: 5px !important;
    min-height: 10px;
}

.multiselect__placeholder {
    margin-left: 10px;
    margin-top: 2px;
}

.multiselect__tag {
    background: #f0f0f0 !important;
    border: 1px solid rgba(60, 60, 60, 0.26) !important;
    color: black !important;
    margin-bottom: 0px !important;
    margin-right: 5px !important;
}

.multiselect__tag-icon:after {
    color: rgba(60, 60, 60, 0.5) !important;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
    background: #f0f0f0 !important;
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
    color: red !important;
}
.multiselect__single {
    margin-bottom: 0px !important;
}
</style>
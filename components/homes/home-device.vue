<template>
    <div class="mt-5">
        <home-service>
            <template #category>
                <home-header-category title="THIẾT BỊ THÔNG MINH" @viewAll="$router.push('smart-devices/list')" />
            </template>
            <template #content>
                <div class="container">
                    <vue-horizontal-list :items="entries" :options="options">
                        <!-- <template v-slot:nav-prev>
                            <div>👈</div>
                        </template>
                        <template v-slot:nav-next>
                            <div>👉</div>
                        </template> -->
                        <template v-slot:default="{ item }">
                            <div class="item p-3 bg-white border rounded pointer rounded">
                                <div class="device-image_hover" style="height: 210px;">
                                    <img :src="$addPrefixImage(item.images[0])" alt="" class="img-cover">
                                </div>
                                <div class="font-size-20 text-secondary text-ellipsis-1">{{ item.name }}</div>
                                <div class="font-size-28 font-weight-bold">{{ item.price | formatMoney }}</div>
                            </div>
                        </template>
                    </vue-horizontal-list>
                </div>
            </template>
        </home-service>
    </div>
</template>

<script>
import Vue from 'vue'
import VueHorizontalList from 'vue-horizontal-list';
import HomeService from '~/components/homes/partials/home-service.vue';
import HomeHeaderCategory from '~/components/homes/partials/home-header-category.vue';
export default Vue.extend({
    components: {
        HomeService,
        HomeHeaderCategory,
        VueHorizontalList
    },
    data() {
        return {
            entries: [],
            options: {
                responsive: [
                    { end: 576, size: 1 },
                    { start: 576, end: 768, size: 2 },
                    { start: 768, end: 992, size: 3 },
                    { size: 3 },
                ],
                list: {
                    // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
                    windowed: 1200,
                    // Because: #app {padding: 80px 24px;}
                    padding: 24,
                },
                // autoplay: {
                //     // enable/disable playing slideshow
                //     play: true,
                //     // the delay duration between slides in milliseconds
                //     speed: 10000,
                //     // if setup, the slideshow will be in the loop.
                //     repeat: true,
                // },
            },
        }
    },
    filters: {
        formatMoney(price) {
            return price.toLocaleString('en-US') + 'đ';
        }
    },
    methods: {
        async getListSmartDevices() {
            const response = await this.$store.dispatch('devices/ListSmartDevices')
            if (response.code === 200) {
                this.entries = response.data.entries
            }
        },
    },
    created() {
        this.getListSmartDevices()
    },
});
</script>
<style scoped>
.rounded {
    border-radius: 20px !important;
}

.device-image_hover:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
}

.device-image_hover {
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
}</style>
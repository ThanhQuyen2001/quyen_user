<template>
    <div class="h-30">
        <vueper-slides :infinite="true" :autoplay="true" :slide-ratio="1 / 3" lazy lazy-load-on-drag
            :breakpoints="{ 800: { slideRatio: 1 / 2 } }">
            <vueper-slide v-for="(slide, i) in entries" :key="i" :image="$addPrefixImage(slide.image)" />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            entries: []
        };
    },
    created() {
        this.getListBanners()

    },
    methods: {
        async getListBanners() {
            const response = await this.$store.dispatch('home/ListBanners')
            if (response.code === 200) {
                this.entries = response.data.entries
            }
        },
    },
};
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
</style>
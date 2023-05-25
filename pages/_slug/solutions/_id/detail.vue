<template>
    <div>
        <div v-if="!loading">
            <div class="font-size-24 font-weight-500">{{ entry.name }}</div>
            <div class="my-2">{{ time }}</div>
            <div v-if="entry.field">Lĩnh vực: <span class="text-default">{{ entry.field }}</span></div>
            <div>
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur. Nisi lorem consectetur diam penatibus. 
                    Lacus justo euismod magnis adipiscing at. Tellus enim lacinia sed nec imperdiet 
                    sagittis duis suspendisse eget. Dignissim enim arcu volutpat at vulputate rutrum. 
                    Eu magna tincidunt purus nunc enim nam morbi consectetur porttitor.
                </p>
            </div>
            <hr>
            <div>
                <div v-if="contentCount > 1" class="d-flex position-relative mb-3 mr-3" style="width: fit-content; float: left; margin-left: 9px;">
                    <div 
                        class="d-flex flex-column"
                        style="width: 5px; align-items: center; background-color: #28666E; gap: 10px;">
                        <img
                            v-for="(content, index) in entry.content" :key="index"
                            style="width: 26px; height: 26px; background-color: #fff; border-radius: 50%;"
                            src="~/assets/images/solution/logo.png" :alt="content.title"
                        >
                    </div>
                    <div class="d-flex flex-column" style="gap: 10px; line-height: 26px; margin-left: 20px;">
                        <div 
                            v-for="(content, index) in entry.content" :key="index"
                            class="font-weight-bold font-size-16 solution-color line-height-26">
                            <a @click.prevent="goToContent(index+1)" :href="'#' + (index+1)">
                                {{ content.title }}
                            </a>
                        </div>
                    </div>
                    <div class="solution-border position-absolute mt-3">
                    </div>
                </div>
                <div v-for="(content, index) in entry.content" :key="index">
                    <div :id="index + 1" class="font-weight-bold font-size-24 solution-color">{{ content.title }}</div>
                    <div class="text-justify solution-color line-17" v-html="content.sub_content"></div>
                </div>
            </div>
            <hr>
            <div class="mb-5">
                <div class="font-size-26 font-weight-500 text-default mt-2 mb-4">TIN CÙNG CHUYÊN MỤC</div>
                <VueSlickCarousel :arrows="true" :dots="true" :slidesToShow="3" :autoplay="true" :infinite="true"
                    :slidesToScroll="3" :responsive="[
                        {
                            breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true }
                        }]">
                    <div>
                        <div class="px-2">
                            <div>
                                <img class="img-cover"
                                    src="https://furnibuy.com/wp-content/uploads/2021/03/fb-hue-111-tranh-hoang-thanh-hue-co-kinh-sieu-dep.jpg"
                                    alt="" draggable="false">
                            </div>
                            <div class="font-size-20 font-weight-bold">
                                Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên
                            </div>
                            <div class="mt-1">
                                08:44, 10/04/2022
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="px-2">
                            <div>
                                <img class="img-cover"
                                    src="https://furnibuy.com/wp-content/uploads/2021/03/fb-hue-111-tranh-hoang-thanh-hue-co-kinh-sieu-dep.jpg"
                                    alt="" draggable="false">
                            </div>
                            <div class="font-size-18 font-weight-bold">
                                Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên
                            </div>
                            <div class="mt-1">
                                08:44, 10/04/2022
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="px-2">
                            <div>
                                <img class="img-cover"
                                    src="https://furnibuy.com/wp-content/uploads/2021/03/fb-hue-111-tranh-hoang-thanh-hue-co-kinh-sieu-dep.jpg"
                                    alt="" draggable="false">
                            </div>
                            <div class="font-size-18 font-weight-bold">
                                Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên
                            </div>
                            <div class="mt-1">
                                08:44, 10/04/2022
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="px-2">
                            <div>
                                <img class="img-cover"
                                    src="https://furnibuy.com/wp-content/uploads/2021/03/fb-hue-111-tranh-hoang-thanh-hue-co-kinh-sieu-dep.jpg"
                                    alt="" draggable="false">
                            </div>
                            <div class="font-size-18 font-weight-bold">
                                Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên
                            </div>
                            <div class="mt-1">
                                08:44, 10/04/2022
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="px-2">
                            <div>
                                <img class="img-cover"
                                    src="https://furnibuy.com/wp-content/uploads/2021/03/fb-hue-111-tranh-hoang-thanh-hue-co-kinh-sieu-dep.jpg"
                                    alt="" draggable="false">
                            </div>
                            <div class="font-size-18 font-weight-bold">
                                Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên
                            </div>
                            <div class="mt-1">
                                08:44, 10/04/2022
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
        <Loading v-else />
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Loading from '@/components/layouts/Loading'
export default {
    components: {
        VueSlickCarousel, Loading
    },
    data(){
        return{
            entry:{},
            time: '',
            contentCount: 0,
            loading: true
        }
    },
    methods: {
        goToContent(id) {
            let tag = document.getElementById(id + '')
            window.scrollTo(0, tag.offsetTop - 136)
        },
        async getSmartSolutionDetail(){
            const response = await this.$store.dispatch('smart-solutions/GetSmartSolutionDetail', this.$route.params.id)
            if (response.code === 200) {
                this.entry = response.data.entry
                this.time = this.getTime(this.entry.created_at)
                this.contentCount = this.entry.content.length
                this.loading = false
            }
        },
        getTime(dateTimeString) {
            const dateTime = new Date(dateTimeString);
            const year = dateTime.getFullYear();
            const month = dateTime.getMonth() + 1;
            const day = dateTime.getDate();
            const hour = dateTime.getHours();
            const minute = dateTime.getMinutes();
            return `${hour}:${minute}, ${day}/${month}/${year}`
        }
    },
    created(){
        this.getSmartSolutionDetail()
    }
}
</script>

<style scoped>
.solution-color {
    color: #28666E;
}

.line-height-26 {
    line-height: 26px;
}

.line-17 {
    line-height: 1.7;
}

.solution-border {
    border-bottom: 1px solid #737373;
    top: 100%;
    left: -10px;
    right: 0;
}

a {
    text-decoration: none;
}

.description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #28666E;
}
</style>
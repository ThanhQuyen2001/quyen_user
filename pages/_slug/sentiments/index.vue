<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <breadcrumb v-model="breadcrumb" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div>
                    <div class="text-default font-size-22 font-weight-bold mb-2">Mô tả giải pháp</div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque et a deserunt porro ad quam,
                    necessitatibus eveniet temporibus sit sed asperiores, placeat minima corporis, esse provident libero?
                    Dignissimos, nostrum eius!
                </div>
                <div>
                    <img class="img-contain" src="~/assets/images/sentiment/sentiment-banner.png" alt="">
                </div>
                <div>
                    <div class="text-default font-size-22 font-weight-bold mb-2 mt-4">Hướng dẫn cài đặt và sử dụng</div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minus magni omnis magnam animi, illum
                    deserunt quasi possimus! Tenetur officiis omnis expedita fugit dolores deserunt voluptate nam adipisci
                    eaque corporis!
                </div>
            </div>
            <div class="col-lg-12 mt-5">
                <div class="row">
                    <div class="col-lg-6 mb-5">
                        <vueper-slides :dragging-distance="70" class="no-shadow thumbnails" @slide="changSelected" :duration="5000" :arrows="false"
                            :bullets="false" autoplay fixed-height="500px">
                            <vueper-slide :image="require(`~/assets/images/sentiment/sentiment_1.png`)" />
                            <vueper-slide :image="require(`~/assets/images/sentiment/sentiment_2.png`)" />
                            <vueper-slide :image="require(`~/assets/images/sentiment/sentiment_3.png`)" />
                            <vueper-slide :image="require(`~/assets/images/sentiment/sentiment_4.png`)" />
                            <vueper-slide :image="require(`~/assets/images/sentiment/sentiment_5.png`)" />
                        </vueper-slides>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <ol class="numbered">
                            <li :class="{ 'focus-slide': selected == 0 }">Khởi động ứng dụng XÃ THÔNG MINH trên màn hình
                                điện
                                thoại, chọn Phản ánh
                                nông thôn để sử
                                dụng chức năng </li>
                            <li :class="{ 'focus-slide': selected == 1 }">Chọn biểu tượng “+” để thực hiện chức năng gửi
                                phản
                                ánh</li>
                            <li :class="{ 'focus-slide': selected == 2 }">Nhập nội dung phản ánh</li>
                            <li :class="{ 'focus-slide': selected == 3 }">Bấm nút “Gửi phản ánh” để hoàn tất phản ánh</li>
                            <li :class="{ 'focus-slide': selected == 4 }">Chọn biểu tượng “Cá nhân” để theo dõi và quản lí
                                phản ánh hiện trường
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Breadcrumb from '~/components/layouts/Breadcrumb.vue';
export default {
    components: {
        Breadcrumb,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            breadcrumb: [
                {
                    name: 'Trang chủ',
                    href: '/home'
                },
                {
                    name: 'Phản ánh hiện trường',
                    active: true
                }
            ],
            selected: 0,
            loading: true
        };
    },
    methods: {
        changSelected(event) {
            this.selected = event.currentSlide.index
        }
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
            $half-of-font-size: -0.2em;
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
            background-color: #44B97C !important;
        }
        color: #44B97C;
    }
}
</style>
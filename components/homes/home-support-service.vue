<template>
    <div class="my-5">
        <home-service>
            <template #category>
                <home-header-category title="HỖ TRỢ DỊCH VỤ" :view-all="false" name-emit="news" />
            </template>
            <template #content>
                <div class="container">
                    <div class="row">
                        <div class="col-4 col-sm-12 col-md-12 col-lg-4 pb-4 pointer" :class="{ 'px-1': isMobile }" @click="$router.push('/freq-asked-questions')">
                            <b-card v-if="isMobile" title="Câu hỏi thường gặp"
                                :img-src="require('@/assets/images/home/home-question.png')" img-alt="Image" img-top tag="article"
                                class="mb-2 img-cover">
                            </b-card>
                            <b-card v-else title="Câu hỏi thường gặp" :img-src="require('@/assets/images/home/home-question-lg.png')"
                                img-alt="Image" img-top tag="article" class="mb-2 img-cover p-2">
                            </b-card>
                        </div>
                        <div class="col-4 col-sm-12 col-md-12 col-lg-4 pb-4 pointer" :class="{ 'px-1': isMobile }" @click="$router.push('/feedback')">
                            <b-card v-if="isMobile" title="Góp ý dịch vụ"
                                :img-src="require('@/assets/images/home/home-feed-back.png')" img-alt="Image" img-top tag="article"
                                class="mb-2 img-cover">
                            </b-card>
                            <b-card v-else title="Góp ý dịch vụ" :img-src="require('@/assets/images/home/home-feed-back-lg.png')"
                                img-alt="Image" img-top tag="article" class="mb-2 img-cover p-2">
                            </b-card>
                        </div>
                        <div class="col-4 col-sm-12 col-md-12 col-lg-4 pb-4 pointer" :class="{ 'px-1': isMobile }" @click="$router.push('/video-tutorials')">
                            <b-card v-if="isMobile" title="Video hướng dẫn"
                                :img-src="require('@/assets/images/home/home-instruct.png')" img-alt="Image" img-top tag="article"
                                class="mb-2 img-cover">
                            </b-card>
                            <b-card v-else title="Video hướng dẫn" :img-src="require('@/assets/images/home/home-instruct-lg.png')"
                                img-alt="Image" img-top tag="article" class="mb-2 img-cover p-2">
                            </b-card>
                        </div>
                    </div>
                </div>
            </template>
        </home-service>
    </div>
</template>

<script>
import HomeService from '~/components/homes/partials/home-service.vue';
import HomeHeaderCategory from '~/components/homes/partials/home-header-category.vue';
export default {
    components: {
        HomeService,
        HomeHeaderCategory
    },
    data() {
        return {
            isMobile: false,
            entries: [
                {
                    title: 'Câu hỏi thường gặp',
                    icon_mb: '@/assets/images/home/home-question.png',
                    icon_web: '@/assets/images/home/home-question-lg.png'
                },
                {
                    title: 'Góp ý dịch vụ',
                    icon_mb: '@/assets/images/home/home-feed-back.png',
                    icon_web: '@/assets/images/home/home-feed-back-lg.png'
                },
                {
                    title: 'Video hướng dẫn',
                    icon_mb: '@/assets/images/home/home-instruct.png',
                    icon_web: '@/assets/images/home/home-instruct-lg.png'
                }
            ]
        }
    },
    mounted() {
        const widthScreen = window.innerWidth
        if (widthScreen <= 576) {
            this.isMobile = true
        }
    }
}
</script>

<style scoped>
.card {
    background-color: #f1f1f1;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.02);
}

.card-title {
    text-align: center;
    font-size: 24px;
    color: #262626;
    border-radius: 12px;
    margin-top: 20px;
}

img {
    height: 257px !important;
    object-fit: contain;
}

@media (max-width: 576px) {
    .card-title {
        font-size: 10px;
        margin: 0;
        margin-top: 8px;
    }

    img {
        height: 52px !important;
        width: auto;
        object-fit: contain;
    }

    .card {
        background-color: transparent;
        box-shadow: none;
    }
}
</style>
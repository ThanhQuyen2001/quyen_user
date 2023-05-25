<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <breadcrumb v-model="breadcrumb" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/layouts/Breadcrumb.vue';
export default {
    components: {
        Breadcrumb
    },
    data() {
        return {
            breadcrumb: [
                {
                    name: 'Trang chủ',
                    href: '/home'
                },
                {
                    name: 'Hình ảnh',
                    active: true
                }
            ]
        };
    },
    methods: {
        handleBreadcrumb() {
            let name = this.$route.name
            if (name !== 'slug-data-videos' && name !== 'slug-data-videos-id-detail' && name !== 'slug-data-images' && name !== 'slug-data-images-id-detail' && name !== 'slug-data-statistic') {
                this.$router.push({ path: '/data/images' })
            }
            switch (name) {
                case 'slug-data-statistic':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Dữ liệu thống kê',
                            active: true
                        }
                    ]
                    break;
                case 'slug-data-images':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Danh sách album',
                            active: true
                        }
                    ]
                    break;
                case 'slug-data-images-id-detail':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Danh sách album',
                            href: '/data/images',
                        },
                        {
                            name: 'Hình ảnh',
                            active: true
                        }
                    ]
                    break;
                case 'slug-data-videos-id-detail':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Video',
                            href: '/data/videos',
                        },
                        {
                            name: 'Chi tiết video',
                            active: true
                        }
                    ]
                    break;
                default:
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Video',
                            active: true
                        }
                    ]
            }
        }
    },
    watch: {
        '$route.name': {
            handler() {
                this.handleBreadcrumb()
            }
        }
    },
    created() {
        this.handleBreadcrumb()
    }
}
</script>
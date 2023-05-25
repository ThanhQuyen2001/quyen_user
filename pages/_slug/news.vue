<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <breadcrumb v-model="breadcrumb" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9">
                <Nuxt />
            </div>
            <div class="col-lg-3">
                <shortcut />
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/layouts/Breadcrumb.vue';
import Shortcut from '~/components/news/news-shortcut.vue';
export default {
    components: {
        Breadcrumb,
        Shortcut
    },
    data() {
        return {
            breadcrumb: [
                {
                    name: 'Trang chủ',
                    href: '/home'
                },
                {
                    name: 'Tin tức',
                    active: true
                }
            ],
            categories: [
                {
                    id: '610916b3734c025ba99e0cbd',
                    name: 'Tin tức nội bộ'
                },
                {
                    id: '6144aaa96d13470a8439bdb0',
                    name: 'Chỉ đạo điều hành'
                },
                {
                    id: '6144aab56d13470a8439bdb5',
                    name: 'Kinh tế xã hội'
                },
                {
                    id: '620b135b0265e23e143ace40',
                    name: 'Thông tin thị trường'
                }
            ]
        };
    },
    methods: {
        getCategory() {
            let id = this.$route.params.category
            return this.categories.filter(item => item.id === id)[0]
        },
        handleBreadcrumb() {
            let name = this.$route.name
            if (name !== 'slug-news-id-detail' && name !== 'slug-news-list' && name !== 'slug-news-category-id-detail' && name !== 'slug-news-category-list') {
                this.$router.push({ path: '/news/list' })
            }
            switch (name) {
                case 'slug-news-list':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Tin tức',
                            active: true
                        }
                    ]
                    break;
                case 'slug-news-category-list':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Tin tức',
                            href: '/news/list'
                        },
                        {
                            name: this.getCategory().name,
                            active: true
                        }
                    ]
                    break;
                case 'slug-news-category-id-detail':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Tin tức',
                            href: '/news/list'
                        },
                        {
                            name: this.getCategory().name,
                            href: `/news/${this.getCategory().id}/list`
                        },
                        {
                            name: 'Chi tiết tin tức',
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
                            name: 'Tin tức',
                            active: true
                        }
                    ]
            }
        }
    },
    watch: {
        '$route': {
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


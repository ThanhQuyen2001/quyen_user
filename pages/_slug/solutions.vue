<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <breadcrumb v-model="breadcrumb" />
            </div>
        </div>
        <Nuxt />
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
                    name: 'Tin tức nội bộ',
                    active: true
                }
            ]
        };
    },
    methods: {
        handleBreadcrumb() {
            let name = this.$route.name
            if (name !== 'slug-solutions-id-detail' && name !== 'slug-solutions-list') {
                this.$router.push({ path: '/solutions/list' })
            }
            switch (name) {
                case 'slug-solutions-list':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Giải pháp thông minh',
                            active: true
                        }
                    ]
                    break;
                case 'slug-solutions-id-detail':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Giải pháp thông minh',
                            href: '/solutions/list'
                        },
                        {
                            name: 'Thông tin giải pháp',
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
                            name: 'Giải pháp thông minh',
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

<style scoped lang="scss"></style>

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
        Breadcrumb,
    },
    data() {
        return {
            breadcrumb: [
                {
                    name: 'Trang chủ',
                    href: '/home'
                },
                {
                    name: 'Dịch vụ nông thôn số',
                    active: true
                }
            ]
        };
    },
    methods: {
        handleBreadcrumb() {
            let name = this.$route.name
            if (name !== 'slug-rural-services-id-detail' && name !== 'slug-rural-services') {
                this.$router.push({ path: '/rural-services' })
            }
            switch (name) {
                case 'slug-rural-services':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Dịch vụ nông thôn số',
                            active: true
                        }
                    ]
                    break;
                case 'slug-rural-services-id-detail':
                this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Dịch vụ nông thôn số',
                            href: '/rural-services'
                        },
                        {
                            name: 'Chi tiết',
                            active: true
                        },
                    ]
                    break;
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
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
                    name: 'Góp ý dịch vụ',
                    active: true
                }
            ]
        };
    },
    methods: {
        handleBreadcrumb() {
            let name = this.$route.name
            if (name !== 'slug-feedback' && name !== 'slug-feedback') {
                this.$router.push({ path: '/feedback' })
            }
            switch (name) {
                case 'slug-feedback':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Góp ý dịch vụ',
                            active: true
                        }
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
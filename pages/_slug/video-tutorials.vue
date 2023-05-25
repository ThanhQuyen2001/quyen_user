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
                    name: 'Video hướng dẫn',
                    active: true
                }
            ]
        };
    },
    methods: {
        handleBreadcrumb() {
            let name = this.$route.name
            if (name !== 'slug-video-tutorials' && name !== 'slug-video-tutorials') {
                this.$router.push({ path: '/video-tutorials' })
            }
            switch (name) {
                case 'slug-video-tutorials':
                    this.breadcrumb = [
                        {
                            name: 'Trang chủ',
                            href: '/home'
                        },
                        {
                            name: 'Video hướng dẫn',
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
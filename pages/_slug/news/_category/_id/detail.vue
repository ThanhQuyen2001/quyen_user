<template>
    <div>
        <div class="font-size-26 font-weight-500">
            {{ entry.title }}
        </div>
        <div class="d-flex justify-content-between my-3">
            <span>{{ entry.created_at | formatDateTime }}</span>
        </div>
        <div class="text-justify overflow-hidden" v-html="entry.content">
        </div>
        <div class="mb-5">
            <div class="font-size-26 font-weight-500 text-default mt-5 mb-4">
                TIN CÙNG CHUYÊN MỤC
            </div>
            <vue-horizontal-list :items="entries" :options="options">
                <template v-slot:default="{ item }">
                    <div @click="$router.push({ name: $route.name, params: { id: item.id, category: item.category_id } })"
                        class="item rounded pointer">
                        <div style="height: 220px;" class="img-news rounded">
                            <img :src="$addPrefixImage(item.thumbnail)" alt="" class="img-cover rounded">
                        </div>
                        <div class="font-size-18 text-ellipsis-2">{{ item.title }}</div>
                        <div class="font-size-16">{{ item.created_at | formatDateTime }}</div>
                    </div>
                </template>
            </vue-horizontal-list>
        </div>
    </div>
</template>
  
<script>
import VueHorizontalList from 'vue-horizontal-list';
export default {
    components: {
        VueHorizontalList
    },
    data() {
        return {
            entry: {
                title: "",
                content: ""
            },
            entries: [{}, {}, {}, {}],
            options: {
                responsive: [
                    { end: 576, size: 1 },
                    { start: 576, end: 768, size: 2 },
                    { start: 768, end: 992, size: 3 },
                    { size: 4 },
                ],
                list: {
                    windowed: 1200,
                    padding: 24,
                },
            },
        }
    },
    filters: {
        fixContent(value) {
            if (!value) return value;
            return value.length > 40 ? value.slice(0, 40) + '...' : value
        }
    },
    watch: {
        "$route": {
            async handler() {
                await this.getNews()
                await this.getNewsSameCategory()
            }
        }
    },
    methods: {
        async getNews() {
            const response = await this.$store.dispatch('news/GetNews', this.$route.params.id)
            if (response.code === 200) {
                this.entry = response.data.entry
            }
        },
        async getNewsSameCategory() {
            const response = await this.$store.dispatch('news/GetNewsSameCategory', this.entry.category_id)
            if (response.code === 200) {
                this.entries = response.data.entries.filter(item => item.id !== this.$route.params.id)
            }
        },
    },
    async created() {
        await this.getNews()
        await this.getNewsSameCategory()
    },
}
</script>
  
<style>
.h-200 {
    height: 200px !important;
}

figure {
    text-align: center;
    margin: auto;
    padding: auto;
}
</style>

<style scoped>
.img-news {
    overflow: hidden;
}

.img-news img {
    transform: scale(1.03);
    transition: 0.2s ease-in;
}

.img-news:hover img {
    transform: scale(1);
}
</style>
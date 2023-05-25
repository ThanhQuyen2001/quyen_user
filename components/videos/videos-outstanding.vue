<template>
    <div>
        <div class="row mt-4">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-4 mb-4" v-for="(item, index) in videos" :key="index">
                        <div @click="$router.push('/data/videos/1/detail')">
                            <div>
                                <div style="height: 220px;">
                                    <iframe frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" class="border"  width="100%"  height="220" :src="getSrcYoutube(item.url)">
                                    </iframe>
                                </div>
                            </div>
                            <div class="px-2 mt-2">
                                <div class="font-size-16 font-weight-600 mb-2 line-2">
                                    {{ item.name }}
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span class="font-size-12">UBND xã Phong Hòa</span>
                                    <span class="font-size-12">{{item.created_at | formatDateTime}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <table-pagination :pagination="pagination" />
        </div>
    </div>
</template>

<script>
import TablePagination from '~/components/datatable/table-pagination.vue';
export default {
    components: {
        TablePagination
    },
    data() {
        return {
            pagination: {
                deleted: false,
                length: 12,
                order_by: "created_at",
                order_dir: "desc",
                search: "",
                page: 1,
                total: 35
            },
            url: "https://youtu.be/InHd3c_8ci0",
            videos:[]
        };
    },
    methods: {
        getSrcYoutube(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
            const match = url.match(regExp)
            const ID = (match && match[2].length === 11) ? match[2] : null
            return 'https://www.youtube.com/embed/' + ID + '?autoPlay=0'
        },
        async getListVideos() {
            const response = await this.$store.dispatch('videos/ListVideos')
            if(response.code === 200) {
                this.videos = response.data.entries
                this.pagination = response.data.pagination
            }
        },
    },
    created() {
        this.getListVideos()
    },
}
</script>
<style scoped>
.border{
    border-radius: 15px;
}
</style>
<template>
    <div>
        <home-service>
            <template #category>
                <home-header-category title="DỊCH VỤ NÔNG THÔN SỐ" :categories="categories" :view-all="true"
                    @viewAll="$router.push({ path: '/rural-services' })" @update="update"/>
            </template>
            <template #content>
                <div class="container">
                    <b class="font-size-22">{{entry.name}}</b>
                    <div class="row flex-wrap-reverse">
                        <div class="col-md-6">
                            <!-- <div class="mt-2 text-justify text-ellipsis-13 color-sentiment style-ellipsis-md">
                                {{ entry.description.replace(/<[^>]*>/g, '').replaceAll('&nbsp;', '') }}
                            </div> -->
                            <div class="mt-2 text-justify text-ellipsis-13 color-sentiment style-ellipsis-md" v-html="entry.description"></div>
                            <!-- <div class="text-default mt-2 pointer">
                                Xem thêm
                            </div> -->
                        </div>
                        <div class="col-md-6" >
                            <div class="pointer" style="height: 400px;" @click="$router.push({path: `/rural-services/${entry.id}/detail`})">
                                <img class="img-cover" :src="entry.image" alt="">
                            </div>
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
            entry:{
                name:'',
                description:''
            },
            categories: []
        }
    },
    methods:{
        async getListRuralServices(){
            const response = await this.$store.dispatch('rural-services/ListRuralServices')
            if(response.code === 200) {
                this.categories = response.data.entries
                this.entry = this.categories[0]
            } 
        },
        update(item){
            this.entry = item
        }
    },
    created(){
        this.getListRuralServices()
    }
}
</script>

<style scoped>
@media (max-width: 992px) {
    .style-ellipsis-md {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
    }
}
</style>
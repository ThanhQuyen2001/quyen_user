<template>
    <div class="mt-5">
        <home-service>
            <template #category>
                <home-header-category title="GIẢI PHÁP THÔNG MINH" :categories="categories" :view-all="true"
                    @viewAll="$router.push({path: '/solutions/list'})" />
            </template>
            <template #content>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-1" v-for="(entry,index) in entries.slice(0,1)" :key="index">
                            <div class="h-100 position-relative">
                                <div class="style-image-solution">
                                    <img class="img-cover" style="height: 70%;"
                                        :src="$addPrefixImage(entry.image)" alt="" @error="replaceBrokenImage">
                                </div>
                                <div class="position-absolute style-content-solution">
                                    <b class="font-size-23">{{entry.name | lengthName}}</b>
                                    <div class="style-ellipsis-mobile">
                                        Lorem ipsum dolor sit amet consectetur. Nisi integer consequat accumsan viverra
                                        ornare auctor. Est ornare quis non nec diam arcu mi tellus. Ut interdum
                                        ullamcorper scelerisque scelerisque. Amet consectetur integer ut est id
                                        hendrerit.
                                        Sed ultricies eu vulputate arcu porta aliquam venenatis in iaculis. Cursus
                                        feugiat.
                                    </div>
                                    <div 
                                        @click="$router.push({path: `/solutions/${entry.id}/detail`})"
                                        class="text-default mt-2 pointer">
                                        Xem chi tiết
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-1 col-sm-0">
                            <div class="d-flex flex-column" style="gap: 10px" >
                                <div class="flex-item-solution d-flex" v-for="(entry,index) in entries.slice(1,3)" :key="index">
                                    <div class="flex-1 flex-md-1">
                                        <img :src="$addPrefixImage(entry.image)"
                                            alt="" class="img-cover" @error="replaceBrokenImage">
                                    </div>
                                    <div class="flex-1 flex-md-2 p-3">
                                        <b>{{entry.name | lengthName}}</b>
                                        <div class="line-2 mt-2">Lorem ipsum dolor sit amet consectetur. At
                                            eu dis imperdiet lobortis urna sed</div>
                                        <div class="text-default mt-2 pointer" 
                                        @click="$router.push({path: `/solutions/${entry.id}/detail`})">
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="flex-item-solution d-flex">
                                    <div class="flex-1 flex-md-1">
                                        <img src="https://i.pinimg.com/736x/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg"
                                            alt="" class="img-cover">
                                    </div>
                                    <div class="flex-1 flex-md-2 p-3">
                                        <b>Lorem</b>
                                        <div class="line-2 mt-2">Lorem ipsum dolor sit amet consectetur. At
                                            eu dis imperdiet lobortis urna sed</div>
                                        <div class="text-default mt-2 pointer">
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-item-solution d-flex">
                                    <div class="flex-1 flex-md-1">
                                        <img src="https://logico.com.vn/upload_images/images/2022/11/30/hinh-nen-dep-1.jpg"
                                            alt="" class="img-cover">
                                    </div>
                                    <div class="flex-1 flex-md-2 p-3">
                                        <b>Lorem</b>
                                        <div class="line-2 mt-2">Lorem ipsum dolor sit amet consectetur. At
                                            eu dis imperdiet lobortis urna sed</div>
                                        <div class="text-default mt-2 pointer">
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div> -->
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
            entries:[],
            categories: [
                {
                    name: "Dịch vụ nông thôn",
                    alias: ''
                },
                {
                    name: "Chính quyền số",
                    alias: ''
                },
                {
                    name: "Dịch vụ doanh nghiệp",
                    alias: ''
                },
                {
                    name: "Giải trí - Kết nối",
                    alias: ''
                },
                {
                    name: "Thương mại",
                    alias: ''
                }
            ],
        }
    },
    methods:{
        async getListSmartSolution(){
            const response = await this.$store.dispatch('smart-solutions/ListSmartSolutions')
            if (response.code === 200){
                this.entries = response.data.entries
            }
        },
        replaceBrokenImage(event) {
            event.target.src = require("@/assets/images/default.jpg");
        },
    },
    filters:{
        lengthName(value){
            if (value.length > 25) {
                return value.slice(0, 25) + "...";
            }
            return value;
        }
    },
    created(){
        this.getListSmartSolution()
    }
}
</script>

<style scoped>
.flex-item-solution {
    height: calc(442px / 3);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #E6E6E6;
}

.line-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
    .col-sm-0 {
        display: none;
    }

    .style-ellipsis-mobile {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
}

@media (max-width: 577px) {
    .style-ellipsis-mobile {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}


@media (max-width: 992px) {
    .flex-md-1 {
        flex: 1;
    }

    .flex-md-2 {
        flex: 2;
    }

    .flex-item-solution {
        height: calc(400px / 3);
        margin-top: 12px;
    }
}
</style>
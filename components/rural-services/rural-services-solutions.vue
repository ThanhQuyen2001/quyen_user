<template>
    <div>
        <div class="inter mt-5 mb-5">CÁC GIẢI PHÁP</div>
        <div class="row">
            <div class="verticalLine col-lg-4 mb-5 col-md-6" v-for="(item,index) in solutions" :key="index">
                <div>
                    <img style="width: 120px;" :src="item.icon" alt="">
                </div>
                <div class="font-size-18 font-weight-500 mt-3 mb-3">{{item.name}}</div>
                <div class="font-size-16 text-secondary mb-3 text-ellipsis-3">{{item.description.replace(/<[^>]*>/g, '').replaceAll('&nbsp;', '') 
                
                }}</div>
                <div class="text-success pointer" @click="$router.push({path: `/rural-services/${item.id}/detail`})">
                    <span>Xem chi tiết</span>
                    <i class='bx bx-right-arrow-alt animate-size'></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    data() {
        return{
            solutions:[]
        }
    },
    methods:{
        async getListRuralServices(){
            const response = await this.$store.dispatch('rural-services/ListRuralServices')
            if(response.code === 200) {
                this.solutions = response.data.entries
            } 
        }
    },
    created() {
        this.getListRuralServices()
    },
}
</script>
<style scoped>
.inter{
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 500;
}
.verticalLine{
    border-left: 2px solid #ccc;
}
.verticalLine:nth-child(3n-2){
    border-left: none
}

.animate-size {
    overflow: hidden;
    animation: styleSize 1s infinite;
}
@media (max-width: 992px) {
    .verticalLine:nth-child(3n-3){
        border-left: none
    }
}

@media (max-width: 687px){
    .verticalLine{
        border-left: none
    }
}
</style>
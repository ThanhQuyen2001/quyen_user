<template>
    <div>
        <div class="mb-3">
            {{ entry.created_at | formatDateTime }}
        </div>
        <h3>{{entry.title}}</h3>
        <span v-html="entry.description"></span>
        <div class="row">
            <img class="col-lg-4 mb-5 detail-img" v-for="(image,index) in entry.images" :key="index" :src="$addPrefixImage(image)"/>
            <img class="col-lg-4 mb-5 detail-img" src="@/assets/images/data/deafult.png"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            entry:{
                title:'',
            },
        }
    },
    methods:{
        async getListImages(){
            const response = await this.$store.dispatch('images/GetImage', this.$route.params.id)
            if(response.code === 200){
                this.entry = response.data.entry
            }
        }
    },
    created(){
        this.getListImages()
    },
}
</script>
<style scoped>
.detail-img{
    height: 250px;
}
</style>
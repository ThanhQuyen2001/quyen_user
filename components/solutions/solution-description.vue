<template>
    <div class="mb-4">
        <div>Lorem ipsum dolor sit amet consectetur. Nisi lorem consectetur diam penatibus. Lacus justo euismod magnis
            adipiscing
            at. Tellus enim lacinia sed nec imperdiet sagittis duis suspendisse eget. Dignissim enim arcu volutpat at
            vulputate
            rutrum. Eu magna tincidunt purus nunc enim nam morbi consectetur porttitor.</div>
        <div class="text-center py-3" style="height: 60vh;"><img class="img-contain"
                src="@/assets/images/solution/solution_banner.png" alt=""></div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia iure vel sit perspiciatis hic nesciunt
            ipsum nihil numquam, delectus, corrupti ipsam pariatur cupiditate a unde et odio officia voluptatibus?</div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            entry: {}
        }
    },
    async created() {
        let response = await this.$store.dispatch('solutions/GetSmartSolutionHome')
        console.log(response);
        if(response.code === 200) {
            this.entry = response.data.entry
        }
    }
}

</script>
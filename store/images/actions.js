import api from '@/api'

export default {
    // Images
    async ListImages() {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListImages
        })
        return response.data;
    },
    async GetImage(_,ImageId){
        const response = await this.$axios({
            method:'GET',
            url: api.params("GetImage", { id: ImageId })
        })
        return response.data;
    }
}
import api from '@/api'
export default{
    async ListVideoTutorials(){
        const response = await this.$axios({
            method:'GET',
            url:api.ListVideoTutorials,
        })
        return response.data
    }
}
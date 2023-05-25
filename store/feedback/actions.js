import api from '@/api'

export default{
    async CreateFeedbacks(_,data){
        const response = await this.$axios({
            method: 'POST',
            url: api.CreateFeedbacks,
            data: data
        })
        return response.data;
    }
}
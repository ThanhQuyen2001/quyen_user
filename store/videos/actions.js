import api from '@/api'

export default {
    async ListVideos() {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListVideos
        })
        return response.data;
    },
}
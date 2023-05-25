import api from '@/api'

export default {
    async ListFreqAskedQuestions(_, options) {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListFreqAskedQuestions,
            params: options
        })
        return response.data;
    },
}
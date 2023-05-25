import api from '@/api'

export default {
    async ListArticleTypes(_, options) {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListArticleTypes,
            params: options
        })
        return response.data;
    },
}
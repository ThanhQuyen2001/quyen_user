import api from '@/api'

export default {
    async ListRuralNetworks() {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListRuralNetworks
        })
        return response.data;
    },
}
import api from '@/api'

export default {
    async GetSmartSolutionHome() {
        const response = await this.$axios({
            method: 'GET',
            url: api.GetSmartSolutionHome
        })
        return response.data;
    },
}
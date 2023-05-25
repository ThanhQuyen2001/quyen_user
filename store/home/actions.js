import api from '@/api'

export default {
    async ListBanners() {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListBanners
        })
        return response.data;
    },
    async ListMenu() {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListMenu
        })
        return response.data
    },
}

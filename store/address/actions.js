import api from '@/api'

export default {
    async ListProvinces() {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListProvinces
        })
        return response.data;
    },
    async ListDistricts(_, id) {
        let params = {
            province: id
        }
        const response = await this.$axios({
            method: 'GET',
            url: api.ListDistricts,
            params: params
        })
        return response.data;
    },
    async ListWards(_, id) {
        let params = {
            district: id
        }
        const response = await this.$axios({
            method: 'GET',
            url: api.ListWards,
            params: params
        })
        return response.data;
    }
}
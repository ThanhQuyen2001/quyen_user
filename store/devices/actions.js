import api from '@/api'

export default {
    async ListSmartDevices(_, options) {
        const response = await this.$axios({
            method: 'GET',
            url: api.ListSmartDevices,
            params: options
        })
        return response.data;
    },
    async SmartDeviceType() {
        const response = await this.$axios({
            method: 'GET',
            url: api.SmartDeviceType
        })
        return response.data;
    },
}
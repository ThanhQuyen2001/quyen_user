import api from '@/api'

export default {
  async ListSmartSolutions() {
    const response = await this.$axios({
      method: 'GET',
      url: api.ListSmartSolutions,
      params: {
        length: 5,
      },
    })
    return response.data
  },
  async GetSmartSolutionDetail(_, SolutionId) {
    const response = await this.$axios({
      method: 'GET',
      url: api.params('GetSmartSolutions', { id: SolutionId }),
    })
    return response.data
  },
}

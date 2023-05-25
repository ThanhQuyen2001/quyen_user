const apiCategory = [
  "/api/web/article-category"
]

function isPageDashboard(path) {
  return path.includes('admin')
}

function isApiCategory(url) {
  return apiCategory.includes(url)
}


export default function ({ $axios, store, route }) {
  /* eslint-disable */
  $axios.onRequest((config) => {
    if (!isPageDashboard(route.path) && !isApiCategory(config.url)) {
      let ID = store.state.common.currentWard.ward
      if (ID) {
        config.params = {
          ...config.params,
          ward: ID
        }
      }
    }
    console.log('Making request to ' + config.url)
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log('code: ', code)
  })
}

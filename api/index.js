const config = {
  host: process.env.VUE_APP_HOST,
  host_user: process.env.VUE_APP_USER,
  api: process.env.VUE_APP_HOST_API,

  // Home banner
  ListBanners: '/api/web/configs/main-banner-images',
  GetBanner: '/api/user/banners/{id}',


  // Menu
  ListMenu: '/api/web/menus',

  ListImages: '/api/web/images',
  GetImage:'/api/web/images/{id}',

  ListSmartDevices: '/api/web/smart-devices',
  SmartDeviceType: '/api/web/smart-device-types',

  ListNews: '/api/web/articles',
  GetNews: '/api/web/articles/{id}',
  GetNewsSameCategory: '/api/web/articles',

  ListArticleTypes: '/api/web/article-category',

  ListRuralNetworks: '/api/web/rural-networks',

  ListVideos: '/api/web/videos',

  GetSmartSolutionHome: '/api/web/home-smart-solutions',

  ListRuralServices: '/api/web/rural-digital-services',
  GetRuralServicesDetail: '/api/web/rural-digital-services/{id}',

  ListProvinces: '/api/web/provinces',
  ListDistricts: '/api/web/districts',
  ListWards: '/api/web/wards',

  ListFreqAskedQuestions:'/api/web/freq-asked-questions',
  ListVideoTutorials:'/api/web/video-tutorials',
  CreateFeedbacks:'/api/web/feedbacks',

  ListSmartSolutions: '/api/web/smart-solutions',
  GetSmartSolutions:'/api/web/smart-solutions/{id}'
}

const api = new Proxy(config, {
  get(target, name) {
    if (name === 'host_user') return Reflect.get(target, name)
    if (name !== 'params') {
      return Reflect.get(target, name)
    } else {
      return Reflect.get(target, name)
    }
  },
})

api.params = (name, options) => {
  try {
    let endpoint = api[name]
    for (const value in options) {
      if (value && Object.prototype.hasOwnProperty.call(options, value)) {
        endpoint = endpoint.replace(`{${value}}`, options[value])
      }
    }
    return endpoint
  } catch (e) {
    /* eslint-disable */
    console.log(e)
  }
}

export default api

<template>
  <div class="my-4">
    <home-service>
      <template #category>
        <home-header-category
          title="TIN TỨC"
          :categories="categories"
          @update="update"
          @viewAll="$router.push('news/list')"
        />
      </template>
      <template #content>
        <div class="container">
          <div class="row">
            <div
              @click="$router.push({ path: `/news/${article.category_id}/${article.id}/detail` })"
              class="col-lg-4 col-sm-6 col-12 mb-2 pointer"
              v-for="(article, index) in articles"
              :key="index"
            >
              <div>
                <div style="height: 258px" class="mb-3">
                  <img class="img-cover device-image_hover" :src="$addPrefixImage(article.thumbnail)" />
                </div>
                <div class="text-ellipsis-2">
                  {{ article.title | convertText }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </home-service>
  </div>
</template>

<script>
import HomeService from '~/components/homes/partials/home-service.vue'
import HomeHeaderCategory from '~/components/homes/partials/home-header-category.vue'
export default {
  components: {
    HomeService,
    HomeHeaderCategory,
  },
  data() {
    return {
      categories: [],
      articles: [],
    }
  },
  created() {
    this.getListNews()
    this.getListArticleTypes()
  },
  methods: {
    async getListNews(options = {}) {
      const response = await this.$store.dispatch('news/ListNews', options)
      if (response.code === 200) {
        this.articles = response.data.entries.slice(0, 3)
      }
    },
    async getListArticleTypes() {
      const response = await this.$store.dispatch(
        'article-types/ListArticleTypes'
      )
      if (response.code === 200) {
        this.categories = response.data.entries
        this.categories.unshift({
            id: "",
            name: "Tất cả"
        })
      }
    },
    update(item) {
      let category = item.id
      this.getListNews({ category })
    },
  },
}
</script>

<style scoped>
.card-img,
.card-img-top {
  height: 200px !important;
}

.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.device-image_hover:hover{
  -webkit-transform:scale(1.05); transform:scale(1.05);
}
.device-image_hover{
  -webkit-transition: all 0.7s ease; transition: all 0.7s ease;
}
</style>
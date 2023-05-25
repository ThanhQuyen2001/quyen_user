<template>
  <div>
    <div>
      <div>
        <div class="row">
          <div :class="layouts[index].box" v-for="(item, index) in entries" :key="index">
            <hr v-if="index == 4">
            <div class="row mb-4 pointer" @click="$router.push({ path: `/news/${item.category_id}/${item.id}/detail` })">
              <div :class="layouts[index].image">
                <div class="img-news rounded" :class="{ 'image-custom': index === 0, 'h-200': index >= 1 && index <= 3, 'h-140': index > 3 }">
                  <img class="img-cover rounded" :src="$addPrefixImage(item.thumbnail)" alt="" @error="replaceBrokenImage" />
                </div>
              </div>
              <div :class="layouts[index].content">
                <div class="d-flex flex-column justify-content-between h-100">
                  <b class="font-size-20 mb-3 mt-2 line-2">{{ item.title }}</b>
                  <div class="font-size-16 pb-3">{{ item.created_at | formatDateTime }}</div>
                </div>
              </div>
            </div>
            <hr v-if="index == 0 || index == entries.length - 1">
          </div>
        </div>
      </div>
      <div>
        <table-pagination :pagination="pagination" />
      </div>
    </div>
  </div>
</template>

<script>
import TablePagination from '~/components/datatable/table-pagination.vue'
export default {
  components: {
    TablePagination,
  },
  data() {
    return {
      pagination: {
        deleted: false,
        length: 12,
        order_by: 'created_at',
        order_dir: 'desc',
        search: '',
        page: 1,
        total: 35,
      },
      entries: [],
      layouts: [
        {
          box: 'col-lg-12',
          image: 'col-lg-12',
          content: 'col-lg-12'
        },
        {
          box: 'col-lg-4',
          image: 'col-lg-12',
          content: 'col-lg-12'
        },
        {
          box: 'col-lg-4',
          image: 'col-lg-12',
          content: 'col-lg-12'
        },
        {
          box: 'col-lg-4',
          image: 'col-lg-12',
          content: 'col-lg-12'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        },
        {
          box: 'col-lg-12',
          image: 'col-lg-3',
          content: 'col-lg-9'
        }
      ]
    }
  },
  watch: {
    "$route": {
      handler() {
        this.getNewContent()
      },
      deep: true
    }
  },
  methods: {
    async getNewContent() {
      let options = {
        ...this.$route.query
      }
      let category = this.$route.params.category
      if (category) {
        options.category = category
      }
      const response = await this.$store.dispatch('news/ListNews', options)
      if (response.code === 200) {
        this.entries = response.data.entries
        this.pagination = response.data.pagination
      }
    },
    replaceBrokenImage(event) {
      event.target.src = require("@/assets/images/default.jpg");
    },
  },
  created() {
    this.getNewContent()
  },
}
</script>

<style scoped lang="scss">
.image-custom {
  height: 400px !important;
}

.h-200 {
  height: 200px;
}

.h-140 {
  height: 140px;
}
.img-news {
  overflow: hidden;
}
.img-news img {
  transform: scale(1.03);
  transition: 0.2s ease-in;
}
.img-news:hover img {
  transform: scale(1);
}
</style>

<template>
  <ul class="pagination pagination-rounded justify-content-center my-2" v-if="pagination.page < total + 1">
    <li v-if="toogleFirtPagination" class="page-item">
      <a class="page-link" href="javascript: void(0);" aria-label="Previous" @click="firstPage">
        <i class="mdi mdi-chevron-double-left"></i>
      </a>
    </li>
    <li v-if="pagination.page > 1" class="page-item">
      <a class="page-link" href="javascript: void(0);" aria-label="Previous" @click="prevPage">
        <i class="mdi mdi-chevron-left"></i>
      </a>
    </li>
    <li v-if="total === pagination.page && total > 2" class="page-item" @click="prevTwoPage">
      <a class="page-link" href="javascript: void(0);">{{
          pagination.page - 2
      }}</a>
    </li>
    <li v-if="
      pagination.page === 2 || (pagination.page > total - 2 && total >= 3)
    " class="page-item" @click="prevPage">
      <a class="page-link" href="javascript: void(0);">{{ pagination.page - 1 }}
      </a>
    </li>
    <li class="page-item">
      <a class="page-link active" href="javascript: void(0);">{{
          pagination.page
      }}</a>
    </li>
    <li v-if="
      (pagination.page < total - 1 && pagination.page !== 2) ||
      (total <= 3 && pagination.page < 2 && total !== 1) ||
      (total <= 4 && total - pagination.page === 2)
    " class="page-item" @click="nextPage">
      <a class="page-link" href="javascript: void(0);">{{
          pagination.page + 1
      }}</a>
    </li>
    <li v-if="total - pagination.page > 2 && total > 3" class="page-item">
      <a class="page-link dot" href="javascript: void(0);">...</a>
    </li>
    <!-- <li class="page-item" :class="{ active: index === 0 }" v-for="(page, index) in pagination.pages" :key="index">
            <a class="page-link" href="javascript: void(0);">{{ page }}</a>
        </li> -->
    <li v-if="total > 2 && pagination.page !== total" class="page-item" @click="lastPage">
      <a class="page-link" href="javascript: void(0);">{{ total }}</a>
    </li>
    <li v-if="
      this.pagination.page < this.total &&
      this.pagination.page !== total &&
      total > 4
    " class="page-item" :class="{
  disabled: !(total - pagination.page),
}">
      <a class="page-link" href="javascript: void(0);" aria-label="Next" @click="nextPage">
        <i class="mdi mdi-chevron-right"></i>
      </a>
    </li>
    <li v-if="pagination.page > 0" class="page-item">
      <a class="page-link" href="javascript: void(0);" aria-label="Previous" @click="lastPage"
        v-if="toogleLastPagination">
        <i class="mdi mdi-chevron-double-right"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "table-pagination",
  data() {
    return {
      total: 0,
      page: 1,
    };
  },
  props: {
    allowedExport: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  watch: {
    "pagination": {
      handler() {
        this.total = Math.ceil(this.pagination.total / this.pagination.length);
      },
      deep: true
    }
  },
  methods: {
    firstPage() {
      let query = { ...this.$route.query };
      query.page = 1;
      this.$router.replace({ name: this.$route.name, query: query, params: this.$route.params });
    },
    nextPage() {
      let canNext =
        Math.ceil(this.pagination.total / this.pagination.length) -
        this.pagination.page;
      console.log(this.$route.query.page);
      if (canNext) {
        let query = {
          ...this.$route.query,
        };
        query.page = 1 + this.pagination.page;
        this.$router.replace({
          name: this.$route.name,
          query: query,
          params: this.$route.params
        });
      }
    },
    lastPage() {
      let canNext =
        Math.ceil(this.pagination.total / this.pagination.length) -
        this.pagination.page;
      if (canNext) {
        let query = {
          ...this.$route.query,
        };
        query.page = Math.ceil(this.pagination.total / this.pagination.length);
        this.$router.replace({
          name: this.$route.name,
          query: query,
          params: this.$route.params
        });
      }
    },
    prevPage() {
      let query = {
        ...this.$route.query,
      };
      query.page = this.pagination.page - 1;
      this.$router.replace({
        name: this.$route.name,
        query: query,
        params: this.$route.params
      });
    },
    prevTwoPage() {
      let query = {
        ...this.$route.query,
      };
      query.page = this.pagination.page - 2;
      this.$router.replace({
        name: this.$route.name,
        query: query,
        params: this.$route.params
      });
    },
  },
  computed: {
    toogleFirtPagination() {
      // const query = { ...this.$route.query };
      const currentPage = Math.ceil(
        this.pagination.total / this.pagination.length
      );
      let toogle = null;
      if (
        // query.page === 1 ||
        currentPage === 1 ||
        (this.pagination.page <= 3 && currentPage <= 3) ||
        this.pagination.page <= 2
      ) {
        // console.log("false");
        toogle = false;
      } else {
        toogle = true;
      }
      return toogle;
    },
    toogleLastPagination() {
      // const query = { ...this.$route.query };
      const currentPage = Math.ceil(
        this.pagination.total / this.pagination.length
      );
      let toogle = null;
      if (currentPage - this.pagination.page <= 2 || currentPage < 3) {
        toogle = false;
      } else {
        toogle = true;
      }

      return toogle;
    },
  },

  created() {
    // console.log(this.total);
  },
  mounted() {
    this.total = Math.ceil(this.pagination.total / this.pagination.length);
    // console.log(this.total);
  },
};
</script>
  
<style scoped>
.page-item {
  border-radius: 5px !important;
  margin: 0.125rem;
}

.page-link {
  background: rgba(3, 147, 42, 0.05) !important;
  font-size: 0.875rem;
  color: #333333;
  border-radius: 5px !important;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in;
}

.page-link:hover:not(.dot):not(.active) {
  background: rgba(3, 147, 42, 0.4) !important;
  transform: scale(1.1);
}

.active {
  background: #18a55b !important;
  color: #fff;
}

i {
  font-size: 1.5rem;
}
</style>
  
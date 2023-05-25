<template>
  <div>
    <div class="mb-5">
      <b-form-input
        v-model="searchInput"
        class="col-lg-6 mb-5"
        type="text"
        placeholder="Tìm kiếm..."
        style="box-shadow: none"
        v-on:input="debounceInput"
      ></b-form-input>
      <div v-if="questionsSearch.length > 0">
        <div
          v-for="(item, index) in questionsSearch"
          :key="index"
          class="total pt-3 pb-1 pl-3 pr-3 mb-3"
        >
          <div class="row mb-3 container">
            <b-button v-b-toggle="`collapse_${index}`" class="arrow_button">
              <i
                class="bx bx-chevrons-down text-success when-opened"
                style="line-height: 1.5"
              ></i>
              <i 
                class='bx bx-chevrons-up when-closed text-success'
                style="line-height: 1.5"
              ></i>
            </b-button>
            <div
              v-b-toggle="`collapse_${index}`"
              class="col-12 col-lg-11 pl-2 question"
            >
              {{ item.question }}
            </div>
          </div>
          <b-collapse accordion="test" visible :id="`collapse_${index}`">
            <hr class="m-0" />
            <b-card style="border: none">{{ item.answer }}</b-card>
          </b-collapse>
        </div>
      </div>
      <div class="text-success mb-5" style="text-align: center;" v-else>Không tìm thấy câu hỏi</div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data() {
    return {
      questions: [],
      searchInput: '',
      questionsSearch: [],
    }
  },
  methods: {
    async getListFreqAskedQuestions() {
      const response = await this.$store.dispatch(
        'freq-asked-questions/ListFreqAskedQuestions'
      )
      if (response.code === 200) {
        this.questions = response.data.entries
        this.questionsSearch = response.data.entries
      }
    },
    debounceInput: _.debounce(function () {
      this.questionsSearch = this.questions.filter((event) => {
        return event.question
          .toLowerCase()
          .match(this.searchInput.toLowerCase())
      })
    }, 500),
  },
  async created() {
    await this.getListFreqAskedQuestions()
  },
}
</script>
<style scoped>
.total {
  background-color: #fff;
  border-radius: 10px;
}
.arrow_button {
  background-color: #f1f7f4;
  border: none;
  border-radius: 50%;
  height: 35px;
  box-shadow: none;
}
.question {
  bottom: 50%;
  transform: translate(0, 20%);
}
.collapsed > .when-closed,
    :not(.collapsed) > .when-opened {
        display: none;
    }
@media (max-width: 992px){
  .arrow_button{
    display: none;
  }
}
</style>
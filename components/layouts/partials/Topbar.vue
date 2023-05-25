<template>
  <div class="topbar">
    <b-container>
      <div class="row">
        <div class="col-lg-4 text-header">
          Phong điền, TT Huế, Việt Nam
        </div>
        <div class="col">
          <div class="row">
            <div class="px-3 style-border-right text-header">Email: nongnghiepso@gmail.com</div>
            <div class="px-3 text-header">Liên hệ: 0966 688 650 - 0931 033 688</div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Topbar',

  data() {
    return {}
  },

  mounted() { },

  methods: {},
}
</script>
<style scoped>
.text-header {
  font-size: 15px;
}
@media screen and (min-width: 550px) {
  .style-border-right {
    border-right: 3px solid #ffffff;
  }
}
</style>

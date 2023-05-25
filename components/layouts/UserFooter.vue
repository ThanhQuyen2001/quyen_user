<template>
  <footer style="height: fit-content;">
    <div class="col-10 mx-auto py-5 py-xs mb-3 text-white">
      <div class="row">
        <div class="mb-2 col-lg-3 col-md-6">
          <div class="mb-1 style-col-xs pointer">
            <b class="font-size-18">Thông tin liên hệ</b>
          </div>
          <div class="d-flex flex-gap mb-1 pointer">
            <i class='bx bx-phone-call'></i>
            <span>(+84) 0543553414</span>
          </div>
          <div class="d-flex flex-gap mb-1 pointer" style="flex-wrap: nowrap; word-break: break-word;">
            <i class='bx bxs-envelope pointer'></i>
            <span>phonghoa@thuathienhue.gov.vn</span>
          </div>
          <div class="d-flex flex-gap mb-3 pointer" style="flex-wrap: nowrap; word-break: break-word;">
            <i class='bx bxs-map pointer'></i>
            <span>Xã Phong Hòa, Huyện Phong Điền, Tỉnh Thừa Thiên Huế</span>
          </div>
        </div>
        <div class="mb-2 col-lg-3 col-md-6 col-sm-6 col-xs-0 text-md-right text-lg-left">
          <div class="mb-1 pointer"><b class="font-size-18">Dịch vụ</b></div>
          <div class="mb-1 pointer"><span>Dịch vụ nông thôn</span></div>
          <div class="mb-1 pointer"><span>Dịch vụ cho doanh nghiệp</span></div>
        </div>
        <div class="mb-2 col-lg-3 col-md-6 col-sm-6 col-xs-0 text-sm-right text-md-left">
          <div class="mb-1 pointer"><b class="font-size-18">Thông tin</b></div>
          <div class="mb-1 pointer"><span>Tin tức nội bộ</span></div>
          <div class="mb-1 pointer"><span>Chỉ đạo điều hành</span></div>
          <div class="mb-3 pointer"><span>Kinh tế - Xã hội</span></div>
        </div>
        <div class="mb-2 col-lg-3 col-md-6 col-xs-center text-md-right text-lg-left mx-auto" style="width: fit-content;">
          <div class="mb-1 pointer"><b class="font-size-18 mr-md-1">Kết nối với chúng tôi</b></div>
          <div class="mb-1 d-flex justify-content-around contact-icon ml-md-auto ml-lg-0">
            <i class='bx bxl-facebook-circle font-size-28 mr-1 pointer'></i>
            <i class='bx bxl-google font-size-28 mr-1 pointer'></i>
            <i class='bx bxl-youtube font-size-28 mr-1 pointer'></i>
            <i class='bx bxl-twitter font-size-28 pointer'></i>
          </div>
          <div class="d-flex flex-column">
            <a href="https://play.google.com/store/apps/details?id=com.nongnghiepso.smartvillage" target="_blank" rel="noopener noreferrer">
              <div class="mb-1 pointer float-left float-md-right float-lg-left "><img class="img-download" src="~/assets/images/auth/ch_play.png" alt=""></div>
            </a>
            <a href="https://apps.apple.com/vn/app/x%C3%A3-th%C3%B4ng-minh/id1672475638?l=vi" target="_blank" rel="noopener noreferrer">
              <div class="mb-1 pointer float-left float-md-right float-lg-left "><img class="img-download" src="~/assets/images/home/home-app-store.png" alt=""></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-10 mx-auto text-white style-border-top px-0 pb-4 pt-2">
      <div class="row">
        <span class="col-md-6 col-12 font-xs-10 pointer">Nền tảng tích hợp dịch vụ nông thôn thông minh (Phiên bản: 1.0.0)</span>
        <span class="col-md-6 col-12 font-xs-10 text-right pointer">© Bản quyền thuộc về Nông Nghiệp Số, 2022</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'UserFooter',

  data() {
    return {}
  },

  mounted() { },

  methods: {},
}
</script>

<style scoped>
.style-border-top {
  border-top: 3px solid #fff;
}
.img-download {
  width: 180px;
}
.contact-icon {
  width: 170px;
}
span {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}
.flex-gap {
  gap: 12px;
  align-items: center;
}
@media (max-width: 500px) {
  .col-xs-0 {
    display: none;
  }
  .col-xs-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .style-col-xs {
    display: block;
    text-align: center;
  }
  .py-xs {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .font-xs-10 {
    font-size: 10px;
    text-align: center !important;
  }
  .img-download {
    width: 140px;
  }
  .contact-icon {
    width: 140px;
  }
}
</style>
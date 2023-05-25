<template>
  <div>
    <h3 class="inter font-size-32 mb-3 mb-md-5">LIÊN HỆ VỚI CHÚNG TÔI</h3>
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <div>
          <img
            class="img-contain"
            src="@/assets/images/feedback/feedback.png"
          />
        </div>
      </div>
      <div class="col-lg-8 col-md-8">
        <b-row class="mx-0 px-0">
          <b-col cols="12" md="6" class="px-0 pr-md-1 pl-md-0">
            <b-form-input
              class="mb-3 feedback-input"
              placeholder="Họ và tên"
              v-model="feedback.user"
            ></b-form-input>
          </b-col>
          <b-col cols="12" md="6" class="px-0 pr-md-0 pl-md-1">
            <b-form-input
              class="mb-3 feedback-input"
              placeholder="Số điện thoại"
              v-model="feedback.phone"
            ></b-form-input>
          </b-col>
          <b-col cols="12" class="px-0">
            <b-form-input
              class="mb-3 feedback-input"
              placeholder="Email (Không bắt buộc)"
              v-model="feedback.mail"
            ></b-form-input>
          </b-col>
          <b-col cols="12" class="px-0">
            <b-form-input
              class="mb-3 feedback-input"
              placeholder="Địa chỉ"
              v-model="feedback.address"
            ></b-form-input>
          </b-col>
          <b-col cols="12" class="px-0">
            <b-form-textarea
              rows="5"
              no-resize
              class="p-2 input-login mb-3 feedback-input"
              placeholder="Nội dung góp ý"
              v-model="feedback.content"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="text-right mb-5">
      <b-button class="bg-success border-0" @click="checkFeedback">
        <i class="bx bxs-paper-plane"></i>
        GỬI NỘI DUNG
      </b-button>
    </div>
    <div class="modal-form">
      <b-modal id="confirm-modal" hide-footer hide-header centered size="lg">
        <div class="d-flex header" style="gap:6px;">
          <img width="34" height="34" src="@/assets/images/colorfulLogo.png" alt="logo" />
          <p class="mb-0">XÃ THÔNG MINH</p>
        </div>
        <div class="banner">
          <img src="@/assets/images/feedback/confirm-modal.png" alt="modal-image">
        </div>
        <div class="content mb-2">
          <p class="my-1">Bạn có chắc chắn gửi nội dung góp ý dịch vụ này không?</p>
        </div>
        <div class="link-footer d-flex flex-column flex-sm-row">
          <button class="d-flex align-content-center justify-content-center btn btn-outline-success" @click="closeModal('confirm-modal')">
            <p style="margin: 2px 0;">Hủy</p>
          </button>
          <button class="d-flex align-content-center justify-content-center btn btn-success" @click="createFeedback">
            <p style="margin: 2px 0;">Xác nhận</p>
          </button>
        </div>
      </b-modal>
      <b-modal id="success-modal" hide-footer hide-header centered size="lg">
        <div class="d-flex header" style="gap:6px;">
          <img width="34" height="34" src="@/assets/images/colorfulLogo.png" alt="logo" />
          <p class="mb-0">XÃ THÔNG MINH</p>
        </div>
        <div class="banner">
          <img src="@/assets/images/feedback/success-modal.png" alt="modal-image" style="height: 120px;">
        </div>
        <div class="content mb-3">
          <p class="my-1">Góp ý dịch vụ thành công!!</p>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      feedback: {
        user: '',
        phone: '',
        mail: '',
        address: '',
        content: '',
      },
    }
  },
  methods: {
    validator() {
      let mappingErrorName = {
        user: 'Họ Tên',
        phone: 'Số điện thoại',
        address: 'Địa chỉ',
        content: 'Nội dung',
      }
      for (let key in mappingErrorName) {
        if (this.feedback[key].length < 1) {
          Swal.fire({
            title: mappingErrorName[key] + ` không được trống`,
            icon: 'error',
            confirmButtonColor: '#44b97c',
          })
          return false
        }
      }
      return true
    },
    checkFeedback() {
      if (!this.validator() || !this.ValidatePhone() || !this.ValidateEmail()) return;
        this.showModal('confirm-modal')
    },
    async createFeedback() {
      this.closeModal('confirm-modal')
      await this.$store.dispatch('feedback/CreateFeedbacks', this.feedback)
      this.showModal('success-modal')
      this.feedback = {
        user: '',
        phone: '',
        mail: '',
        address: '',
        content: '',
      }
      setTimeout(() => {
        this.closeModal('success-modal')
      }, 1000);
    },
    ValidatePhone() {
      let checkPhone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(this.feedback.phone);
      if (!checkPhone) {
        Swal.fire({
            title: 'Số điện thoại không đúng định dạng',
            icon: 'error',
            confirmButtonColor: '#44b97c',
          })
        return false
      }
      return true
    },
    ValidateEmail() {
      if (!this.feedback.mail) {
        return true
      }
      let checkMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(
        this.feedback.mail
      )
      if (!checkMail) {
        Swal.fire({
            title: 'Email không đúng định dạng',
            icon: 'error',
            confirmButtonColor: '#44b97c',
          })
        return false
      }
      return true
    },
    closeModal(id) {
      this.$bvModal.hide(id)
    },
    showModal(id) {
      this.$bvModal.show(id)
    }
  },
}
</script>
<style scoped>
.inter {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 400;
}
@media (max-width:  768px){
    .img-contain{
        display: none;
    }
}
.modal-form {
  font-family: 'UTM Aptima';
  font-style: normal;
}
.header {
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  color: #28666E;
}
.banner img {
  width: 100%;
  object-fit: contain;
  object-position: center;
  height: 193px;
  margin: 10px 0;
}
.content p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
}
.link-footer {
  margin: auto;
  margin-top: 10px;
  width: fit-content;
  gap: 4px;
}
.link-footer button {
  margin: auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  min-width: 200px;
}
.btn-success {
  background-color: #44B97C;
}
.btn-success:hover {
  background-color: #31895c;
}
.btn-outline-success:hover {
  background-color: #44B97C;
}
@media screen and (min-width : 576px) {
  .link-footer {
    gap: 10px;
  }
}
</style>

<style>
#confirm-modal .modal-lg, .modal-xl {
  max-width: 560px !important;
}
@font-face {
  font-family: 'utm-aptima';
  src: url('../../../assets/fonts/Modal/UTM-Aptima.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
<template>
    <div>
       <h3 class="pt-5 pb-5 text-center inter">
            LIÊN HỆ VỚI CHÚNG TÔI
       </h3>
       <div class="row mb-3">
            <div class="col-lg-4 col-md-12">
                <p><i class='text-success mr-3 bx bxs-phone-call'></i>(+84) 0543553414</p>
                <p><i class='text-success mr-3 bx bxs-envelope' ></i>phonghoa@thuathienhue.gov.vn</p>
                <p><i class='text-success mr-3 bx bxs-map' ></i>Xã Phong Hòa, Huyện Phong Điền, Tỉnh Thừa Thiên Huế</p>
                <p><i class='text-success mr-3 bx bx-globe'></i>http://xathongminh.vn/xaphonghoa</p>
            </div>
            <div class="col-lg-8 col-md-12 mb-2">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-3">
                        <b-form-input class="mb-2  feedback-input" placeholder="Họ và tên"></b-form-input>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-3">
                        <b-form-input class="mb-2  feedback-input" placeholder="Email của bạn"></b-form-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-3">
                        <b-form-input class="mb-3 feedback-input" placeholder="Số điện thoại"></b-form-input>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-3">
                        <b-form-input class="mb-3 feedback-input" placeholder="Địa chỉ"></b-form-input>
                    </div>
                </div>
                <div>
                    <b-form-input class="mb-3 feedback-input" placeholder="Nội dung"></b-form-input>
                </div>
            </div>
       </div>
       <div class="text-right mb-5">
            <b-button class="bg-success border-0">
                <i class='bx bxs-paper-plane' ></i>
                GỬI NỘI DUNG
            </b-button>
       </div>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.input-login {
    font-size: 18px;
    color: hsl(0, 0%, 64%);
    font-weight: 400;
    outline: none;
    border: none;
    border-bottom: 1px solid #A8A8A8;
    box-shadow: none;
    border-radius: 0px;
    padding-left: 0;
    padding-right: 0;
}
.inter{
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 400;
}
</style>
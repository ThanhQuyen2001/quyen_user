<template>
    <div style="margin-bottom: 200px;">
        <div class="row position-relative">
            <div class="col-lg-10 col-md-12">
                <img style="height: 100%;width: 100%;"
                    src="https://msmobile.com.vn/upload_images/images/hinh-nen-dep-cho-may-tinh-full-hd-2.jpg" alt="">
            </div>
            <div class="col-lg-5 col-md-8 col-sm-8 col-10 bg-white position-absolute service">
                <div class="mt-4 mb-4 ml-3 mr-3">
                    <span class="text-default inter">DỊCH VỤ NÔNG THÔN SỐ</span>
                    <p class="font-size-20 text-secondary describe">Các dịch vụ nông thôn được xây dựng dựa trên nền tảng số, các giải pháp thông minh, tiết kiệm, thân thiện với môi trường,... cung các tiện ích cho người dân khu vực nông thôn theo hướng tiếp cận đơn giản, hiệu quả và tăng cường tính tương tác.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>

.inter{
    font-family: 'Inter', sans-serif;
    font-size: 40px;
    font-weight: 500;
}
.service{
    right: 0;
    bottom: 50%;
    transform: translate(0,50%);
}
@media (max-width: 992px){
    .inter{
        font-size: 24px;
    }
    .describe{
        font-size: 18px;
    }
    .service{
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
    }
}
@media (max-width: 687px){
    .inter{
        font-size: 16px;
    }
    .describe{
        font-size: 14px;
    }
    .service{
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 70%);
    }
}
</style>
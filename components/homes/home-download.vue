<template>
    <div class="mt-5 bg-download py-3">
        <div class="container">
            <div class="background-download">
                <div class="row h-100 w-100">
                    <div class="col-5 "></div>
                    <div class="col-7 ">
                        <div class="h-100 d-flex align-items-center">
                            <div class="row py-mobile">
                                <div class="col-lg-12 font-weight-bold text-download style-title-download">Tải ứng dụng
                                    ngay nào !!!</div>
                                <div class="col-lg-12 py-2 text-white space-mobile">
                                    <div class="d-flex align-items-center">
                                        <img class="mr-2 style-icon-check" src="@/assets/images/home/home-check.png" alt="">
                                        <span class="style-text-download">Theo dõi và cập nhật thông tin phản ánh một
                                            cách dễ dàng</span>
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2 text-white space-mobile">
                                    <div class="d-flex align-items-center">
                                        <img class="mr-2 style-icon-check" src="@/assets/images/home/home-check.png" alt="">
                                        <span class="style-text-download">Theo dõi và cập nhật thông tin phản ánh một
                                            cách dễ dàng</span>
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2 text-white space-mobile">
                                    <div class="d-flex align-items-center">
                                        <img class="mr-2 style-icon-check" src="@/assets/images/home/home-check.png" alt="">
                                        <span class="style-text-download">Theo dõi và cập nhật thông tin phản ánh một
                                            cách dễ dàng</span>
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2 mt-1">
                                    <div class="div">
                                        <a href="https://apps.apple.com/vn/app/x%C3%A3-th%C3%B4ng-minh/id1672475638?l=vi"
                                            target="_blank" rel="noopener noreferrer">
                                            <img class="style-icon-download"
                                                src="@/assets/images/home/home-app-store.png" />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.nongnghiepso.smartvillage"
                                            target="_blank" rel="noopener noreferrer">
                                            <img class="style-icon-download" src="@/assets/images/auth/ch_play.png"
                                                alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-download {
    background-color: #f2f2f2;
}

.background-download {
    width: 100%;
    height: 372px;
    background: url("@/assets/images/home/home-download.png") no-repeat center center/contain;
}

.text-download {
    color: #1E6D5B;
    font-size: 30px;
}


@media (max-width: 992px) {
    .style-title-download {
        font-size: 16px;
    }

    .style-icon-check {
        width: 12px;
        height: 12px;
    }

    .style-text-download {
        font-size: 12px;
    }

    .style-icon-download {
        height: 38px;
    }
}

@media (max-width: 768px) {
    .background-download {
        width: 100%;
        height: fit-content;
        background: url("@/assets/images/home/home-download-mobile.png") no-repeat center center/contain;
    }

    .style-title-download {
        font-size: 10px;
    }

    .style-icon-check {
        width: 8px;
        height: 8px;
    }

    .style-text-download {
        font-size: 6px;
    }

    .style-icon-download {
        height: 30px;
    }

    .py-mobile {
        padding-top: 12px;
        padding-bottom: 12px;
    }
}

@media (max-width: 520px) {

    .style-title-download {
        font-size: 10px;
    }

    .style-icon-check {
        width: 4px;
        height: 4px;
    }

    .style-text-download {
        font-size: 6px;
    }

    .style-icon-download {
        height: 20px;
    }

    .space-mobile {
        padding-bottom: 0 !important;
    }

    .container {
        padding: 0 !important;
    }
}
</style>
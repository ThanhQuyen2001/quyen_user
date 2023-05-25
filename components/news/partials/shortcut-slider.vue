<template>
    <div>
        <div class="text-center font-size-22 font-weight-bold">
            <i class='text-success bx bxs-hot'></i>
            Thông báo/cảnh báo
        </div>
        <div class="border-bottom pt-2 w-100"></div>
        <div class="mb-5">
            <div class="box-notify">
                <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :autoplaySpeed="2000"
                    dotsClass="slick-dots style-dot">
                    <div>
                        <div>
                            <img draggable="false" class="img-cover"
                                src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg" alt="">
                        </div>
                        <div class="font-size-14 mb-1 mt-2 px-2">08:44, 10/04/2022</div>
                        <div class="font-size-18 font-weight-bold px-2">
                            Some quick example text</div>
                    </div>
                    <div>
                        <div>
                            <img draggable="false" class="img-cover"
                                src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg" alt="">
                        </div>
                        <div class="font-size-14 mb-1 mt-2 px-2">08:44, 10/04/2022</div>
                        <div class="font-size-18 font-weight-bold px-2">
                            Some quick example text</div>
                    </div>
                    <div>
                        <div>
                            <img draggable="false" class="img-cover"
                                src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg" alt="">
                        </div>
                        <div class="font-size-14 mb-1 mt-2 px-2">08:44, 10/04/2022</div>
                        <div class="font-size-18 font-weight-bold px-2">
                            Some quick example text</div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: {
        VueSlickCarousel
    },
}
</script>
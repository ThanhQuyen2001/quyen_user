<template>
    <div>
        <div>
            <div class="text-default font-size-22 font-weight-500 my-2">Thông tin của các giải pháp liên quan:</div>
        </div>
        <div class="row my-4 pointer" @click="$router.push({path: '/solutions/1/detail'})">
            <div class="col-lg-3">
                <img class="img-cover" src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/05/cay-mat-biec-hue-3.jpg" alt="">
            </div>
            <div class="font-weight-500 font-size-23 col-lg-9">
                <div>Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên</div>
                <span class="font-size-14" style="color: #A3A3A3;">08:44, 10/04/2022</span>
                <div class="font-size-16 mt-2" style="color: #A3A3A3;">Lorem ipsum dolor sit amet consectetur. Ac adipiscing faucibus condimentum consequat nisi. Platea a a nec velia. Tellus neque auctor accumsan.</div>
                <div class="font-size-16 mt-2">Lĩnh vực: <span class="text-default">Máy bay không người lái hỗ trợ nông nghiệp</span> </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-3">
                <img class="img-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6EPYjJed2BnBMQc5SUZmpU8Z0-5DssZz7A&usqp=CAU" alt="">
            </div>
            <div class="font-weight-500 font-size-23 col-lg-9">
                <div>Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên</div>
                <span class="font-size-14" style="color: #A3A3A3;">08:44, 10/04/2022</span>
                <div class="font-size-16 mt-2" style="color: #A3A3A3;">Lorem ipsum dolor sit amet consectetur. Ac adipiscing faucibus condimentum consequat nisi. Platea a a nec velia. Tellus neque auctor accumsan.</div>
                <div class="font-size-16 mt-2">Lĩnh vực: <span class="text-default">Máy bay không người lái hỗ trợ nông nghiệp</span> </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-3">
                <img class="img-cover" src="https://furnibuy.com/wp-content/uploads/2021/03/fb-hue-111-tranh-hoang-thanh-hue-co-kinh-sieu-dep.jpg" alt="">
            </div>
            <div class="font-weight-500 font-size-23 col-lg-9">
                <div>Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên</div>
                <span class="font-size-14" style="color: #A3A3A3;">08:44, 10/04/2022</span>
                <div class="font-size-16 mt-2" style="color: #A3A3A3;">Lorem ipsum dolor sit amet consectetur. Ac adipiscing faucibus condimentum consequat nisi. Platea a a nec velia. Tellus neque auctor accumsan.</div>
                <div class="font-size-16 mt-2">Lĩnh vực: <span class="text-default">Máy bay không người lái hỗ trợ nông nghiệp</span> </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-3">
                <img class="img-cover" src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/12/xu-hue-noi-tieng-ve-dieu-gi-1.jpg" alt="">
            </div>
            <div class="font-weight-500 font-size-23 col-lg-9">
                <div>Hiệu quả từ mô hình chuỗi liên kết trong sản xuất, tiêu thụ lúa thôn Gia Viên</div>
                <span class="font-size-14" style="color: #A3A3A3;">08:44, 10/04/2022</span>
                <div class="font-size-16 mt-2" style="color: #A3A3A3;">Lorem ipsum dolor sit amet consectetur. Ac adipiscing faucibus condimentum consequat nisi. Platea a a nec velia. Tellus neque auctor accumsan.</div>
                <div class="font-size-16 mt-2">Lĩnh vực: <span class="text-default">Máy bay không người lái hỗ trợ nông nghiệp</span> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        entries: {
            type: Array,
            required: true
        }
    }
}
</script>
<template>
    <div>
        <div class="row">
            <div class="col-lg-8">
                <div>
                    <iframe width="100%" height="430" :src="getSrcYoutube(url)">
                    </iframe>
                    <div class="font-size-24 font-weight-500 mb-3">
                        What Happens When an Arresting Cable Breaks on US Aircraft Carriers?
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-6 col-12 mb-2">
                            <span class="font-size-18">YVMA Productions</span>
                        </div>
                        <div class="col-sm-6 col-12 style-text-right">
                            <span class="font-size-18 mb-2">597K lượt xem</span>
                            <span class="font-size-18">• 12 ngày trước</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="row px-2">
                    <div class="d-flex mb-3" style="gap: 10px;">
                        <div style="width: 35%;">
                            <img class="img-cover rounded"
                                src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/C%C3%B4ng%20ngh%E1%BB%87/4-cach-chup-anh-dep.jpg"
                                alt="">
                        </div>
                        <div style="flex: 1">
                            <div class="font-size-14 font-weight-bold mb-1 text-ellipsis-2">
                                What Happens When an Arresting Cable Breaks on US Aircraft Carriers?
                            </div>
                            <div class="mb-1">
                                <span class="font-size-13">YVMA Productions</span>
                            </div>
                            <div>
                                <span class="font-size-13">597K lượt xem</span>
                                <span class="font-size-13">• 12 ngày trước</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mb-3" style="gap: 10px;">
                        <div style="width: 35%;">
                            <img class="img-cover rounded"
                                src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/C%C3%B4ng%20ngh%E1%BB%87/4-cach-chup-anh-dep.jpg"
                                alt="">
                        </div>
                        <div style="flex: 1">
                            <div class="font-size-14 font-weight-bold mb-1 text-ellipsis-2">
                                What Happens When an Arresting Cable Breaks on US Aircraft Carriers?
                            </div>
                            <div class="mb-1">
                                <span class="font-size-13">YVMA Productions</span>
                            </div>
                            <div>
                                <span class="font-size-13">597K lượt xem</span>
                                <span class="font-size-13">• 12 ngày trước</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mb-3" style="gap: 10px;">
                        <div style="width: 35%;">
                            <img class="img-cover rounded"
                                src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/C%C3%B4ng%20ngh%E1%BB%87/4-cach-chup-anh-dep.jpg"
                                alt="">
                        </div>
                        <div style="flex: 1">
                            <div class="font-size-14 font-weight-bold mb-1 text-ellipsis-2">
                                What Happens When an Arresting Cable Breaks on US Aircraft Carriers?
                            </div>
                            <div class="mb-1">
                                <span class="font-size-13">YVMA Productions</span>
                            </div>
                            <div>
                                <span class="font-size-13">597K lượt xem</span>
                                <span class="font-size-13">• 12 ngày trước</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mb-3" style="gap: 10px;">
                        <div style="width: 35%;">
                            <img class="img-cover rounded"
                                src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/C%C3%B4ng%20ngh%E1%BB%87/4-cach-chup-anh-dep.jpg"
                                alt="">
                        </div>
                        <div style="flex: 1">
                            <div class="font-size-14 font-weight-bold mb-1 text-ellipsis-2">
                                What Happens When an Arresting Cable Breaks on US Aircraft Carriers?
                            </div>
                            <div class="mb-1">
                                <span class="font-size-13">YVMA Productions</span>
                            </div>
                            <div>
                                <span class="font-size-13">597K lượt xem</span>
                                <span class="font-size-13">• 12 ngày trước</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mb-3" style="gap: 10px;">
                        <div style="width: 35%;">
                            <img class="img-cover rounded"
                                src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/C%C3%B4ng%20ngh%E1%BB%87/4-cach-chup-anh-dep.jpg"
                                alt="">
                        </div>
                        <div style="flex: 1">
                            <div class="font-size-14 font-weight-bold mb-1 text-ellipsis-2">
                                What Happens When an Arresting Cable Breaks on US Aircraft Carriers?
                            </div>
                            <div class="mb-1">
                                <span class="font-size-13">YVMA Productions</span>
                            </div>
                            <div>
                                <span class="font-size-13">597K lượt xem</span>
                                <span class="font-size-13">• 12 ngày trước</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pagination: {
                deleted: false,
                length: 12,
                order_by: "created_at",
                order_dir: "desc",
                search: "",
                page: 1,
                total: 35
            },
            url: "https://youtu.be/InHd3c_8ci0"
        };
    },
    methods: {
        getSrcYoutube(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
            const match = url.match(regExp)
            const ID = (match && match[2].length === 11) ? match[2] : null
            return 'https://www.youtube.com/embed/' + ID
        }
    },
}
</script>

<style scoped>
.style-text-right {
    text-align: right;
}

@media (max-width: 576px) {
    .style-text-right {
        text-align: left;
    }
}
</style>
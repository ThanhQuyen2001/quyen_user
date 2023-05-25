<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="font-weight-bold text-default font-size-28 font-md-20">{{ title }}</div>
                    <div v-if="categories.length > 0" class="style-md-hide d-flex justify-content-start scroll-x">
                        <div v-for="(item, index) in categories" :key="index"
                            class="px-1 mx-1 py-1 pointer category-item"
                            :class="{ 'category-select': selected == index }"
                            @click="update(item, index)">{{ item.name }}</div>
                    </div>
                    <div v-if="viewAll" @click="$emit('viewAll')" class="text-default pointer no-wrap">
                        <span>Xem tất cả</span>
                        <i class='bx bx-chevrons-right'></i>
                    </div>
                </div>
            </div>
            <div class="col-md-12 style-md-show mt-3">
                <div v-if="categories.length > 0" class="d-flex justify-content-between scroll-x">
                    <div v-for="(item, index) in categories" :key="index" class="px-1 mx-1 py-1 pointer category-item no-wrap"
                        :class="{ 'category-select': selected == index }" @click="update(item, index)">{{
                            item.name
                        }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            require: true,
            default: () => []
        },
        title: {
            type: String,
            require: true,
            default: ""
        },
        viewAll: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            selected: 0,
        };
    },
    methods: {
        update(item, index) {
            this.selected = index
            this.$emit('update', item)
        }
    },
}
</script>

<style scoped>
.style-md-show {
    display: none;
}
.style-md-hide {
    display: block;
}
@media (max-width: 1202px) {
    .style-md-hide {
        display: none !important;
    }
    .style-md-show {
        display: block !important;
    }
}
@media (max-width: 992px) {
    .font-md-20 {
        font-size: 20px;
    }
}
@media (max-width: 776px) {
    .scroll-x {
        overflow-x: auto;
        width: 100%;
    }
}
</style>
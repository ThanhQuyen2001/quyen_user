<template>
    <div>
        <div class="bg-filter px-1 py-4">
            <div class="row mx-0">
                <div class="col-lg-2 col-sm-4 col-12 my-1">
                    <b-form-select v-model="smart_device_type">
                        <b-form-select-option :value="null">Loại thiết bị</b-form-select-option>
                        <b-form-select-option v-for="(item, index) in options" :value="item.id" :key="index">{{ item.name
                        }}</b-form-select-option>
                    </b-form-select>
                </div>
                <div class="col-lg-2 col-sm-4 col-12 my-1">
                    <b-form-select v-model="price">
                        <b-form-select-option v-for="(item, index) in listPrices" :value="item.value" :key="index">{{
                            item.name }}</b-form-select-option>
                    </b-form-select>
                </div>
            </div>
        </div>
        <div class="mt-5 mb-2">
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4" v-for="(item, index) in devices" :key="index">
                    <div class="p-4 border rounded-8 bg-white pointer rounded">
                        <div class="device-image_hover" style="height: 210px;">
                            <img class="img-cover rounded-8" :src="item.images[0]" alt="">
                        </div>
                        <div class="mt-2">
                            <div class="font-size-20 text-secondary text-ellipsis-1">
                                <span>{{ item.name }}</span>
                            </div>
                            <div class="font-size-28 font-weight-bold">{{ item.price | formatPrice }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <table-pagination :pagination="pagination" />
        </div>
    </div>
</template>

<script>
import TablePagination from '~/components/datatable/table-pagination.vue';
export default {
    components: {
        TablePagination
    },
    data() {
        return {
            price: null,
            smart_device_type: null,
            selected: null,
            options: [],
            listPrices: [
                {
                    name: 'Khoảng giá',
                    value: null
                },
                {
                    name: 'Dưới 1 triệu',
                    value: {
                        "to-price": 1000000
                    }
                },
                {
                    name: 'Từ 1 triệu đến 3 triệu',
                    value: {
                        "from-price": 1000000,
                        "to-price": 3000000
                    }
                },
                {
                    name: 'Từ 3 triệu đến 5 triệu',
                    value: {
                        "from-price": 3000000,
                        "to-price": 5000000
                    }
                },
                {
                    name: 'Từ 5 triệu đến 10 triệu',
                    value: {
                        "from-price": 5000000,
                        "to-price": 10000000
                    }
                },
                {
                    name: 'Trên 10 triệu',
                    value: {
                        "from-price": 10000000
                    }
                },
            ],
            pagination: {
                deleted: false,
                length: 12,
                order_by: "created_at",
                order_dir: "desc",
                search: "",
                page: 1,
                total: 35
            },
            devices: [],
        }
    },
    filters: {
        formatPrice(price) {
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return VND.format(price)
        }
    },
    watch: {
        "smart_device_type": {
            handler() {
                let options = { ...this.$route.query }
                if (!this.smart_device_type) {
                    if (options['smart-device-type']) {
                        delete options['smart-device-type']
                    }
                }
                else {
                    options['smart-device-type'] = this.smart_device_type
                }
                this.$router.push({
                    name: this.$route.name, query: options
                })
            }
        },
        "$route.query": {
            handler() {
                this.getListSmartDevices()
            },
            deep: true
        },
        "price": {
            handler() {
                let params = { ...this.$route.query }
                if(!this.price) {
                    if(params["from-price"]) {
                        delete params["from-price"]
                    }
                    if(params["to-price"]) {
                        delete params["to-price"]
                    }
                    this.$router.push({name: this.$route.name, query: params})
                    return;
                }
                if (this.price["from-price"]) {
                    params["from-price"] = this.price["from-price"]
                }
                if (!this.price["from-price"] && params["from-price"]) {
                    delete params["from-price"]
                }
                if (this.price["to-price"]) {
                    params["to-price"] = this.price["to-price"]
                }
                if (!this.price["to-price"] && params["to-price"]) {
                    delete params["to-price"]
                }
                this.$router.push({
                    name: this.$route.name, query: params
                })
            }
        }
    },
    created() {
        this.getListSmartDevices()
        this.getSmartDeviceType()
    },
    methods: {
        async getListSmartDevices() {
            const response = await this.$store.dispatch('devices/ListSmartDevices', this.$route.query)
            if (response.code === 200) {
                this.devices = response.data.entries
                this.pagination = response.data.pagination
            }
        },
        async getSmartDeviceType() {
            const response = await this.$store.dispatch('devices/SmartDeviceType')
            if (response.code === 200) {
                this.options = response.data.entries
            }
        },
    },
}
</script>

<style scoped>
.bg-filter {
    background-color: #eee;
}

.rounded {
    border-radius: 20px !important;
}

.bg-white {
    background-color: #fff;
}

.device-image_hover:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
}

.device-image_hover {
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
}
</style>
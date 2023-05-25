<template>
    <div class="d-flex justify-content-start flex-wrap py-4">
        <span v-for="(item, index) in entries" :key="index" class="d-flex align-items-center">
            <a @click.prevent="changePage(item)"
                :class="{ 'text-default text-active': item.active, 'text-no-active pointer': !item.active }">{{
                    item.name
                }}</a>
            <i v-if="!(entries.length == index + 1)" class='bx bx-chevron-right color-arrow px-1'></i>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        value: Array
    },
    data() {
        return {
            entries: []
        }
    },
    watch: {
        'value': {
            handler() {
                this.entries = this.value
            }
        }
    },
    methods: {
        changePage(item) {
            this.$router.push({ path: item.href })
        }
    },
    created() {
        this.entries = this.value
    }
}
</script>

<style scoped>
.text-no-active,
.color-arrow {
    color: #D4D4D4;
}

.text-no-active:hover {
    transition: 0.2s;
    color: #959595;
}

a {
    text-decoration: none;
}

.text-active {
    pointer-events: none;
}
</style>
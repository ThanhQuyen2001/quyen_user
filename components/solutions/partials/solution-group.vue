<template>
    <div>
        <div>
            <span class="font-size-18 font-weight-500 text-title">{{ title }}</span>
        </div>
        <b-form-group v-model="selected">
            <b-form-radio :name="name" v-for="option in options" :key="option.text" :value="option.value" :disabled="option.disabled"
                button-variant="outline-success">
                {{ option.text }}
            </b-form-radio>
        </b-form-group>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        options: Array,
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selected: 'first',
        }
    },
}
</script>

<style scoped>
.text-title {
    color: #262626;
}
</style>
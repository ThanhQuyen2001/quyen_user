<template>
    <div>
        <div class="pb-4">
            <slot name="category"></slot>
        </div>
        <slot name="content"></slot>
    </div>
</template>

<style scoped>
.card {
    border: none;
    background-color: transparent;
}

.card-title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.card-time {
    font-size: 14px;
}

.card-text {
    margin-bottom: 0px;
}

.card-body {
    padding: 0;
}
</style>
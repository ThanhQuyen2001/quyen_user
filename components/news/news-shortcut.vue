<template>
    <div>
        <shortcut-slider />
        <shortcut-statistic />
    </div>
</template>

<script>
import ShortcutSlider from './partials/shortcut-slider.vue';
import ShortcutStatistic from './partials/shortcut-statistic.vue';
export default {
    components: {
        ShortcutSlider,
        ShortcutStatistic
    }
}
</script>
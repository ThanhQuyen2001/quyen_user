<template>
    <div>
        <home-banner />
        <home-news />
        <home-rural-service />
        <home-download />
        <home-device />
        <home-smart-solution />
        <home-video />
        <home-rural-network />
        <home-support-service />
    </div>
</template>

<script>
import HomeBanner from '~/components/homes/home-banner.vue'
import HomeNews from '~/components/homes/home-news.vue';
import HomeRuralService from '~/components/homes/home-rural-service.vue';
import HomeDownload from '~/components/homes/home-download.vue'
import HomeDevice from '~/components/homes/home-device.vue';
import HomeSmartSolution from '~/components/homes/home-smart-solution.vue';
import HomeVideo from '~/components/homes/home-video.vue';
import HomeRuralNetwork from '~/components/homes/home-rural-network.vue';
import HomeSupportService from '~/components/homes/home-support-service.vue';
export default {
    components: {
        HomeBanner,
        HomeNews,
        HomeRuralService,
        HomeDownload,
        HomeDevice,
        HomeSmartSolution,
        HomeVideo,
        HomeRuralNetwork,
        HomeSupportService
    },
};
</script>

<style scoped lang="scss">

</style>

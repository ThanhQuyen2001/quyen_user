<template>
    <div class="d-flex align-items-center justify-content-center my-4" style="gap: 8px">
        <div class="position-relative loading-main">
            <div class="loading svg-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="87" viewBox="0 0 164 87" fill="none">
                    <path d="M158.375 5C158.375 15.0297 156.4 24.9612 152.561 34.2274C148.723 43.4937 143.097 51.9132 136.005 59.0053C128.913 66.0974 120.494 71.7231 111.227 75.5613C101.961 79.3995 92.0297 81.375 82 81.375C71.9703 81.375 62.0388 79.3995 52.7725 75.5613C43.5063 71.7231 35.0868 66.0974 27.9947 59.0053C20.9026 51.9132 15.2769 43.4937 11.4387 34.2274C7.6005 24.9612 5.625 15.0297 5.625 4.99999" stroke="#44B97C" stroke-width="10" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="loading svg-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="59" viewBox="0 0 110 59" fill="none">
                    <path d="M4.75 55C4.75 48.4011 6.04975 41.8668 8.57505 35.7702C11.1004 29.6735 14.8017 24.134 19.4679 19.4679C24.134 14.8017 29.6735 11.1004 35.7702 8.57505C41.8668 6.04976 48.4011 4.75 55 4.75C61.5989 4.75 68.1332 6.04975 74.2298 8.57505C80.3265 11.1004 85.866 14.8017 90.5321 19.4679C95.1983 24.134 98.8996 29.6735 101.425 35.7702C103.95 41.8668 105.25 48.4011 105.25 55" stroke="#28666E" stroke-width="8" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="loading svg-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="27" viewBox="0 0 48 27" fill="none">
                    <path d="M3.25 3C3.25 5.72493 3.78671 8.42317 4.8295 10.9407C5.87228 13.4582 7.40072 15.7456 9.32753 17.6725C11.2543 19.5993 13.5418 21.1277 16.0593 22.1705C18.5768 23.2133 21.2751 23.75 24 23.75C26.7249 23.75 29.4232 23.2133 31.9407 22.1705C34.4582 21.1277 36.7456 19.5993 38.6725 17.6725C40.5993 15.7457 42.1277 13.4582 43.1705 10.9407C44.2133 8.42318 44.75 5.72493 44.75 3" stroke="#44B97C" stroke-width="5" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <h5 class="mb-0">Đang tải...</h5>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
    .loading-main {
        scale: 0.3;
        width: 60px;
        height: 60px;
    }
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .svg-1 svg {
        width: 164px;
        height: 164px;
        padding-top: 77px;
        animation: spin1 1s linear infinite;
        transform-origin: center center;
    }
    .svg-2 svg {
        width: 110px;
        height: 110px;
        padding-bottom: 51px;
        animation: spin2 1s linear infinite;
        transform-origin: center center;
    }
    .svg-3 svg {
        width: 48px;
        height: 48px;
        padding-top: 21px;
        animation: spin1 1s linear infinite;
        transform-origin: center center;
    }
    @keyframes spin1 {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes spin2 {
        100% {
            transform: rotate(-360deg);
        }
    }
</style>
  
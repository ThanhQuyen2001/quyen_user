import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatPrice', function (price) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return VND.format(price)
});

Vue.filter('formatDateTime', function (time) {
    return moment(time).utcOffset(7).format("HH:mm DD/MM/YYYY")
});

Vue.filter('convertText', function (content) {
    return content.replace(/<[^>]*>/g, '').replaceAll('&nbsp;', '')
});

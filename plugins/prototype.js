import Vue from 'vue';

const addPrefixImage = (source) => {
    if (source && source.startsWith('http')) {
        return source
    }
    return process.env.VUE_APP_PREVIEW + source
}

Vue.prototype.$addPrefixImage = addPrefixImage
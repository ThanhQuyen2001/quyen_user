<template>
    <div>
        <contact-rural-network/>
        <contact-info/>
    </div>
</template>
<script>
import ContactRuralNetwork from '~/components/contacts/contact-rural-network.vue';
import ContactInfo from '~/components/contacts/contact-info.vue'
export default {
    components:{
        ContactRuralNetwork,
        ContactInfo
    }
}
</script>
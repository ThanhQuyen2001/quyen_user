<template>
    <div>
        <rural-services-description/>
        <rural-services-solutions/>
    </div>
</template>
<script>
import RuralServicesDescription from '~/components/rural-services/rural-services-description.vue';
import RuralServicesSolutions from '~/components/rural-services/rural-services-solutions.vue';
export default {
    components:{
        RuralServicesDescription,
        RuralServicesSolutions
    }
}
</script>

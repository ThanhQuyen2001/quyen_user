<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <solution-description />
            </div>
            <div class="col-lg-12">
                <solution-filter />
            </div>
        </div>
    </div>
</template>

<script>
import SolutionFilter from '~/components/solutions/solution-filter.vue';
import SolutionDescription from '~/components/solutions/solution-description.vue';
export default {
    components: {
        SolutionFilter,
        SolutionDescription
    },
}
</script>
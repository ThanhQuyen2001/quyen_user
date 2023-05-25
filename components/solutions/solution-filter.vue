<template>
    <div>
        <div>
            <div class="text-default font-size-22 font-weight-500">Danh sách giải pháp thông minh:</div>
        </div>
        <div class="mt-3">
            <div class="col-lg-4 col-sm-6 col-12 px-0">
                <b-input style="height: 40px; font-size: 14px; box-shadow: none;" placeholder="Tìm kiếm..." type="text"></b-input>
            </div>
        </div>
        <div class="mt-3">
            <div class="text-default font-size-22 font-weight-500">Lĩnh vực theo chuyên mục:</div>
        </div>
        <div class="row mt-2">
            <div class="col-lg-4 mt-3">
                <solution-group title="Dịch vụ nông thôn" :options="options" name="solution_1" />
            </div>
            <div class="col-lg-4 mt-3">
                <solution-group title="Chính quyền số" :options="options" name="solution_2" />
            </div>
            <div class="col-lg-4 mt-3">
                <solution-group title="Dịch vụ doanh nghiệp" :options="options" name="solution_3" />
            </div>
            <div class="col-lg-4 mt-3">
                <solution-group title="Dịch vụ doanh nghiệp" :options="options" name="solution_4" />
            </div>
            <div class="col-lg-4 mt-3">
                <solution-group title="Dịch vụ doanh nghiệp" :options="options" name="solution_5" />
            </div>
        </div>
        <hr>
        <div>
            <solution-filter-result :entries="entries" />
        </div>
        <div>
            <table-pagination :pagination="pagination" />
        </div>
    </div>
</template>
<script>
import TablePagination from '../datatable/table-pagination.vue';
import SolutionGroup from './partials/solution-group.vue'
import SolutionFilterResult from './partials/solution-filter-result.vue'

export default {
    components: {
        SolutionGroup,
        SolutionFilterResult,
        TablePagination
    },
    data() {
        return {
            options: [
                { text: 'First radio', value: 'first' },
                { text: 'Second radio', value: 'second' },
                { text: 'Third radio', value: 'third' }
            ],
            pagination: {
                deleted: false,
                length: 12,
                order_by: "created_at",
                order_dir: "desc",
                search: "",
                page: 1,
                total: 35
            },
            entries: []
        };
    },
}
</script>
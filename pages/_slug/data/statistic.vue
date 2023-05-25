<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="font-size-22 font-weight-bold mb-3">Thống kê phản ánh theo trạng thái</div>
                <div class="row">
                    <div class="col-lg-3 mb-4">
                        <div class="py-4 border-statistic">
                            <VueApexCharts type="radialBar" :options="options1" :series="series1"></VueApexCharts>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-4">
                        <div class="py-4 border-statistic">
                            <VueApexCharts type="radialBar" :options="options1" :series="series1"></VueApexCharts>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-4">
                        <div class="py-4 border-statistic">
                            <VueApexCharts type="radialBar" :options="options1" :series="series1"></VueApexCharts>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-4">
                        <div class="py-4 border-statistic">
                            <VueApexCharts type="radialBar" :options="options1" :series="series1"></VueApexCharts>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-6">
                <div class="font-size-22 font-weight-bold mb-5">Biểu đồ số lượng phản ánh theo ngày</div>
                <VueApexCharts max-width="300" type="area" :options="options" :series="series"></VueApexCharts>
            </div>
            <div class="col-lg-6">
                <div class="font-size-22 font-weight-bold mb-5">Thống kê khảo sát</div>
                <VueApexCharts max-width="300" type="bar" :options="options2" :series="series2"></VueApexCharts>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
            series1: [76],
            options1: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#C7D2FE",
                            strokeWidth: '97%',
                            margin: 16, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                color: '#999',
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                offsetY: 30,
                                show: true,
                                color: '#404040',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            },
                            value: {
                                offsetY: -30,
                                fontSize: '22px',
                                color: '#6366F1'
                            }
                        },
                    }
                },
                // grid: {
                //     padding: {
                //         top: -10
                //     }
                // },
                fill: {
                    type: 'gradient',
                    colors: ['#6366F1', '#E91E63', '#9C27B0'],
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: ['Chờ xử lý'],
            },
            series2: [{
                data: [21, 22, 10, 28, 16, 21, 13, 30]
            }],
            options2: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                colors: ['#6366F1', '#E91E63', '#9C27B0'],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        ['John', 'Doe'],
                        ['Joe', 'Smith'],
                        ['Jake', 'Williams'],
                        'Amber',
                        ['Peter', 'Brown'],
                        ['Mary', 'Evans'],
                        ['David', 'Wilson'],
                        ['Lily', 'Roberts'],
                    ],
                    labels: {
                        style: {
                            colors: ['#6366F1', '#E91E63', '#9C27B0'],
                            fontSize: '12px'
                        }
                    }
                }
            },
        }
    }
}
</script>

<style scoped>
.border-statistic {
    border: 2px solid rgba(27, 104, 104, 0.5);
    border-radius: 10px;
}
</style>
<template>
    <div id="flow-item">
        <div class="flex" style="align-items: center">
            <div class="triangleItem">
                <div class="triangle"></div>
                <div class="triangle"></div>
                <div class="triangle"></div>
            </div>
            <span class="echart-title">人流统计</span>
        </div>
        <div id="flow" style="width: 371px; height: 224px; margin-top: -25px;"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
export default {
    name: 'FlowItem',
    mounted() {
        let myChart = echarts.init(document.getElementById('flow'));
        const option = {
            // title: { text: '人流统计' },   
            tooltip: {},
            legend: {
                data:['销量']
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                axisLine: {
                    lineStyle: {
                        color: '#9BEBF2'
                    }
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9BEBF2'
                    }
                }
            },
            series: [{
                // name: '销量',
                type: 'bar',
                itemStyle: {
                    color: 'rgba(0,0,0,0.05)'
                },
                barGap: '-100%',
                barCategoryGap: '80%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                data: [5, 20, 36, 10, 10, 20],
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
            }]
        }
        myChart.setOption(option);
    }
}
</script>

<style lang="scss">
#flow-item {
    width: 371px;
    height: 224px;
    background-image: url('../assets/card1.png');
}
</style>
<template>
    <div id="resource-item">
        <div class="flex" style="align-items: center">
            <div class="triangleItem">
                <div class="triangle"></div>
                <div class="triangle"></div>
                <div class="triangle"></div>
            </div>
            <span class="echart-title">资源消耗统计</span>
        </div>
        <div id="resourceEcharts" style="width: 371px; height: 224px"></div>
        <div id="resourceEcharts2" style="width: 371px; height: 224px"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
export default {
    name: 'ResourceItem',
    mounted() {
        let myChart = echarts.init(document.getElementById('resourceEcharts'));
        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: true,  // 左右留有空位？
                axisLabel: {
                    textStyle: {
                        color: '#D7F2FF',
                        fontSize: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#80edf433'
                    }
                },
            },
            yAxis: {
                type: 'value',
                name: '[个]',
                nameTextStyle: {
                    fontSize: 10,
                    color: '#D7F2FF',
                    align: 'right',
                    padding: [0, 10, 6, 0]
                },
                axisLine: {
                    lineStyle: {
                        color: '#80edf433'
                    }
                },
                boundaryGap: ['0', '0'],
                axisLabel: {
                    textStyle: {
                        color: '#D7F2FF',
                        fontSize: 10
                    },
                }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                　　var result = ''
                　　var dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#43B1F2"></span>'
                　　params.forEach(function (item) {
                　　　　result += item.axisValue + "</br>" + dotHtml + item.data
                　　})
                　　return result
                }
            },
            visualMap: {
                // type: 'piecewise',
                type: 'continuous',
                show: false,
                dimension: 0,
                seriesIndex: 0,
                color: ['rgba(155, 235, 242, 0.39)']
            },
            series: [
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'circle',  // 'image://http://xxx.xxx.xxx/a/b.png'设置在线icon
                    lineStyle: {
                        color: '#79EBE9',
                        width: 3
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        label: {show: true},
                        lineStyle:{
                            color:  '#79EBE9'
                        },
                        // data: [
                        //     {xAxis: 1},
                        //     {xAxis: 3},
                        //     {xAxis: 5},
                        //     {xAxis: 7}
                        // ]
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#43B1F2'
                            }, {
                                offset: 1,
                                color: 'rgba(12,102,173,.2)'
                            }])
                        }
                    },
                    data: [
                        ['12/18', 100],
                        ['12/19', 265],
                        ['12/20', 350],
                        ['12/21', 240],
                        ['12/22', 265],
                        ['12/23', 300],
                        ['12/24', 400],
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                color: '#D7F2FF'  // 折点数值颜色
                            },
                        }
                    }
                },
            ]
        }
        myChart.setOption(option);
        let myChart2 = echarts.init(document.getElementById('resourceEcharts2'));
        myChart2.setOption(option);
    }
}
</script>

<style lang="scss">
#resource-item {
    width: 371px;
    height: 484px;
    background-image: url('../assets/to5.png');
    background-repeat: no-repeat;
}
</style>
<template>
    <div id="flowTrend">
        <div class="flex" style="align-items: center; padding-left: 30px; padding-top: 5px">
            <div class="triangleItem">
                <div class="triangle"></div>
                <div class="triangle"></div>
                <div class="triangle"></div>
            </div>
            <span class="echart-title">人流走势统计</span>
        </div>
        <div class="flex right">
            <div class="dropDown" @mouseout="toggle(0, false)" @mouseover="toggle(0, true)">
                <span class="stitle">2018-08</span>
                <span class="sanjiao"></span>
                <div class="dropDown-li" v-show="sel_1">
                    <li>南宫煌</li>
                    <li>温慧</li>
                    <li>星璇</li>
                    <li>王蓬絮</li>
                    <li>雷元戈</li>
                </div>
            </div>
            <div class="dropDown" @mouseout="toggle(1, false)" @mouseover="toggle(1, true)">
                <span class="stitle">2018-08</span>
                <span class="sanjiao"></span>
                <div class="dropDown-li" v-show="sel_2">
                    <li>景天</li>
                    <li>唐雪见</li>
                    <li>龙葵</li>
                    <li>徐长卿</li>
                    <li>紫萱</li>
                </div>
            </div>
        </div>
        <div id="flowTrendecharts" style="width: 100%; height: 80%; margin-top: 50px; z-index: 0"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
export default {
    name: 'FlowTrend',
    data() {
        return {
            sel_1: false,
            sel_2: false
        }
    },
    methods: {
        toggle(index, show) {
            if (index === 0) {
                this.sel_1 = show ? true : false;
            } else if (index === 1) {
                this.sel_2 = show ? true : false;
            }
        }
    },
    mounted() {
        let myChart = echarts.init(document.getElementById('flowTrendecharts'));
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
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'circle',  // 'image://http://xxx.xxx.xxx/a/b.png'设置在线icon
                    lineStyle: {
                        color: '#5A9FD9',
                        width: 3
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        label: {show: true},
                        lineStyle:{
                            color:  '#79EBE9'
                        },
                    },
                    data: [
                        ['12/18', 200],
                        ['12/19', 165],
                        ['12/20', 250],
                        ['12/21', 140],
                        ['12/22', 165],
                        ['12/23', 400],
                        ['12/24', 300],
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
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'circle',  // 'image://http://xxx.xxx.xxx/a/b.png'设置在线icon
                    lineStyle: {
                        color: '#F2B354',
                        width: 3
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        label: {show: true},
                        lineStyle:{
                            color:  '#79EBE9'
                        },
                    },
                    data: [
                        ['12/18', 200],
                        ['12/19', 505],
                        ['12/20', 150],
                        ['12/21', 340],
                        ['12/22', 365],
                        ['12/23', 200],
                        ['12/24', 300],
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
    }
}
</script>

<style lang="scss">
#flowTrend {
    width: 1032px;
    height: 484px;
    background-image: url('../assets/to3.png');
    background-repeat: no-repeat;
    .dropDown {
        background: transparent;
        border: 1px solid #3F4B91;
        width: 162px;
        height: 35px;
        line-height: 35px;
        color: #7EC7EC;
        border-radius: 2px;
        text-align: center;
        box-shadow: 0px 0px 5px #7ec7ec4a;
        margin-right: 10px;
        position: relative;
        cursor: pointer;
        .stitle {
            margin-right: 33px;
        }
        .sanjiao {
            padding-left: 14px;
            border-left: 1px solid #7ec7ec4a;
            position: relative;
            &:after {
                content: '';
                width: 0; 
                height: 0; 
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #9BEBF2;
                position: absolute;
                top: 7px;
            }
        }
        .dropDown-li {
            background: transparent;
            border: 1px solid #3F4B91;
            box-shadow: 0px 0px 5px #7ec7ec4a;
            z-index: 888;
            position: absolute;
            bottom: 36px;
            width: 100%;
            background: #20359554;
            transition: all .5s;
            li {
                transition: all .5s;
                cursor: pointer;
                border-bottom: 1px solid #3F4B91;
                &:hover {
                    background: #80edf457;
                    color: #fff;
                }
            }
        }
    }
}
</style>
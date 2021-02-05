<template>
    <div id="sex-item">
        <div class="flex" style="align-items: center; justify-content: space-between">
            <div class="flex" style="width: 150px; align-items: center">
                <div class="triangleItem">
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                    <div class="triangle"></div>
                </div>
                <span class="echart-title">性别统计</span>
            </div>
            <div class="flex" style="justify-content: space-between; margin-right: 25px">
                <div class="flex" style="align-items: center; margin-right: 18px">
                    <img src="../assets/center/using-icon.png" style="margin-right: 9px; width: 9px; height: 9px">
                    <div style="color: #D7F2FF; font-size: 13px">女性</div>
                </div>
                <div class="flex" style="align-items: center">
                    <img src="../assets/center/free-icon.png" style="margin-right: 9px; width: 9px; height: 9px">
                    <div style="color: #D7F2FF; font-size: 13px">男性</div>
                </div>
            </div>
        </div>
        <div class="database">
            <div class="flex">
                <span style="color: #2CC9DF">男性：</span>
                <span class="database-amount">86<span>人次</span></span>
            </div>
            <div class="flex">
                <span style="color: #2CC9DF">占比：</span>
                <span class="database-amount">45<span>%</span></span>
            </div>
            <div class="flex">
                <span style="color: #F7DD1B">女性：</span>
                <span class="database-amount">128<span>人次</span></span>
            </div>
            <div class="flex">
                <span style="color: #F7DD1B">占比：</span>
                <span class="database-amount">55<span>%</span></span>
            </div>
        </div>
        <div id="sexEcharts" style="width: 371px; height: 224px"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
export default {
    name: 'SexItem',
    mounted() {
        let myChart = echarts.init(document.getElementById('sexEcharts'));
        const option = {
            tooltip: {},
            center : ['50%', '50%'],
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '55%'],
                    data: [
                        {value: 135, name: '女性', label: {color: '#E7A218'}, labelLine: {lineStyle: {color: '#E7A218'}}},
                        {value: 310, name: '男性', label: {color: '#80EDF4'}, labelLine: {lineStyle: {color: '#80EDF4'}}},
                    ],
                    color : ['#E7A218', '#80EDF4'],
                    left: 0,
                    top: 0,
                    label: {
                        show: false,
                        position: 'outside',
                        color: '#fff',
                        fontFamily: 'sans-serif',
                        labelLine: {
                            show: false
                        },
                    },
                    markLine: {
                        silent: true
                    },
                    labelLine: {  // 视觉引导线样式
                        show: false,
                        normal: {
                            length: 10,
                            length2: 20
                        }  
                    },
                }
            ]
        }
        myChart.setOption(option);
    }
}
</script>

<style lang="scss">
#sex-item {
    width: 371px;
    height: 253px;
    background-image: url('../assets/to4.png');
    background-repeat: no-repeat;
    margin-top: 8px;
    #sexEcharts {
        left: -80px;
        // top: -30px;
    }
    .database {
        position: absolute;
        right: 35px;
        bottom: 30px;
        color: #fff;
        >.flex {
            margin-bottom: 9px;
            align-items: flex-end;
        }
        .database-amount {
            font-size: 24px;
            color: #80EDF4;
            span {
                font-size: 10px;
                color: #D7F2FF;
                margin-left: 6px;
            }
        }
    }
}
</style>
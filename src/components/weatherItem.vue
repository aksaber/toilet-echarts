<template>
    <div id="weather-item">
        <div class="flex" style="align-items: center">
            <div class="triangleItem">
                <div class="triangle"></div>
                <div class="triangle"></div>
                <div class="triangle"></div>
            </div>
            <span class="echart-title">本地天气</span>
        </div>
        <div class="content">
            <div class="date">
                <div style="color: #9BEBF1; margin-bottom: 13px">当前日期</div>
                <div style="color: #9BEBF1; font-size: 22px">2018 - 12 - 23 星期日</div>
            </div>
            <div class="row" style="padding: 0 15px">
                <div class="col-6 flex">
                    <img src="../assets/sbbj.png" style="width: 32px; height: 31px">
                    <div>
                        <div class="title">设备报警</div>
                        <div style="font-size: 20px; color: #87FAC3">120 <span class="Classifier">个</span></div>
                    </div>
                </div>
                <div class="col-6 flex">
                    <img src="../assets/fengxiang.png" style="width: 29px; height: 30px">
                    <div>
                        <div class="title">风向</div>
                        <div style="font-size: 20px; color: #FDFD99">偏南风 7-8<span class="Classifier">级</span></div>
                    </div>
                </div>
                <div class="col-6 flex">
                    <img src="../assets/wszk.png" style="width: 31px; height: 38px">
                    <div>
                        <div class="title">卫生状况</div>
                        <div style="font-size: 20px; color: #65B7F7">209 <span class="Classifier">个</span></div>
                    </div>
                </div>
                <div class="col-6 flex">
                    <img src="../assets/leixing.png" style="width: 30px; height: 30px">
                    <div>
                        <div class="title">类型</div>
                        <div style="font-size: 20px; color: #87FAC3">多云转晴</div>
                    </div>
                </div>
                <div class="col-6 flex">
                    <img src="../assets/qzxx.png" style="width: 32px; height: 31px">
                    <div>
                        <div class="title">求助信息</div>
                        <div style="font-size: 20px; color: #87FAC3">209 <span class="Classifier">个</span></div>
                    </div>
                </div>
                <div class="col-6 flex">
                    <img src="../assets/csjg.png" style="width: 30px; height: 30px">
                    <div>
                        <div class="title">超时警告</div>
                        <div style="font-size: 20px; color: #F1B353">209 <span class="Classifier">个</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeatherItem'
}
</script>

<style lang="scss">
#weather-item {
    width: 420px;
    height: 455px;
    background-image: url('../assets/to5.png');
    background-repeat: no-repeat;
    margin-bottom: 10px;
    .content {
        margin-top: 36px;
        .date {
            padding-top: 13px;
            padding-bottom: 13px;
            width: 256px;
            margin: 0 auto;
            margin-bottom: 35px;
            background: url('../assets/weather-bg.png')
            // background: radial-gradient(closest-side, #272f6e, transparent);
        }
        .title {
            color: #9BEBF1;
            margin-bottom: 11px;
        }
        .Classifier {
            font-size: 12px;
        }
    }
    .col-6 {
        align-items: flex-end;
        margin-bottom: 36px;
        img {
            margin-right: 19px;
        }
    }
}
</style>
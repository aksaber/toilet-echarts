<template>
    <div id="toiletStatus">
        <div class="status-title">
            <img src="../../assets/center/man1.png" >
            <div>男厕所状态</div>
        </div>
        <div class="status-statusInfo flex">
            <div class="flex" style="justify-content: space-between; width: 250px">
                <div class="flex" style="align-items: center">
                    <img src="../../assets/center/using-icon.png" >
                    <div style="color: #D7F2FF; font-size: 13px">有人</div>
                </div>
                <div class="flex" style="align-items: center">
                    <img src="../../assets/center/free-icon.png" >
                    <div style="color: #D7F2FF; font-size: 13px">空闲</div>
                </div>
                <div class="flex" style="align-items: center">
                    <img src="../../assets/center/fault-icon.png" >
                    <div style="color: #D7F2FF; font-size: 13px">故障</div>
                </div>
                <div class="flex" style="align-items: center">
                    <img src="../../assets/center/help-icon.png" >
                    <div style="color: #D7F2FF; font-size: 13px">求助</div>
                </div>
            </div>
            <div style="color: #D7F2FF; font-size: 13px">剩余坑位：3个</div>
        </div>
        <div class="status-people flex">
            <div v-for="(item, index) in datas.state" class="status-people-wrap" v-if="datas.sex == 'man'">
                <img src="../../assets/center/man1.png" class="status-people-man" v-if="item == 0">
                <img src="../../assets/center/man2.png" class="status-people-man" v-if="item == 1">
                <img src="../../assets/center/man3.png" class="status-people-man shanshuo" v-if="item == 2">
                <div style="position: relative">
                    <img
                        src="../../assets/center/man4.png"
                        class="status-people-man"
                        v-if="item == 3"
                        @mouseenter="qiuzhu(0, 'man')"
                        @mouseleave="qiuzhu(1, 'man')"
                    >
                    <div class="qiuzhuinfo" v-show="qiuzhuman">求助信息</div>
                </div>
                <div :class="['status-people-amount', item == 2 ? 'shanshuo' : '']">{{ index }}号</div>
            </div>
            <div
                v-for="(item, index) in datas.state"
                class="status-people-wrap"
                style="margin-left: 0; margin-right: 9px; position: relative"
                v-if="datas.sex == 'women'"
            >
                <img src="../../assets/center/women1.png" class="status-people-women" v-if="item == 0">
                <img src="../../assets/center/women2.png" class="status-people-women" v-if="item == 1">
                <img src="../../assets/center/women3.png" class="status-people-women shanshuo" v-if="item == 2">
                <img
                    src="../../assets/center/women4.png"
                    class="status-people-women qiuzhu"
                    v-if="item == 3"
                    @mouseenter="qiuzhu(0, 'women')"
                    @mouseleave="qiuzhu(1, 'women')"
                >
                <div class="qiuzhuinfo" v-show="qiuzhuwomen && item == 3">求助信息</div>
                <div :class="['status-people-amount', item == 2 ? 'shanshuo' : '']">{{ index }}号</div>
            </div>
        </div>
        <div class="status-time flex">
            <div class="status-time-title">最新打扫时间：</div>
            <div class="status-time-info">2019/20/22  12:31:08</div>
        </div>
        <div class="status-temperature flex">
            <div class="">
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/wendu.png" style="width: 15px; height: 33px">
                </div>
                <div class="status-tem-title">温度</div>
                <div class="status-tem-detail">24°C</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/h2s.png" style="width: 32px; height: 19px">
                </div>
                <div class="status-tem-title">硫化氢</div>
                <div class="status-tem-detail">75%</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/nh3.png" style="width: 31px; height: 17px">
                </div>
                <div class="status-tem-title">氨气</div>
                <div class="status-tem-detail">0.03</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/xfxt.png" style="width: 24px; height: 29px">
                </div>
                <div class="status-tem-title">新风系统</div>
                <div class="status-tem-detail">0.11</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/pm.png" style="width: 39px; height: 32px">
                </div>
                <div class="status-tem-title">PM2.5</div>
                <div class="status-tem-detail">41</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/ywbj.png" style="width: 24px; height: 24px">
                </div>
                <div class="status-tem-title">烟雾报警</div>
                <div class="status-tem-detail">已关闭</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/gzd.png" style="width: 32px; height: 34px">
                </div>
                <div class="status-tem-title">光照度</div>
                <div class="status-tem-detail">未堵塞</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/xsds.png" style="width: 26px; height: 25px">
                </div>
                <div class="status-tem-title">下水堵塞</div>
                <div class="status-tem-detail">未报警</div>
            </div>
            <div>
                <div class="flex" style="height: 33px; margin-bottom: 10px; align-items: center">
                    <img src="../../assets/center/shidu.png" style="width: 25px; height: 24px">
                </div>
                <div class="status-tem-title">湿度</div>
                <div class="status-tem-detail">120LUX</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToiletStatus',
    data() {
        return {
            qiuzhuwomen: false,
            qiuzhuman: false
        }
    },
    props: ['datas'],
    mounted() {
        console.log(this.people, 'asdasjdksa')
    },
    methods: {
        qiuzhu(type, sex) {
            if (sex == 'man') {
                this.qiuzhuman = type == 0 ? true : false;
            } else {
                this.qiuzhuwomen = type == 0 ? true : false;
            }
        }
    }
}
</script>

<style lang="scss">
#toiletStatus {
    width: 444px;
    box-sizing: border-box;
    background-image: url('../../assets/center/card.png');
    background-size: 100% 100%;
    padding: 30px 24px;
    .status-title {
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        img {
            width: 9px;
            height: 23px;
            margin-right: 15px;
        }
        div {
            color: #D7F2FF;
            font-size: 18px;
        }
    }
    .status-statusInfo {
        justify-content: space-between;
        margin-bottom: 37px;
        img {
            width: 9px;
            height: 10px;
            margin-right: 8px;
        }
    }
    .status-people {
        flex-wrap: wrap;
        height: 342px;
        .status-people-wrap {
            padding: 0 12px;
            margin-bottom: 33px;
            margin-left: 15px;
            margin-right: 15px;
        }
        .status-people-man {
            width: 20px;
            height: 52px;
            margin-bottom: 11px;
        }
        .status-people-women {
            width: 46px;
            height: 46px;
            margin-bottom: 11px;
        }
        .status-people-amount {
            font-size: 13px;
            color: #D7F2FF;
            text-align: center;
        }
    }
    .status-time {
        border-top: 1px solid #2F5686;
        border-bottom: 1px solid #2F5686;
        padding: 19px 0;
        margin-bottom: 45px;
        .status-time-title {
            color: #D7F2FF;
            margin-left: 25px;
        }
        .status-time-info {
            color: #2CCCDF;
            margin-left: 10px;
        }
    }
    .status-temperature {
        flex-wrap: wrap;
        >div {
            margin-bottom: 36px;
            margin-left: 20px;
            margin-right: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        img {
            margin-bottom: 10px;
        }
        .status-tem-title {
            font-size: 12px;
            color: #D7F2FF;
            margin-bottom: 10px;
        }
        .status-tem-detail {
            color: #D7F2FF;
        }
    }
    .shanshuo {
        animation: show 1.5s infinite;
    }
    @keyframes show {
        0% {opacity: 1;}
        50% {opacity: 0;}
        100% {opacity: 1;}
    }
    .qiuzhuinfo {
        position: absolute;
        bottom: 0;
        right: -123px;
        color: #28cde0;
        background: #030e4b;
        width: 123px;
        border: 1px solid #3093ca;
        height: 88px;
        text-align: center;
        line-height: 88px;
        border-radius: 10px;
    }
}
</style>
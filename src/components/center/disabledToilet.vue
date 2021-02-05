<template>
    <div id="disabled-toilet">
        <div class="flex" style="margin-bottom: 19px">
            <img src="../../assets/center/disabled.png" style="width: 15px; height: 18px; margin-right: 12px">
            <span class="center-title">第三厕所状态</span>
        </div>
        <div class="disToilet-statusInfo flex">
            <div class="flex" style="justify-content: space-between; width: 200px">
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
        <div class="disToilet-content flex">
            <div v-for="(item, index) in disabled">
                <img src="../../assets/center/disabled.png" class="disToilet-content-img">
                <div class="disToilet-content-titile">{{ index + 1 }}号</div>
            </div>
        </div>
        <div class="disToilet-time flex">
            <div class="disToilet-time-title">最新打扫时间：</div>
            <div class="disToilet-time-info">2019/20/22  12:31:08</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DisabledToilet',
    data() {
        return {
            disabled: Array(5)
        }
    }
}
</script>

<style lang="scss">
#disabled-toilet {
    width: 385px;
    height: 286px;
    box-sizing: border-box;
    background-image: url('../../assets/center/card2.png');
    background-size: 100% 100%;
    padding: 35px 18px;
    margin-bottom: 22px;
    .disToilet-statusInfo {
        justify-content: space-between;
        margin-bottom: 40px;
        img {
            width: 9px;
            height: 10px;
            margin-right: 8px;
        }
    }
    .disToilet-time {
        border-top: 1px solid #2F5686;
        padding: 19px 0;
        margin-bottom: 45px;
        margin-top: 20px;
        .disToilet-time-title {
            color: #D7F2FF;
            margin-left: 25px;
        }
        .disToilet-time-info {
            color: #2CCCDF;
            margin-left: 10px;
        }
    }
    .disToilet-content {
        >div {
            margin: 0 19px;
        }
        .disToilet-content-img {
            width: 33px;
            height: 39px;
            margin-bottom: 15px;
        }
        .disToilet-content-titile {
            color: #D7F2FF;
            font-size: 13px;
        }
    }
}
</style>
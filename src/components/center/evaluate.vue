<template>
    <div id="evaluate">
        <div class="flex" style="align-items: center; margin-bottom: 13px">
            <span class="center-title">厕所评价</span>
        </div>
        <div class="eva-border">
            <div class="flex">
                <div class="eva-border-title">卫生环境</div>
                <div class="flex eva-border-star">
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star-light.png" >
                </div>
            </div>
            <div class="flex">
                <div class="eva-border-title">管路服务</div>
                <div class="flex eva-border-star">
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star.png" >
                    <img src="../../assets/center/star.png" >
                    <img src="../../assets/center/star.png" >
                    <img src="../../assets/center/star.png" >
                </div>
            </div>
            <div class="flex">
                <div class="eva-border-title">设施设备</div>
                <div class="flex eva-border-star">
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star-light.png" >
                    <img src="../../assets/center/star.png" >
                    <img src="../../assets/center/star.png" >
                </div>
            </div>
        </div>
        <div class="eva-tag">
            <span class="eva-tag-btn">设备齐全(0)</span>
            <span class="eva-tag-btn">位置合理(0)</span>
            <span class="eva-tag-btn">卫生不错(0)</span>
            <span class="eva-tag-btn">设施不全(0)</span>
            <span class="eva-tag-btn">人多拥挤(0)</span>
            <span class="eva-tag-btn">卫生较差(0)</span>
        </div>
        <div class="eva-bottom">申请拖把2把</div>
    </div>
</template>

<script>
export default {
    name: 'Evaluate'
}
</script>

<style lang="scss">
#evaluate {
    width: 391px;
    box-sizing: border-box;
    background-image: url('../../assets/center/card2.png');
    background-size: 100% 100%;
    padding: 30px 35px;
    .eva-border {
        border: 1px solid #3492CA;
        margin-bottom: 14px;
        .flex {
            color: #D7F2FF;
            border-bottom: 1px solid #3492CA;
            transition: all .3s;
            cursor: pointer;
            &:hover {
                background: #3492CA;
            }
            &:last-child {
                border-bottom: none;
            }
        }
        .eva-border-title {
            padding: 13px 26px;
            border-right: 1px solid #3492CA;

        }
        .eva-border-star {
            padding-left: 34px;
            align-items: center;
            justify-content: space-around;
            width: 135px;
            img {
                width: 15px;
                height: 14px;
            }
        }
    }
    .eva-tag {
        color: #fff;
        margin-bottom: 8px;
        .eva-tag-btn {
            width: 100px;
            height: 26px;
            display: inline-block;
            line-height: 26px;
            background: #43B1F2;
            border-radius: 13px;
            font-size: 12px;
            text-align: center;
            margin-bottom: 10px;
        }
    }
    .eva-bottom {
        color: #D7F2FF;
        border-left: 3px solid #3FE9E6;
        padding-left: 8px;
    }
}
</style>
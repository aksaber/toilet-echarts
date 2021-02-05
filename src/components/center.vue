<template>
    <div id="centerItem">
        <div class="banner center">
            <div class="c-banner flex">
                <!-- <img src="../assets/center/banner-left.png">
                <img src="../assets/center/banner-right.png" alt=""> -->
            </div>
        </div>

        <div style="width: 1830px; margin: 0 auto; padding-bottom: 59px">
            <div class="left">
                <Utilization class="echart-item"></Utilization>
                <Flowrate class="echart-item"></Flowrate>
                <Evaluate class="echart-item"></Evaluate>
            </div>
            <div class="left">
                <div class="centerPage-title flex">
                    <div class="centitle-view flex">
                        <div style="margin-right: 13px">
                            <div class="centitle-currentTitle">今日如厕人数</div>
                            <div class="centitle-currentAmount">346<span>人</span></div>
                        </div>
                        <div>
                            <div class="centitle-beforeTitle">昨日如厕人数</div>
                            <div class="centitle-beforeAmount">21</div>
                        </div>
                    </div>
                    <img src="../assets/center/centitle-border.png" >
                    <div class="centitle-view flex">
                        <div style="margin-right: 13px">
                            <div class="centitle-currentTitle">本月总服务人数</div>
                            <div class="centitle-currentAmount">72314<span>人</span></div>
                        </div>
                        <div>
                            <div class="centitle-beforeTitle">上月总服务人数</div>
                            <div class="centitle-beforeAmount">135279</div>
                        </div>
                    </div>
                    <img src="../assets/center/centitle-border.png" >
                    <div class="centitle-view flex">
                        <div style="margin-right: 13px">
                            <div class="centitle-currentTitle">当前坑位利用率</div>
                            <div class="centitle-currentAmount">23<span>%</span></div>
                        </div>
                        <div>
                            <div class="centitle-beforeTitle">昨日利用率</div>
                            <div class="centitle-beforeAmount">31<span>%</span></div>
                        </div>
                    </div>
                </div>
                <div class="flex" style="justify-content: space-around; padding: 0 50px">
                    <ToiletStatus :datas="man"></ToiletStatus>
                    <ToiletStatus :datas="women"></ToiletStatus>
                </div>
            </div>
            <div class="left">
                <DisabledToilet class="echart-item"></DisabledToilet>
                <PmItem class="echart-item"></PmItem>
                <ChemistryItem class="echart-item"></ChemistryItem>
            </div>
            <div class="clear"></div>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
import Utilization from './center/utilization'
import Flowrate from './center/flowrate'
import Evaluate from './center/evaluate'
import ToiletStatus from './center/toiletStatus'
import DisabledToilet from './center/disabledToilet'
import PmItem from './center/pmItem'
import ChemistryItem from './center/chemistryItem'
export default {
    name: 'center',
    data() {
        return {
            man: {
                sex: 'man',
                state: [0,0,0,1,1,1,1,1,1,1,1,1,2]
            },
            women: {
                sex: 'women',
                state: [0,0,0,1,1,1,1,1,1,1,1,2,3]
            }
        }
    },
    components: {
        Utilization,
        Flowrate,
        Evaluate,
        ToiletStatus,
        DisabledToilet,
        PmItem,
        ChemistryItem
    }
}
</script>

<style lang="scss">
@import '../assets/css/common.css';
#centerItem {
    background-image: url('../assets/center/bg.png');
    background-size: 100% 100%;
    background-attachment: fixed;
    .c-banner {
        background: url('../assets/center/c-banner.png') no-repeat;
        height: 140px;
        color: #FFFFFF;
        align-items: center;
        justify-content: center;
        margin-bottom: 26px;
        background-size: cover;
        img {
            width: 644px;
            height: 14px;
            margin-top: 32px;
        }
    }
    .centerPage-title {
        background: url('../assets/center/center-title.png') no-repeat;
        padding: 23px 135px;
        width: 1025px;
        box-sizing: border-box;
        justify-content: space-around;
        margin-bottom: 44px;
        .centitle-view {
            align-items: flex-end;
            .centitle-currentTitle {
                color: #D7F2FF;
                margin-bottom: 13px;
            }
            .centitle-currentAmount {
                color: #80EDF4;
                font-size: 30px;
                font-weight: bold;
                text-align: center;
                span {
                    font-size: 10px;
                    color: #D7F2FF;
                    margin-left: 8px;
                }
            }
            .centitle-beforeTitle {
                font-size: 12px;
                color: #90D7F9;
                margin-bottom: 7px;
                padding-left: 6px;
                border-left: 1.5px solid #FDD20A;
            }
            .centitle-beforeAmount {
                font-size: 18px;
                color: #80EDF4;
                font-weight: bold;
                text-align: center;
            }
        }
        img {
            width: 1px;
            height: 33px;
        }
    }
}
</style>
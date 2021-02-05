<template>
    <div id="manager">
        <div class="banner center">
            <img src="../assets/m-banner.png" />
        </div>
        <div style="width: 1830px; margin: 0 auto">
            <div class="left">
                <FlowItem class="echart-item"></FlowItem>
                <SexItem class="echart-item"></SexItem>
            </div>
            <MapItem class="left echart-item"></MapItem>
            <WeatherItem class="left echart-item"></WeatherItem>
            <div class="center" style="margin-bottom: 10px">
                <img src="../assets/right-center.png" style="width: 397px; height: 21px">
            </div>
            <ResourceItem class="echart-item left"></ResourceItem>
            <FlowTrend class="left echart-item"></FlowTrend>
            <StarItem class="echart-item left"></StarItem>
            <div class="clear"></div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
import FlowItem from './flowItem'
import MapItem from './map'
import WeatherItem from './weatherItem'
import SexItem from './sexItem'
import ResourceItem from './resourceItem'
import FlowTrend from './flowTrend'
import StarItem from './starItem'
export default {
    name: 'Manager',
    data() {
        return {
            data: [
                {}
            ]
        }
    },
    components: {
        FlowItem,
        MapItem,
        WeatherItem,
        SexItem,
        ResourceItem,
        FlowTrend,
        StarItem,
    },
    mounted() {
        
    }
}
</script>

<style lang="scss">
@import '../assets/css/common.css';
#manager {
    background-image: url('../assets/bg.png');
    background-size: 100% 100%;
    background-attachment: fixed;
    padding-bottom: 36px;
}
</style>

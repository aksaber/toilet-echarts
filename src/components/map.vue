<template>
    <div id="map">
        <div class="flex" style="align-items: center; margin-bottom: 20px">
            <div class="triangleItem">
                <div class="triangle"></div>
                <div class="triangle"></div>
                <div class="triangle"></div>
            </div>
            <span class="echart-title">区域地图</span>
        </div>
        <div id="container-map" style="width: 959px; height: 390px"></div>
    </div>
</template>

<script>
export default {
    name: 'maps',
    mounted() {
        var map = new BMap.Map("container-map");
        // 创建地图实例 
        var point = new BMap.Point(116.404, 39.915);  //设置地图的中心点
        var zoom = 15;  //设置地图的等级
        // 创建点坐标 
        map.centerAndZoom(point, zoom);  //在地图中显示


        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);

        var myIcon = new BMap.Icon("http://192.168.0.50:9003/latlng.png", new BMap.Size(32, 32));
        var marker2 = ''
        for (let i = 0; i < 5; i++) {
            marker2 = new BMap.Marker(new BMap.Point(116.404+i, 39.915+i), {icon: myIcon});  // 创建标注
            map.addOverlay(marker2);              // 将标注添加到地图中
        }
        
        // var geoc = new BMap.Geocoder(); 
        // map.addEventListener("click",function(e){    //给地图添加点击事件
        //     map.clearOverlays();                   
        //     console.log(e);
        //     var lng=e.point.lng;
        //     var lat=e.point.lat;
        //     //创建标注位置
        //     var pt = new BMap.Point(lng, lat);
        //     var myIcon = new BMap.Icon("../assets/latlng.png", new BMap.Size(32, 32));
        //     var marker2 = new BMap.Marker(pt, {icon: myIcon});  // 创建标注
        //     map.addOverlay(marker2);              // 将标注添加到地图中
        //     alert(e.point.lng + "," + e.point.lat);
        //     // geoc.getLocation(pt, function(rs){
        //     //     var addComp = rs.point;
        //     //     alert("当前位置是:"+addComp.lat + ',' + addComp.lng);
        //     //     console.log(rs)
        //     // });  
        // });
        map.setMapStyleV2({     
            styleId: '12356bd447c0d1f95b240ba88570d099'
        });
    }
}
</script>

<style lang="scss">
#map {
    width: 1032px;
    height: 484px;
    box-sizing: border-box;
    background-image: url('../assets/to3.png');
    background-size: 100% 100%;
    padding: 30px 35px;
    .anchorBL {
        display: none;
    }
}
</style>
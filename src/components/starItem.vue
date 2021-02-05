<template>
    <div id="start-item">
        <div class="flex" style="align-items: center; margin-bottom: 12px">
            <div class="triangleItem">
                <div class="triangle"></div>
                <div class="triangle"></div>
                <div class="triangle"></div>
            </div>
            <span class="echart-title">本月优秀之星</span>
        </div>
        <div
            v-for="(item, index) in rankList"
            class="rankList"
            :style="{'background-color': (index%2==0 ? 'rgba(255, 255, 255, .1)' : '')}"
        >
            <span class="rankId">{{ item.id }}</span>
            <span
                class="rankStar"
                style="background-color: #f2b354"
                v-if="item.star == 5"
            >{{ item.star }}星</span>
            <span
                class="rankStar"
                style="background-color: #66baf8"
                v-if="item.star == 4"
            >{{ item.star }}星</span>
            <span
                class="rankStar"
                style="background-color: #87fbc4"
                v-if="item.star == 3"
            >{{ item.star }}星</span>
            <span class="rankName">{{ item.name }}</span>
            <span class="rankLoc">{{ item.location }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartItem',
    data() {
        return {
            rankList: [
                {
                    id: 1,
                    star: 5,
                    name: '南宫煌',
                    location: '3号厕所'
                },
                {
                    id: 2,
                    star: 5,
                    name: '雷元戈',
                    location: '8号厕所'
                },
                {
                    id: 3,
                    star: 4,
                    name: '星璇',
                    location: '9号厕所'
                },
                {
                    id: 4,
                    star: 3,
                    name: '离宫',
                    location: '3号厕所'
                },
                {
                    id: 5,
                    star: 5,
                    name: '南宫煌',
                    location: '3号厕所'
                },
                {
                    id: 6,
                    star: 5,
                    name: '雷元戈',
                    location: '8号厕所'
                },
                {
                    id: 7,
                    star: 4,
                    name: '星璇',
                    location: '9号厕所'
                },
                {
                    id: 8,
                    star: 3,
                    name: '离宫',
                    location: '3号厕所'
                },
                {
                    id: 9,
                    star: 4,
                    name: '星璇',
                    location: '9号厕所'
                },
                {
                    id: 10,
                    star: 3,
                    name: '离宫',
                    location: '3号厕所'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
#start-item {
    width: 420px;
    height: 484px;
    background-image: url('../assets/to5.png');
    background-repeat: no-repeat;
    .rankList {
        color: #fff;
        padding: 9px 21px 6px 21px;
        margin: 5px 0;
        .rankId {
            color: #6CC4FC;
            margin-right: 26px;
            width: 20px;
            display: inline-block;
            text-align: center;
        }
        .rankStar {
            color: #362E41;
            padding: 5px 15px;
            border-radius: 2px;
            margin-right: 53px;
        }
        .rankName {
            display: inline-block;
            width: 50px;
            text-align: center;
        }
        .rankLoc {
            float: right;
        }
    }
}
</style>
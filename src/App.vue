<template>
    <div id="app">
        <router-link to='/manager'>智慧厕所管理平台</router-link>
        <router-link to='/center'>智慧厕所调度指挥中心</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
#app {
    font-family: '黑体';
    background: #000034;
    min-width: 1840px;
    >a {
        color: #fff;
    }
}
</style>

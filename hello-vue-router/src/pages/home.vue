<template>
    <div id="home">
        <h1>首页</h1>
        <vue-seamless :data="listData" :class-option="classOption" class="warp">
            <ul class="item">
                <li v-for="item in listData"><span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
                </li>
            </ul>
        </vue-seamless>
    </div>
</template>
<script>
import vueSeamless from 'vue-seamless-scroll'
export default {
    name: 'home',
    components: { vueSeamless },
    data() {
        return {
            listData: [
                {
                    title: '无缝滚动第一行无缝滚动第一行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第二行无缝滚动第二行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第三行无缝滚动第三行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第四行无缝滚动第四行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第五行无缝滚动第五行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第六行无缝滚动第六行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第七行无缝滚动第七行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第八行无缝滚动第八行',
                    date: '2017-12-16'
                },
                {
                    title: '无缝滚动第九行无缝滚动第九行',
                    date: '2017-12-16'
                }
            ]
        }
    },
    computed: {
        classOption: function() {
            return {
                step: 0.5,
                limitMoveNum: 5,
                openTouch: false,
                hoverStop: false
            }
        }
    },
    methods: {},

    created() {}
}
</script>
<style scoped>
.warp {
    height: 260px;
    width: 360px;
    overflow: hidden;
}
.warp ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
}
.warp li {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
}
</style>
<template>
    <div class="container">
        <mt-navbar v-model="selected" class="navbar" >
            <mt-tab-item v-for="(title, index) in titles" :id="index">{{title}}</mt-tab-item>
        </mt-navbar>

        <div>
            <mt-swipe :auto="4000" @change="swipeChange" class="banner">
                <mt-swipe-item>picture1</mt-swipe-item>
                <mt-swipe-item>picture2</mt-swipe-item>
                <mt-swipe-item>picture3</mt-swipe-item>
            </mt-swipe>
        </div>

        <mt-tab-container v-model="selected" class="tab-container">
            <mt-tab-container-item v-for="(title, index) in titles" :id="index">
                <mt-cell v-for="n in 10" :title="title" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>



export default {
    data () {
        return {
            titles: ['时下流行', '歌单','排行榜','热门歌手'],
            selected:"0",
        }
    },

    methods: {
        loadData: function () {
            let s = new Promise((resolve, reject) => {
                this.$http.get('', {id:'22003'}).then((res) => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
            });
        },

        navbarClick: function (params) {
            console.log('navbarClick' + params);

        },

        swipeChange: function () {
            console.log('swipeChange');
        }
    },
    mounted () {
        this.loadData();
    }
}
</script>

<style scoped>
.container{
    
}

.navbar {
    /* border: solid 1px; */
}

.tab-container {
    border: solid 1px;
    height: 50rem;
}
.banner {
    border: solid 1px;
    height: 10rem;
}
</style>

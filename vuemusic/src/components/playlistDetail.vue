<template>
    <div class="container">
        <div class="creator-info">
            <img class="postimg" src="creator.backgroundUrl"></img>
            <div class="creator-right">
                <p class="playlist-title">{{playlistTitle}}</p>
                <div class="creator-baseinfo">
                    <img class="avatar" v-bind:src="creator.avatarUrl"></img>
                    <span class="name">{{creator.nickname}}</span>
                </div>
                <span class="desc">{{desc}}</span>
            </div>
        </div>
        <div class="list">
            <div class="item" v-for="n in 10">
                <span>{{n}}</span>
                <div class="item-content">
                    <p class="item-content-title">曾经的你</p>
                    <div class="item-content-bottom">
                        <span>独家</span>
                        <span>SQ</span>
                        <span>许巍-每一刻都是崭新的</span>
                    </div>
                </div>
                <span>play</span>
                <span>more</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name:"playlistDetail",
    data() {
        return {
            postUrl: 'https://p1.music.126.net/Tkdqni_VuKd6ZgR2mUheww==/109951162976618527.jpg',
            playlistTitle:'朴树、许巍、李建、郑钧、老狼、赵雷',
            avatarUrl:'https://p1.music.126.net/mdoUU1tvkfgmh4CgwdeSTg==/109951163253426270.jpg',
            name:'旧时里梦',
            desc:'愿你出走半生、归来仍是少年',
            playlist: [],
        }
    },
    methods: {
        
    },

    computed: {
        ...mapGetters([
            'creator',
            'tracks',
        ])
    },

    created () {
        console.log('playlistdetail created');
        this.$store.dispatch('getPlaylistDetail', '374755836');
    }
}
</script>

<style scoped>
.creator-info {
    display: flex;
    align-items: center;
    border: solid 1px;
}

.postimg {
    margin: 1rem;
    width: 6rem;
    height: 6rem;
}

.creator-right {
    border: solid 1px;
    margin: 1rem;
}

.playlist-title {
    text-align: left;
}

.creator-baseinfo {
    display: flex;
    align-items: center;
}

.avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}

.name {

}

.desc {

}

.item {
    border: solid 1px;
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0.5rem 0;
}

.item-content {
    border: solid 1px;
    flex: 1;
}

.item-content-title {
    border: solid 1px;
    text-align: left;
    margin: 0px;
}

.item-content-bottom {
    display: flex;
}

</style>
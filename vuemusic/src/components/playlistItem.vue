<template>
    <div class="item">
        <img class="postimg"></img>
        <div class="title">{{title}}</div>
        <div class="topview">
            <p class="playnum">{{playNum}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"playlistItem",
    data() {
        return {
            img:'img',
            title:'title',
            playNum:'12000',
        }
    },
}
</script>

<style scoped>
.item {
    border: solid 1px;
}

.postimg {
    border: solid 1px;
    width: 100%;
    /* height: 10rem; */
    background-color: lightgray;
}

.title {
    border: solid 1px;
    font-size: 1rem;
    color: black;
}

.topview {
    border: solid 1px;
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 1.5rem;
    background-color: rgba(0, 0, 0, 0.5);
}

.playnum {
    border: solid 1px;
    position: relative;
    text-align: right;
    color: white;
    font-size: 1rem;
}
</style>
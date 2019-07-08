import playlistDetail from './playlistDetail'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        playlistDetail,
    }
})

export default store;
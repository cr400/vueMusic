import api from '../api'

const state = {
    creator: {},
    tracks: [],
    loading: Boolean,
}

const mutations = {
    updatePlaylistDetail(state, playlistDetail){
        state.creator = playlistDetail.playlist.creator;
        state.tracks = playlistDetail.playlist.tracks;
        state.loading = false;
        console.log('creator' + JSON.stringify(state.creator));
        console.log('tracks' + state.tracks);
    }
}

const actions = {
    getPlaylistDetail({commit, state}, playlistID){
        api.get("",{"type":"playlist","id":playlistID}).then(response => {
            console.log('getPlaylistDetail' + response);
            commit('updatePlaylistDetail', response);
        })
    }
}

export default {
    state,
    mutations,
    actions,
}
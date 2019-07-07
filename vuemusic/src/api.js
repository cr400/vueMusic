import axios from 'axios'
import qs from 'qs'

//open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/zlgweihao/Documents/MyChromeDevUserData

//是否允许跨越
axios.defaults.withCredentials = true;

//axios初始化：延迟时间，主路由地址
let instance = axios.create({
    baseURL: 'https://api.imjad.cn/cloudmusic/',
    timeout:1000,
});

instance.interceptors.request.use((config) => {
    //在发送请求之前做某事
    console.log('发送请求' + config);
    return config;
}, (error) => {
    console.log('错误的传参' + error);
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    //对响应数据做些事
    console.log('响应数据' + response);
    return response;
}, (error) => {
    //请求错误时做些事
    console.log('请求错误' + error);
    return Promise.reject(error);
});

// 请求成功的回调
function checkStatus(res) {
    //请求结束成功
    if(res.status === 200 || res.status === 304){
        return res.data;
    }
    return {
        code: 0,
        msg: res.data.msg || res.statusText,
        data: res.statusText,
    }
    return res;
}

// 请求失败的回调
function checkCode(res) {
    if(res.code === 0){
        throw new Error(res.msg);
    }
    return res;
}

export default {
    get(url, params = {}) {
        // if(!url) return;
        if(!url){
            console.log('url 为空');
        }
        
        return instance({
            method:'get',
            url:url,
            timeout: 30000,
            params,
        }).then(checkStatus).then(checkCode)
    },

    post(url, data = {}) {
        // if(!url) return;
        if(!url){
            console.log('url 为空');
        }

        return instance({
            method:'post',
            url: url,
            timeout:30000,
            data: qs.stringify(data),
        }).then(checkStatus).then(checkCode)
    }
}


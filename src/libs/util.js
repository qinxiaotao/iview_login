import axios from 'axios';
let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView  login project';
    window.document.title = title;
};

const ajaxUrl = 'https://127.0.0.1/';

axios.defaults.withCredentials = true; //为类设置默认值
axios.defaults.xsrfHeaderName = "X-CSRFToken";  //请求的时候携带csrfTOken Cross Site Request Forgery
axios.defaults.xsrfCookieName = 'csrftoken'; //服务器端返回的csrftoken名称,可自动取得此值
util.http = axios.create({
    baseURL: ajaxUrl,
    timeout: 1000,
}); //创建实例的默认值


//配置全局默认axios配置

export default util;
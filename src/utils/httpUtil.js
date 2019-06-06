import Axios from 'axios';
import AuthUtil from '../utils/authUtil.js'
import MessageUtil from '../utils/messageUtil.js'
import Config from '../app/config'
import DataUtils from "./dataUtil";

let CancelToken = Axios.CancelToken,
    cancel;

let getAxiosInstance = (useLocalStub) => {
    let config = {
            baseURL: `${!useLocalStub ? Config.baseApiUrl : `${window.location.origin}/data`}/`,
            timeout: 900000, //todo: 30000ms check
            headers: {
                'Accept': 'application/json'
            },
            withCredentials: true,
            validateStatus: function (status) {
                return (status >= 200 && status < 400);
            },
            cancelToken: new CancelToken((c) => {
                cancel = c;
            })
        };

    let axios = Axios.create(config);

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {

        //check for session expiry
        if(error && error.status === 406){
            AuthUtil.clear();
        } else if (error && error.response && error.response.status === 401) {
            DataUtils.cookieMethods.remove('auth-token');
            DataUtils.cookieMethods.remove('selectedPartnerSiteId');

            AuthUtil.redirectToSso(window.location.origin+window.location.pathname);
        }
        return Promise.reject(error);
    });

    return axios;
};

let makeRequest = (url, type, data, callback, useLocalStub) => {

    let reqObj;

    if(type === "GET"){
        reqObj = getAxiosInstance(useLocalStub).get(url, {params: data});
    }

    if(type === "POST"){
        reqObj = getAxiosInstance(useLocalStub).post(url, data);
    }

    reqObj.then((response) => {
        if(response && response.data && response.data.success){
            callback({
                data: response.data.data,
                message: response.data.message
            }, null);
        } else if(response && response.data){
            callback(null, {
                message: response.data.message || MessageUtil.getErrorMsg()
            });
        } else {
            callback(null, {
                message: MessageUtil.getErrorMsg()
            });
        }
    }).catch((error) => {
        if(error.__CANCEL__) {
            console.log('Request cancelled');
        } else {
            let errorCode = (error.response && error.response.status) || error.code;
            callback(null, {
                message: MessageUtil.getErrorMsg(errorCode),
                error: error,
                errorCode: errorCode
            });
        }
    });
};

let httpUtil = {
    request: getAxiosInstance,
    get: (url, data, callback, useLocalStub) => {
        makeRequest(url, "GET", data, callback, useLocalStub);
        return cancel;
    },
    post: (url, data, callback, useLocalStub) => {
        makeRequest(url, "POST", data, callback, useLocalStub);
        return cancel;
    }
};

export default httpUtil;
import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import request from './utils/request';

moment.locale('zh-cn');
let env = 'prod';
// let env = 'dev';

let API_URL = 'https://wework2018apis-dev.azure-api.cn/';
if (env === 'prod') {
  API_URL = 'https://wework2018apis.azure-api.cn/';
}

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Ocp-Apim-Trace'] = true;
axios.defaults.headers.post['X-Client'] = 'WEB';
axios.defaults.baseURL = API_URL;

// console.log('======== axios.create ========= ', axios());
// const instance = axios.create({
//   baseUrl: API_URL,
//   timeout: 10000,
//   headers: {
//     'Ocp-Apim-Trace': true,
//     'Content-type': 'application/x-www-form-urlencoded',
//   },
// });
// console.log('======== axios.create ========= ', axios());

export default {
  API_URL,
  _,
  moment,
  axios,
  request,
};

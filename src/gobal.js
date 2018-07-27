import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import request from './utils/request';

moment.locale('zh-cn');
let env = 'api';
// let env = 'dev';
// let env = 'prod';

let API_URL = '/api';
if (env === 'prod') {
  API_URL = 'https://wework2018apis.azure-api.cn/';
} else if (env === 'dev') {
  API_URL = 'https://wework2018apis-dev.azure-api.cn/';
}

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Ocp-Apim-Trace'] = true;
axios.defaults.headers.post['X-Client'] = 'WEB';
axios.defaults.baseURL = API_URL;

export default {
  API_URL,
  _,
  moment,
  axios,
  request,
};

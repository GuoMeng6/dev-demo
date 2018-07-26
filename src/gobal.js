import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import { Component } from 'react';
import { connect } from 'dva';

moment.locale('zh-cn');
// let env = 'prod';
let env = 'dev';

let API_URL = '';
if (env === 'prod') {
  API_URL = '';
}

export default {
  moment,
  axios,
  _,
  Component,
  connect,
  API_URL,
};

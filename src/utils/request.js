import axios from 'axios';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} method
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] header,body,params,
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(methods, url, options = {}) {
  return axios({
    methods,
    url,
    // headers: {
    //   'Ocp-Apim-Trace': true,
    //   'Content-type': 'application/x-www-form-urlencoded',
    // },
    ...options,
  })
    .then(checkStatus)
    .then(res => {
      return res.data;
    })
    .catch(err => ({ err }));
}

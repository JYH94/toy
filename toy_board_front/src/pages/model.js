export const BASE_URL = 'http://localhost:8080';
import axios from 'axios';


export async function api(url, method, requestData) {

    let headers = '';

    if (url.indexOf('multipart') >= 0) {
        headers = { 'Content-Type': 'multipart/form-data' };
    } else {
        headers = { 'Content-Type': 'application/json' };
    }

    let options = {
        url: BASE_URL + url,
        method: method,
        headers: headers,
    };

    console.log('api - url : ' + options.url)
    console.log('api - data : ')
    console.log(requestData)

    if (requestData) {
        options.data = requestData;
    }
    return axios(options)
        .then(response => {
            return response;
        }).catch(err => {
            return Promise.reject(err);
        });
}

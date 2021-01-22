import axios from 'axios'

export const SERVICE_BASE_URL = "http://18.185.110.209:3001/"
// export const SERVICE_BASE_URL = "http://localhost:3001/"

export const HTTP = axios.create({ baseURL: SERVICE_BASE_URL , headers: {'content-type': 'application/json'}})
export const EXTERNAL = axios.create()

function successHandler(response) {
    if (response.data != null) {
        return {
            data: response.data,
            message: response.error,
            meta: response.meta,
            status: response.status
        }
    } else {
        return Promise.reject(false)
    }
}

function errorHandler(error) {
    if (error.response !== undefined) {
        return Promise.reject(false)
    }
}

HTTP.interceptors.request.use(config => config);
HTTP.interceptors.response.use(response => successHandler(response), error => errorHandler(error));
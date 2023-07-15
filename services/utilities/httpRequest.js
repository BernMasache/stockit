import axios from "axios"

export default class HttpRequest {

    get = async (url) => {
        const response = await axios.get(url)
        return response
    }
    getByParam = async (url, param) => {
        const response = await axios.get(url + param)
        return response
    }
    create = async (url, body, header) => {
        const response = await axios.post(url, body, header)
        return response
    }
    update = async (url, body, header) => {
        const response = await axios.patch(url, body, header)
        return response
    }

    delete = async (url, param) => {
        const response = await axios.get(url + "/" + param)
        return response
    }
}
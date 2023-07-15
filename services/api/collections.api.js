import HttpRequest from "../utilities/httpRequest"
const URL = process.env.NEXT_PUBLIC_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN
const httpRequest = new HttpRequest()
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
}

export default class UseCollectionService {

    getCollectionsConfigurations = async () => {
        const configurations = await httpRequest.get(URL + "?sheet=configurations", {
            headers
        })
        return configurations
    }

    getCollections = async () => {
        const collections = await httpRequest.get(URL + "?sheet=collections", {
            headers
        })
        return collections
    }

    createCollection = async (body) => {
        body.id = "INCREMENT"
        body.createdAt = "DATETIME"
        body.lastUpdated = "DATETIME"

        const result = await httpRequest.create(URL + "?sheet=collections", JSON.stringify({
            data: [
                body
            ]
        }), {
            headers
        })
        return result
    }
}
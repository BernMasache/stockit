import HttpRequest from "../utilities/httpRequest"
const url = "https://sheetdb.io/api/v1/wlmuwtzjdg404"
const collectionsUrl = "https://sheetdb.io/api/v1/wlmuwtzjdg404"
const TOKEN = process.env.NEXT_PUBLIC_TOKEN
const httpRequest = new HttpRequest()
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
}

export default class UseCollectionService {

    getCollectionsConfigurations = async () => {
        const configurations = await httpRequest.get(url + "?sheet=configurations", {
            headers
        })
        return configurations
    }

    getCollections = async () => {
        const collections = await httpRequest.get(url + "?sheet=collections", {
            headers
        })
        return collections
    }

    createCollection = async (body) => {
        body.id = "INCREMENT"
        body.createdAt = "DATETIME"
        body.lastUpdated = "DATETIME"

        const result = await httpRequest.create(url + "?sheet=collections", JSON.stringify({
            data: [
                body
            ]
        }), {
            headers
        })
        return result
    }
}
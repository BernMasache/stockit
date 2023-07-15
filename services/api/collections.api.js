import HttpRequest from "../utilities/httpRequest"
const url = "https://sheetdb.io/api/v1/wlmuwtzjdg404"
const collectionsUrl = "https://sheetdb.io/api/v1/wlmuwtzjdg404"

const httpRequest = new HttpRequest()
const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},)
export default class UseCollectionService {
    getCollectionsConfigurations = async () => {
        const configurations = await httpRequest.get(url + "?sheet=configurations")
        return configurations
    }

    getCollections = async () => {
        const collections = await httpRequest.get(url + "?sheet=collections")
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
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        return result
    }
}
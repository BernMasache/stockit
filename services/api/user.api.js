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
    login = async (data) => {
        const user = await httpRequest.get(url + `{${data.username}&${data.password}}`, { headers })
        return user
    }
}
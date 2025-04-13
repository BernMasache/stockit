import HttpRequest from "../utilities/httpRequest";
// const URL = process.env.NEXT_PUBLIC_URL;
// const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
const httpRequest = new HttpRequest();
import cookie from "js-cookie";

const URL = cookie.get("url") && JSON.parse(cookie.get("url"))?.url;
const TOKEN = cookie.get("token") && JSON.parse(cookie.get("token"))?.token;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

const UseCollectionService = {
  apiURL: cookie.get("url") && JSON.parse(cookie.get("url")).url,
  getCollectionsConfigurations: async () => {
    const configurations = await httpRequest.get(
      URL + "?sheet=configurations",
      {
        headers,
      }
    );
    return configurations;
  },

  getCollections: async () => {
    const collections = await httpRequest.get(URL + "?sheet=collections", {
      headers,
    });
    return collections;
  },

  createCollection: async (body) => {
    body.id = "INCREMENT";
    body.createdAt = "DATETIME";
    body.lastUpdated = "DATETIME";

    const result = await httpRequest.create(
      URL + "?sheet=collections",
      JSON.stringify({
        data: [body],
      }),
      {
        headers,
      }
    );
    return result;
  },

  createDailyCollection: async (body) => {
    let dataStore = [];
    for (let index = 0; index < body.length; index++) {
      const element = body[index];
      element.id = "INCREMENT";
      element.createdAt = "DATETIME";
      element.lastUpdated = "DATETIME";
      dataStore.push(element);
    }
    const result = await httpRequest.create(
      URL,
      JSON.stringify({
        data: dataStore,
      }),
      {
        headers,
      }
    );
    return result;
  },
  getDailyCollections: async () => {
    const collections = await httpRequest.get(URL + "?sheet=shop", {
      headers,
    });
    return collections;
  },
  updateCollection: async (body) => {
    body.lastUpdated = "DATETIME";

    const result = await httpRequest.update(
      URL + "?sheet=collections",
      JSON.stringify({
        body: JSON.stringify({
          data: body,
        }),
      }),
      {
        headers,
      }
    );
    return result;
  },

  deleteCollection: async (id) => {
    const result = await httpRequest.delete(URL, id + "?sheet=collections", {
      headers,
    });
    return result;
  },
  deleteDailyCollection: async (id) => {
    const result = await httpRequest.delete(URL, id + "?sheet=shop", {
      headers,
    });
    return result;
  },
};
export default UseCollectionService;

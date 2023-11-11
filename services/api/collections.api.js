import HttpRequest from "../utilities/httpRequest";
const URL = process.env.NEXT_PUBLIC_URL;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
const httpRequest = new HttpRequest();
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

export default class UseCollectionService {
  getCollectionsConfigurations = async () => {
    const configurations = await httpRequest.get(
      URL + "?sheet=configurations",
      {
        headers,
      }
    );
    return configurations;
  };

  getCollections = async () => {
    const collections = await httpRequest.get(URL + "?sheet=collections", {
      headers,
    });
    return collections;
  };

  createCollection = async (body) => {
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
  };

  createDailyCollection = async (body) => {
    let dataStore = [];
    for (let index = 0; index < body.length; index++) {
      const element = body[index];
      element.id = "INCREMENT";
      element.createdAt = "DATETIME";
      element.lastUpdated = "DATETIME";
      dataStore.push(element);
    }
    const result = await httpRequest.create(
      URL + "?sheet=shop",
      JSON.stringify({
        data: dataStore,
      }),
      {
        headers,
      }
    );
    return result;
  };
  getDailyCollections = async () => {
    const collections = await httpRequest.get(URL + "?sheet=shop", {
      headers,
    });
    return collections;
  };
  updateCollection = async (body) => {
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
  };

  deleteCollection = async (id) => {
    const result = await httpRequest.delete(URL, id + "?sheet=collections", {
      headers,
    });
    return result;
  };
}

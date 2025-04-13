import UseCollectionService from "../api/collections.api";

export default class UseCollectionStore {
  getCollectionConfigurations = async () => {
    const configurations =
      await UseCollectionService.getCollectionsConfigurations();
    return configurations;
  };
  getCollections = async () => {
    const collections = await UseCollectionService.getCollections();
    return collections;
  };
  create = async (data) => {
    const response = await UseCollectionService.createCollection(data);
    return response;
  };

  createDailyCollection = async (data) => {
    const response = await UseCollectionService.createDailyCollection(data);
    return response;
  };
  getDailyCollections = async () => {
    const collections = await UseCollectionService.getDailyCollections();
    return collections;
  };
  update = async (data) => {
    const response = await UseCollectionService.updateCollection(data);
    return response;
  };
  delete = async (id) => {
    const response = await UseCollectionService.deleteCollection(id);
    return response;
  };
  deleteDailyCollection = async (id) => {
    const response = await UseCollectionService.deleteDailyCollection(id);
    return response;
  };
}

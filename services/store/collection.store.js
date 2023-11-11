import UseCollectionService from "../api/collections.api";

const useCollectionService = new UseCollectionService();

export default class UseCollectionStore {
  getCollectionConfigurations = async () => {
    const configurations =
      await useCollectionService.getCollectionsConfigurations();
    return configurations;
  };
  getCollections = async () => {
    const collections = await useCollectionService.getCollections();
    return collections;
  };
  create = async (data) => {
    const response = await useCollectionService.createCollection(data);
    return response;
  };

  createDailyCollection = async (data) => {
    const response = await useCollectionService.createDailyCollection(data);
    return response;
  };
  getDailyCollections = async () => {
    const collections = await useCollectionService.getDailyCollections();
    return collections;
  };
  update = async (data) => {
    const response = await useCollectionService.updateCollection(data);
    return response;
  };
  delete = async (id) => {
    const response = await useCollectionService.deleteCollection(id);
    return response;
  };
}

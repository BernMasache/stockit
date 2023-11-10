let sessionStorageController = {
  save: (id, data) => {
    let key = sessionStorage.key(id);
    if (key == null) {
      sessionStorage.setItem(id, JSON.stringify([data]));
      return {
        message: "Created",
      };
    } else {
      let values = JSON.parse(sessionStorage.getItem(id));
      values.push(data);
      sessionStorage.setItem(id, JSON.stringify(values));
      return {
        message: "Added to list",
      };
    }
  },
};

export default sessionStorageController;

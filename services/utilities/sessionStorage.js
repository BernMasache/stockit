let sessionStorage = {
  save: () => {
    let key = sessionStorage.key("STKV");
    console.log(key);
    if (key == null) {
      console.log("key null");
    } else {
      console.log("key available");
    }
  },
};

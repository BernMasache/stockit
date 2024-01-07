const dashboardControl = {
  categories: [
    { name: "January", id: "01" },
    { name: "February", id: "o2" },
    { name: "March", id: "03" },
    { name: "April", id: "04" },
    { name: "May", id: "05" },
    { name: "June", id: "06" },
    { name: "July", id: "07" },
    { name: "August", id: "08" },
    { name: "September", id: "09" },
    { name: "October", id: "10" },
    { name: "November", id: "11" },
    { name: "December", id: "12" },
  ],
  series: (serie) => {
    let keys = serie && Object.keys(serie);

    let values = [];
    let newContainer = [];
    for (let index = 0; index < keys?.length; index++) {
      let total = 0;
      const element = serie[keys[index]];

      for (let y = 0; y < element?.length; y++) {
        const value = element[y];
        total = total + parseInt(value?.collection);
      }
      values?.push({
        x: keys[index],
        y: total,
      });
    }
    [
      { name: "January", id: "01" },
      { name: "February", id: "o2" },
      { name: "March", id: "03" },
      { name: "April", id: "04" },
      { name: "May", id: "05" },
      { name: "June", id: "06" },
      { name: "July", id: "07" },
      { name: "August", id: "08" },
      { name: "September", id: "09" },
      { name: "October", id: "10" },
      { name: "November", id: "11" },
      { name: "December", id: "12" },
    ]?.map((month, k) => {
      let df = values?.filter((ss) => ss?.x?.split("-")[1] == month?.id);
      if (df?.length == 0) {
        newContainer.push({
          x: keys && keys[0]?.split("-")[0] + month?.id,
          y: 0,
        });
      } else {
        newContainer.push(df[0]);
      }
    });
    return newContainer;
  },

  averageSeriesData: (serie) => {
    let keys = serie && Object.keys(serie);

    let values = [];
    let newContainer = [];
    for (let index = 0; index < keys.length; index++) {
      let total = 0;
      const element = serie && serie[keys[index]];

      for (let y = 0; y < element?.length; y++) {
        const value = element[y];
        total = total + parseInt(value?.collection);
      }
      values?.push({
        x: keys[index],
        y: Math.round(total / element?.length, 2),
      });
    }
    [
      { name: "January", id: "01" },
      { name: "February", id: "o2" },
      { name: "March", id: "03" },
      { name: "April", id: "04" },
      { name: "May", id: "05" },
      { name: "June", id: "06" },
      { name: "July", id: "07" },
      { name: "August", id: "08" },
      { name: "September", id: "09" },
      { name: "October", id: "10" },
      { name: "November", id: "11" },
      { name: "December", id: "12" },
    ]?.map((month, k) => {
      let df = values?.filter((ss) => ss?.x?.split("-")[1] == month?.id);

      if (df?.length == 0) {
        newContainer?.push({ x: keys[0]?.split("-")[0] + month?.id, y: 0 });
      } else {
        newContainer?.push(df[0]);
      }
    });

    return newContainer;
  },
};
export default dashboardControl;

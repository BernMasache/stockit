export default class UseDataCalculation {
  totalRent = (montlyAmount, numberOfDays) => {
    const total = montlyAmount * numberOfDays;
    return total;
  };

  share = (amount, shared, rentTotal, expenses) => {
    if (expenses == undefined) {
      const shareGryton = amount - shared - rentTotal;
      return shareGryton;
    } else {
      const shareGryton = amount - shared - rentTotal - expenses;
      return shareGryton;
    }
  };
  monthlyTotal = (data) => {
    let list = [];
    let categories = [
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
    ];
    console.log(data);
    console.log(list);
    // return list;
  };
}

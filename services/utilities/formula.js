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
}

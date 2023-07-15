export default class UseDataCalculation {

    totalRent = (montlyAmount, numberOfDays) => {
        const total = (montlyAmount * numberOfDays)
        return total
    }

    share = (amount, shared, rentTotal) => {
        const shareGryton = amount - shared - rentTotal
        return shareGryton
    }

}
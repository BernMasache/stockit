export default class UseDataCalculation {

    totalRent = (montlyAmount, numberOfDays) => {
        const total = (montlyAmount * numberOfDays)
        return total
    }

    share = (amount, shared, rentTotal, other) => {
        const shareGryton = amount - shared - rentTotal - other
        return shareGryton
    }

}
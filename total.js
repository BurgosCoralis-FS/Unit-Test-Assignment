const total = (array) => {
    let total = 0
    for(let index in array){
        total += array[index]
    }
    return total
}

const obscure = (creditCardNumber) => {
    if (creditCardNumber.length < 12 || creditCardNumber.length > 16){
        return "Invalid credit card number."
    }
    return 'X'.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4)
}

module.exports = {
    total,
    obscure,
}
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = Number(((oneEuroIs.USD * oneEuroIs.JPY)/valueInDollar).toFixed(1));
    return valueInYen

}

const fromYenToPound = function(valueInYen){
    let valueInPound = (oneEuroIs.JPY * oneEuroIs.GBP)/valueInYen
    return valueInPound 
}
    
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
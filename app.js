const fromEuroToDollar = function(valueInEuro)  {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
// Esta es mi función fromDollarToYen para saber cuantos dolares son en Yen
const fromDollarToYen = function(valueInDollar)  {
    let  valeuInYen = valueInDollar * 1.07 * 156.5;
    return valeuInYen;
}
// Esta es mi función fromYenToPound para saber cuantos Yen son Pound
const fromYenToPound = function(valeuInYen)  {
    let valueInPound = valeuInYen * 1.07 * 156.5 * 0.87;
    return valueInPound;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};
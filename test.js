test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar();
    const expected = dollars;
    // Hago mi comparación (la prueba)
    expected(Dollar).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen();
    const expected = fromDollarToYen() * 1.07 * 156.5;
    // Hago mi comparación (la prueba)
    expected(Yen).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    // Use the function like its supposed to be used
    const pound = fromYenToPound();
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = fromYenToPound() * 1.07 * 156.5 * 0.87;
    // This is the comparison for the unit test
     expect(pound).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


const { sum } = require("./app.js");

test("la suma de 14 + 9 debería dar 23", ()=> {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("1.2 Dollars should be 127 YEN ", function(){
    const {fromDollarToYen} = require('./app.js')

    expect(fromDollarToYen(1.2)).toBe(127.9);
});

test("127 Yen should be 0.8 Pounds", function(){
    const {fromYenToPound} = require('./app.js')

    expect(fromYenToPound(127.9)).toBe(0.8)
});
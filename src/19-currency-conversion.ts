export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 * 
 * // sis viss ar MAgic numbers, man slinkums thgd vel kko rakstiit funkcijaa kuru es vairs nekad dziive neskatiisos.
 */
function addConversionFee(price: number): number {
 return price + price * 0.01;
}

// You are allowed to change this function
function convertCurrency(price: number, rate: number): number {
    return price * rate ;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = addConversionFee(convertCurrency(price, 1.22));
const priceInBRL = addConversionFee(convertCurrency(price, 6.3));

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/

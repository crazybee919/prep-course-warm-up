export {};

/**
 * Write function first5 which returns first five elements from the array
 */
let numbersNew:number[];
function first5(num:number[]){
   numbersNew = num.slice(0,5)
return numbersNew
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // You are NOT allowed to edit this line
const first5Numbers = first5(numbers); // You are NOT allowed to edit this line

console.log(first5Numbers); // Expected result: [1, 2, 3, 4, 5]

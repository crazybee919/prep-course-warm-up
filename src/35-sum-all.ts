export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */
let sum:number = 0
let arr:number[] = [];
const sumAll = function(first:number,second:number) {
for(let i = 0; i<second +1;i++){
    sum = sum + i
}
return sum
}

console.log(sumAll(1, 4)); // Expected output: 10

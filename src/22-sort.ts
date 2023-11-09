export {};

const nums = [1, 30, 4, 21, 100000];
let sortedLetters = nums.sort(function(a,b){
    return b - a;
})

console.log(sortedLetters); // Expected output: [ 100000, 30, 21, 4, 1 ]
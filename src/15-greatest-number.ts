export {};

function greatest(...numbers:number[]):number {
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(greatest(1, 2, 7, 20, 4)); // Expected output: 2
console.log(greatest(5, 2, 3, 6, 18)); // Expected output: 5

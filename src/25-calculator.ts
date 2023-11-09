export {};

function add(a:number, b:number) {
    return a+b;
}

function subtract(a:number, b:number) {

return a-b;
}

function sum(matrica:number[]) {
    let summa = 0;
    for (let i = 0; i<3; i++){
     summa = summa + matrica[i];
     
    }
 return summa
}

function multiply(a:number[]) {
    var sum = 1;
    for(let i = 0; i< a.length; i++){
    
    sum = sum * a[i]
 }
return sum
}

function power(a:number, b:number) {
return a ** b;

}
console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8

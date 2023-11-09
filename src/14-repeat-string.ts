export {};

//const repeatString = () => {};
function repeatString(str:string,number:number):string{

    return str.repeat(number);

}


console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'

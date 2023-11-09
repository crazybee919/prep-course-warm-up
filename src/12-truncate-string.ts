export {};

function truncateString(word:string,number:number):string{

    return word.substring(0, number)

}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE

import { isEmptyBindingElement } from "typescript";

export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */


function isBlank(value:string | null){
if (value === null) {
    return true;
}
if (value.trim().length === 0){
    return true;
}
return false;
}


console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

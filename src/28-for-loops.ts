export {};

/**
 * Psst! Want a hint? Try using a for loop for this exercise.
 * If you need some more theory first, here are a few resources that will definitely help:
 *  - https://www.w3schools.com/js/js_loop_for.asp
 *  - https://javascript.info/while-for#the-for-loop
 *  - https://www.youtube.com/watch?v=wxds6MAtUQ0 (Intro to Programming: Loops)
 *  - https://www.youtube.com/watch?v=Kn06785pkJg (JavaScript Loops Made Easy)
*/

function goThroughNumbers(start:number, end:number) {
    // ja start lielaks par end tad error
    if(start>end){
        throw('invalid input')
    }
    // uzstaisiju arrayus
    const arr = [];
    for (let i = start-1; i < end; i++) {
      arr[i] = i + 1;
    }
    // izfiltresu ara tuksas vietas array
const newArr = arr.filter((a) => a);
    //console.log(arr)
   // console.log(newArr)
// japarbauda vai katrs array skaitlis dalaas ar 2                       ||| kkas te nav lidz galam     ...........................
for( let i = 0 ; i < newArr.length; i++){
   // console.log(newArr[i])
if((newArr[i]%2) === 0){
    console.log("even")
}else
console.log("odd")
}

}

goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'

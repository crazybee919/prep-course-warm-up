export {};
// pirmais no kurines dzeesis un otrais cik daudz dzeesis
const targetWord = "Ace";
function onlyTheAces(arr: string[]) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== targetWord){
            arr.splice(i,1) ;
        }
    }
    return arr
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace",])); // Expected result: ['Ace', 'Ace']

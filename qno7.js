// Question no 7: Remove all duplicates from an array without built-in methods.

function removeDublicates(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDublicates([1,2,3,4,3,2,1,3,44,4,5,2]));
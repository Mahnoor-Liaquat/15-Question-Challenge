// Question no 6: Find the index of the first occurrence of a specific element in an array.
function findIndex(arr,element){
for(let i = 0; i < arr.length; i++){
    if(arr[i]===element){
        return i;
        }
    }
    return -1; //if element is not found in the array
}

console.log(findIndex([1,2,3,4,5],4));
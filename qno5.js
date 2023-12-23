//  Question no 5: Find the sum of all positive numbers in an array
function sumOfPositiveNum(arr){
    let sum = 0;
    for(let i = 0; i<=arr.length; i++){
        if(arr[i]>0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOfPositiveNum ([1,2,3,-5,-6,-7]));
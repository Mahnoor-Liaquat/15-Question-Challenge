// Question no 14: Find the maximum of three numbers using nested ternary operators
function findMaximum(a,b,c){
    const max = (a > b ? (a > c ? a : c): (b > c ? b : c));
    return max;
}
console.log(findMaximum(5,9,22));


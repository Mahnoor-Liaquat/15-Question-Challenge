// Question no 10: Calculate the factorial of a number using a do-while loop.
function calFactorial(number){
let factorial = 1;
let i = 1;
do{
    factorial *=i;
    i++;
} while(i <= number);
    return factorial;
}

const num = 5;
const result = calFactorial(num);
console.log(`The factorial of ${num} is ${result}`);
// Question no 1: Reverse a string without using the built-in reverse() method.

const str = "JavaScript";
function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i, str[i]);
  }
}
console.log(reverseString(str));

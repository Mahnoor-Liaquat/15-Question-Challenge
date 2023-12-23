// Question no 3: Convert the first letter of each word in a sentence to uppercase.

var fullName = "mahnoor";
var firstChar = fullName.slice(0, 1);
var otherChars = fullName.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var myName = firstChar + otherChars;

console.log("Your name is " + myName);
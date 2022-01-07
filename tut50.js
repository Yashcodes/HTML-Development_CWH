var str = "This is a string";
console.log(str);

// locate first occurence of a substring
var position = str.indexOf("is");
console.log(position);

// locate last occurence of a substring

// var position = str.lastIndexOf('is');
//  or
position = str.lastIndexOf("is");
console.log(position);

// if we have already declared one variable and is same with the previous one then we no need to declare it repeatedly

// Substring from a string

// var substr = str.slice(1,7);

// it extracts the word from the position of given initial number and ends at the position of number less than 1 from the given number. "slice" function also accepts negative values.

// var substr = str.substring(1,7);

// substring work same as the slice but it doesnot accept negative values

var substr1 = str.substr(1, 7);

// here "substr" specifies that the string will starts from the value given first and extracts the string till the value given after the first

console.log(substr1);

var replaced = str.replace("string", "yash");
// here by using the function "replace", it search the word we have given first as string and then replace it by the second word as yash
console.log(str);
console.log(replaced);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

var newstring = str.concat(", he is a helping person");
console.log(newstring);

var strwithwhitespaces =
  "       this line contains           whitespaces      ";
console.log(strwithwhitespaces);
console.log(strwithwhitespaces.trim());

// here the "trim" function is used to remove the whitespaces from the start and end except of between the String

var char3 = str.charAt(3);
console.log(char3);

// It provides the character at the given Value

var char4 = str.charCodeAt(4);
console.log(char4);

// It provides the code of the character at the given Value

console.log(str[5]); // slicing the string

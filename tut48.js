var a = 2428; // this daclaration is for integer data type
var b = "Yash"; // here the word is written inside the double quotation means that the data type is string(character data type)

var d = 2428;
var e = 2428;
c = 24;
// console.log(a)
// console.log(b)

//Operators in javascript
//Operand - Entities on which operators operate

// In 3 + 4, '+' is operator and 3,4 are operands
// 1. Unary operator - It has single operand (x = -x)

//Example of unary operator
c = -c;
// console.log(c)

// 2. Binary operator - It has two operands (x = x+6)

c = d + e;
console.log(c);

// Arithmetic operators in javascript

var num1 = 204;
var num2 = 345;

console.log("The value of num1 + num2 is " + (num1 + num2));
console.log("The value of num1 - num2 is " + (num1 - num2));
console.log("The value of num1 * num2 is " + num1 * num2);
console.log("The value of num1 / num2 is " + num1 / num2);

// Exponentiation operator

var num3 = 2;
var num4 = 5;
var r = "hello";

// here ** describes that the num4 is in exponent of num3
console.log("The value of num3 ** num4 is " + num3 ** num4);

// here we also understand the "+" operator after the double quotation as to write the next word or can say "part" and also used to combine the statement
console.log("Riya said to Diya, " + r);

// Increment operators can be used as two types

var num5 = 1;

// The method of imcrementation used here in called post-increment because it has been used after the value of variable

//  here the value which has to be printed is only num5 and here there is no change in the value due to "++" operator

// console.log("The value of num5 ++ is " + (num5++));

// since we had used "++" operator in above/previous line so it increases the value by one in the next statement which has been written below

// console.log("The value of num5 ++ is " + (num5));

// Now, we are going to implement here the method of incrementation which is called pre-increment

// In this method, the number which will print here is one more than the number declared previously because it has already been increased by one by the applicaton of pre-increment operator

// console.log("The value of ++ num5 is " + (++num5));

// As same as the increment operator, there is also a decrement operator. It ha also two types:-
// i). Post-decrement as (variable --)
// ii). Pre-decrement as (-- variable)

// The three steps defining the post and pre decrement operators are mentioned below:-

var y = 3;
// console.log("The value of y -- is "+ (y --));
// console.log("The value y -- is "+ (y));
console.log("The value of -- y is " + (--y));

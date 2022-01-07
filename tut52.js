//   PRIMITIVE DATA TYPE

let myVar = 34; //  Integer data type
let myVar2 = "String"; //  String or Character data type
let myVar3 = true; //  Boolean data type
let myVar4 = null;
let myVar5 = undefined;
console.log;

// Object stores the key-value pairs
let employee = {
  name: "Yash", // the words written in the left side are mainly called "keys""
  "student 1": "At RITEE",
  interest: "Development",
  skills: "web developer",
};
console.log(employee);

//    A R R A Y S (Array is a type of object)

// let names = [1,2,3,"yash",null,undefined];
//  OR                                  (Array can be declared as line 33 and 35).
// let names = new Array(74,12,56,43,"yash",null,undefined);

// let names = new Array(23, 28);

// in above line, array has 2 elements which are 24 and 28 but i the below line, array specifies that it has a set of 23 elements

let names = new Array(23);
console.log(names);
console.log(names.indexOf(12));
console.log(names.length);

// console.log(names.sort());
// OR                      { sort() keyword is used to sort an array in ascending order }
names = names.sort();
console.log(names);

names.push("This is pushed in the last of an array");
// by using "push" keyword, anything can be added in the last of the array

console.log(names);

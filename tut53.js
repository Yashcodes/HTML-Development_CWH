console.log("Thus is tutorial 53");

function greet(name, greetText="Greetings from JavaScript") {
    let name1 = "Komal";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c) {
    let d = a + b + c;
    return d;
    // This line will never execute because after ""return", a function doesnot allow anything to print
    // console.log("Function is returned");
}
let name = "Yash";
let name1 = "Deepak";
let name2 = "Aditya";
let name3 = "Ashish";
let greetText = "Good Morning";

// console.log(name + " is a good boy");
// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good girl");
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);


// In this line, firstly the values (1,2,3) in the sum pass through the sum(a,,b,c) in the above function and then it process it for the variable "d" and then after calculation, it return the value of "d" which get stored in the in variable "returnVal" and then we see the execution with the help of "console.log".
let returnVal = sum(1,2,3);       
console.log(returnVal);
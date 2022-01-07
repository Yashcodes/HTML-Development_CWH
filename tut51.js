// SCOPE

var string1 = "This is a string";
var string1 = "This is a string2";
console.log(string1);

// since "var" is a global element means its scope is global, so if we have declared a variable using "var" and if we want to declare the same variable for other function then the next variable will overwrite the value of first variable.
// Its example can be seen in the above Declaration

// Now , we have a function called "let" which we can use in the place of "var". Its scope is block, means that if we have declared a function using "let" and then if we have to declare the another function using the same variable then we have to declare that variable inside the curley braces called blocks.
// Its example can be seen in the example given below:-

let a = "Yash";
{
  let a = "Kajal";
  console.log(a);
}
console.log(a);

const b = "This cannot be changed";
// b = "I want to change this but const is not allowing me to change it";
console.log(b);

//  CONDITIONALS

let age = 19;
if (age > 18) {
  console.log("You can drink water.");
} else if (age == 4) {
  console.log("You cannot walk.");
} else if (age == 15) {
  console.log("You cannot ride bike.");
} else {
  console.log("You can drink milk.");
}

const cups = 10;
switch (cups) {
  case 45:
    console.log("You can take much more tea.");
    break;

  case 20:
    console.log("You should bring some cups of tea.");
    break;

  case 60:
    console.log("There is not sufficient tea to give you.");
    break;

  default:
    console.log("No cups, No tea !");
    break;
}

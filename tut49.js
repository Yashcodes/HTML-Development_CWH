// here we used double quotes to declare the variable as string
var string1 = "This";
console.log(string1)

// also we can use single quote to declare the variable as string
var string2 = "That";
console.log(string2)

// if we have to use single code inside the string then we have to declare the string in double quotation.
// it can be justified below:-
var string3 = "That's";
console.log(string3)

// And if we want to use double quotation inside the string then we can declare the string in single quotation
// It can also be justified below:-
var string4 = 'bakwaas"s';
console.log(string4)

// if there is a condition to use both type of quotation in string then the following operator can be used

var name = 'Yash';
var quality = "JavaScript";
var specs = `${name} is a very 'nice' "personality" and he is now learning ${quality}.`;
console.log(specs)

// The three statements written above is the operation of the operator of string with the hwlp of which we can use both the single and double quotation in string

var length1 = name.length;
var length2 = specs.length;
console.log("The length of name is "+ (length1))
        //   OR
console.log(`The length of name is ${length1}`)   
console.log("The length of whole sentence written is "+ (length2))
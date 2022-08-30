// Module : A block of code that is written by someone else but we can use that code as per our need 

const fs = require ("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("Ashish", "Rohit")

console.log("The content of the file is ");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("Rohan.txt", text);
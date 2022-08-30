// Synchronous or blocking
// -line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require ("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{        // Asynchronously using readFile function and this will take a callback
    console.log(data);
});
console.log("This is a message");

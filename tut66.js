const http = require("http");  //  Importing http module
const fs = require("fs"); // Importing fs (file system) module

let fileContent = fs.readFileSync("tut59.html");  // Reading the file 

const server = http.createServer((req,res)=>{                 // This will create a server and it also take a callback to respond
    res.writeHead(200, 'Content-Type', 'text/html');
    res.end(fileContent);
})

server.listen(80, '127.0.0.1', () => {          // Starting a server and It will take port, hostname and a callback
    console.log("Listening on port 80");
});
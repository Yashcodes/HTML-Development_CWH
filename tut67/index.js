const fs = require("fs");                 // Importing a fs module
const http = require("http");             // Importing a http module

const hostname = "127.0.0.1";
const port = 3000;

const home = fs.readFileSync('./index.html');                          // Read the whole file synchronously
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {                   // Initializing a variable and creating a server in reference with the http module 
  console.log(req.url);                                                   
  let url = req.url;                                               // Storing the requested url inside a variable
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

 if(url == "/") {
   res.end(home);
 }
    else if(url == "/about") {
        res.end(about);
    }
    else if (url == "/services") {
        res.end(services);
    }
    else if (url == "/contact") {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("404");
    }
});

server.listen(port, hostname, () => {                             // Starting the server then listening to the port and hostname
  console.log(`Server is running at http://${hostname}:${port}/`);
});

// console.log("Hello World!");
const http = require('http'); // Means we want to use the http module

const hostname = '127.0.0.1';
const port = 3000;

//  ***********Creating a server***************

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end("This is our first backend tutorial.");
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box shadow and text shadow</title>

    <style>
        .container{
            display: flex;

        }

        .card{
            padding: 23px 12px;
            /* border: 2px solid red; */
            margin: 23px 12px;
            background-color: rosybrown;
            box-shadow: 10px 15px green;
            box-shadow: 20px -23px black;
            box-shadow: 4px 8px 3px navy;                            /* here the third element is blur radius  */
            box-shadow: 4px 8px 3px 10px navy;                       /* here the fourth element is spread radius */
            box-shadow: inset 3px 5px gold;                          /* here inset is used for the box shadow to be inside */
            box-shadow: 3px 4px fuchsia, 12px 9px goldenrod;       /* this syntax is used for multiple box shadows */
        }

        .card h2{
            text-shadow: 2px 1px 5px white;
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="card" id="card1">
            <h2>This is HTMl course</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia ab nisi quaerat laborum adipisci, sequi tenetur perspiciatis aspernatur id similique excepturi distinctio omnis fuga obcaecati corporis non temporibus. Numquam pariatur officia quod perferendis!</p>
        </div>
        <div class="card" id="card2">
            <h2>This is C++ course</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia ab nisi quaerat laborum adipisci, sequi tenetur perspiciatis aspernatur id similique excepturi distinctio omnis fuga obcaecati corporis non temporibus. Numquam pariatur officia quod perferendis!</p>
        </div>
        <div class="card" id="card3">
            <h2>Card 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia ab nisi quaerat laborum adipisci, sequi tenetur perspiciatis aspernatur id similique excepturi distinctio omnis fuga obcaecati corporis non temporibus. Numquam pariatur officia quod perferendis!</p>
        </div>
    </div>
</body>
</html>`);
});


// * Listening the server at the given hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
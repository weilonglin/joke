// app.js - review/bonus - heroku - jokes

const express = require('express');

const app = express();

const port = 3000;

function onListen() {
  console.log(`Listening on : ${port}`);
}



const page = `
<html>
<body>
<title>Weilong Lin</title>
<h1>Hi</1>
<p>bye</p>
</body>
</html>
`

app.get(
  '/',
  (request, response) => {
    const render = page;
    response.send(render);
  }
)

app.listen(port, onListen);
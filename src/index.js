const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



app.use('/api/v1', routes);
app.use('/', async function (req, res) {
  res.send('Sorry no such route available');
});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});

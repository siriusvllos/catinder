var express = require("express");

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ---- FUNCTIONS ----

app.get('/', function (req, res) {
    res.send(index.html)
  })



var express = require("express");

const app = express();
const port = 3030;

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ---- FUNCTIONS ----

app.use("/catinder", express.static("websfiles"));



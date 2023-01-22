var express = require("express");

const app = express();
const port = 3031;

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ---- FUNCTIONS ----

app.use("/catinder", express.static("websfiles"));



// --- THE END ;) ---

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

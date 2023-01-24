var express = require("express");

const app = express();
const port = 3030;

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ---- FUNCTIONS ----

function contarChamadas(obj){

}

// --- URL'SES ---

app.use("/catinder", express.static("websfiles"));

app.post("/like", async (req, res) => {
  var likes = {
    chamadas: 0,
  };
  console.log(`Tentei pegar os valores de ${likes}`);

  var contaNova = await contarChamadas(likes);
  res.send("added");
});

app.post("/pass", async (req, res) => {
  var passes = {
    chamadas: 0,
  };
  console.log(`Tentei pegar os valores de ${passes}`);

  var contaNova = await contarChamadas(passes);
  res.send("added");
});

// --- THE END ;) ---

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
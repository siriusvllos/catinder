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
  obj["chamadas"] += 1;
  console.log(`O valor de chamadas é = ${obj.chamadas}`)
}

// --- URL'SES ---

app.use("/catinder", express.static("websfiles"));

var likes = {
  chamadas: 0,
};
var passes = {
  chamadas: 0,
};

app.post("/like", async (req, res) => {
  console.log(`Tentei pegar os valores de ${likes}`);

  var chamadas = await contarChamadas(likes);
  res.send("added");
});

app.post("/pass", async (req, res) => {
  console.log(`Tentei pegar os valores de ${passes}`);

  var chamadas = await contarChamadas(passes);
  res.send("added");
});

// --- THE END ;) ---

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
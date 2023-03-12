var express = require("express");

const app = express();
const port = 3030;

app.use(
  express.urlencoded({
    extended: true,
  })
);

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:44805/test";
const client = new MongoClient(uri);

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

// --- FUNCIOES ISSUE #7 ---

async function listarUsuarios() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("vendas");
    const usuarios = database.collection("usuarios");
 
    const query = {};
    var lista_usuarios = await usuarios.find(query).toArray();
    return lista_usuarios;
  } finally {
    await client.close();
  }
 };
 
 async function inserirNovoUsuario(novoUsuario) {
  const client = new MongoClient(uri);
 
  try {
    await client.connect();
    const database = client.db("vendas");
    const usuarios = database.collection("usuarios");
 
    await usuarios.insertOne(novoUsuario);
  } finally {
    await client.close(); 
  }
 };
 
 async function deletarUsuario(nome) {
  const client = new MongoClient(uri);
 
  try {
    await client.connect();
    const database = client.db("vendas");
    const usuarios = database.collection("usuarios");

    await usuarios.remove({ nome: nome });
  } finally {
    await client.close();
  }
 };

// --- URL'SES MONGO ISSUE #7 ---

app.post("/users", async (req, res) => {
  var novoUsuario = {
    login: "",
    email: "",
    picture: ""
  };
  novoUsuario.login = req.param("nome de usuário");
  novoUsuario.email = req.param("email");
  novoUsuario.picture = req.param("foto de perfil");

  console.log(`Tentei pegar os valores de ${novoUsuario}`);

  var contaNova = await inserirNovoUsuario(novoUsuario);
  res.send("added");
});

app.delete("/users", async (req, res) => {
  var login = req.param("nome");

  console.log(login);
  console.log(email);

 if (login != undefined) {
    var adeusUsuario = await deletarUsuario(nome);
    res.send("deleted");
  } else if (login == undefined) {
    res.send("ERRO: não conseguimos encontrar a sua conta");
  }
});

app.get("/users", async (req, res) => {
  var lista = await listarUsuarios();
  res.send(lista);
});

// --- THE END ;) ---

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// branch:)

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

// ---- FUNCTIONS ISSUE#10 ----

async function avaliarUsuarios(avaliacao) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("catinder");
    const usuarios = database.collection("usuarios");

    usuarios.update( {
      "email": emailUsuarioAtual,
    },{ $inc: { avaliacao: 1 }});

  } finally {
    await client.close();
  }
 };

// --- URL'SES ---

app.use("/catinder", express.static("websfiles"));

app.post("/like", async (req, res) => {

  emailUsuarioAtual = req.param("email");
  avaliarUsuarios("likes");

  res.send({});
});

app.post("/pass", async (req, res) => {

  emailUsuarioAtual = req.param("email");
  avaliarUsuarios("passes");

  res.send({});
});

// --- FUNCIOES ISSUE #7 ---

async function listarUsuarios() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("catinder");
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
 
  try {    await client.connect();
    const database = client.db("catinder");
    const usuarios = database.collection("usuarios");
 
    await usuarios.insertOne(novoUsuario);
  } finally {
    await client.close(); 
  }
 };
 

async function deletarUsuario(login) {
  const client = new MongoClient(uri);
 
  try {
    await client.connect();
    const database = client.db("catinder");
    const usuarios = database.collection("usuarios");

    await usuarios.remove({ login: login });
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
  novoUsuario.login = req.param("login");
  novoUsuario.email = req.param("email");
  novoUsuario.picture = req.param("picture");

  console.log(`Tentei pegar os valores de ${novoUsuario}`);

  var contaNova = await inserirNovoUsuario(novoUsuario);
  res.send("added");
});

app.delete("/users", async (req, res) => {
  var login = req.param("login");

  console.log(login);

 if (login != undefined) {
    var adeusUsuario = await deletarUsuario(login);
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
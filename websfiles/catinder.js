var todosUsuarios;
var tagImagemAtual;
var usuarioAtual = 0;

async function initPage() {
    const response = await fetch('/users', {
        method: "GET",
    });
    const data = await response.json();

    todosUsuarios = data;

    mudarImagemUsuario();
    // obs: so nao precisa de param pq as variaveis sao globais
}

function mudarImagemUsuario() {
    tagImagemAtual = document.getElementById("imgAtual");

    urlImagemAtual = todosUsuarios[usuarioAtual].picture;

    tagImagemAtual.src = urlImagemAtual;
}

async function like() {
    console.log("Eu gosto desse gatinho");

    const response = await fetch('/like', {
        method: "POST",
    });
    const data = await response.json();

    globalThis.usuarioAtual +=1;
    mudarImagemUsuario();

    console.log(data);
}

async function pass() {
    console.log("Eu não gosto desse gatinho");

    const response = await fetch('/pass', {
        method: "POST",
    });
    const data = await response.json();

    globalThis.usuarioAtual +=1;
    mudarImagemUsuario();

    console.log(data);
}
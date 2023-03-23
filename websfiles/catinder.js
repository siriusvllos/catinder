async function like() {
    console.log("Eu gosto desse gatinho");

    const response = await fetch('/like', {
        method: "POST",
    });
    const data = await response.json();

console.log(data);
}

async function pass() {
    console.log("Eu não gosto desse gatinho");

    const response = await fetch('/pass', {
        method: "POST",
    });
    const data = await response.json();
    
    console.log(data);
}

async function getList() {
    const response = await fetch('/users', {
        method: "GET",
    });
    const data = await response.json();
    var listaString = JSON.stringfy(data);
    var listaArray = listaString.split("},{");

    console.log(typeof(listaString));
    console.log(listaArray);

    return listaArray;
}

var todosUsuarios = getList();
var usuarioAtual = 0;

var imagemAtual = getElementByID("imgAtual");


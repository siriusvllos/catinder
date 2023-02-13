var img = document.createElement("img");

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

function mudarFoto() {
    console.log("Estamos escolhendo outro gatinho");
    img.src = "blep.jpg";
}

function init() {
    const userPicture = document.getElementById("user_picture");
    userPicture.appendChild(img);
    console.log("O init foi iniciado");
}
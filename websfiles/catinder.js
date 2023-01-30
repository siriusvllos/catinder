const userPicture = document.getElementById("user_picture");
var img = document.createElement("img");
img.src = "./blep.jpg";

userPicture.appendChild(img);

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
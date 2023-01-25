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
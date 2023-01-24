import fetch from 'node-fetch';

async function like() {
    console.log("Eu gosto desse gatinho");

    const response = await fetch('localhost:3030/like');
    const data = await response.json();

console.log(data);
}

async function pass() {
    console.log("Eu não gosto desse gatinho");

    const response = await fetch('localhost:3030/like');
    const data = await response.json();
    
    console.log(data);
}
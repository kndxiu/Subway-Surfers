window.addEventListener("click", function(){
    setTimeout(() => {
        document.querySelector("audio").play();
        document.click();
    }, 250);
})

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const scoreResult = document.getElementById("coins");
const coinSound = new Audio("./sounds/coincollected.mp3");
let score = 0;
let startX = 50;
let startY = 50;

const character = document.getElementById("character");
const coin = document.getElementById("coin");

up.addEventListener("click", goup)

down.addEventListener("click", godown)

left.addEventListener("click", goleft)

right.addEventListener("click", goright)

function goup(){
    if (startY > 0) {
        startY = startY - 5
        character.style.top = startY + "%";
        isColliding();
    }
}

function godown(){
    if (startY < 100) {
        startY = startY + 5
        character.style.top = startY + "%";
        isColliding();
    }
}

function goleft(){
    if (startX > 0) {
        startX = startX - 5
        character.style.left = startX + "%";
        isColliding();
    }
}

function goright(){
    if (startX < 100) {
        startX = startX + 5
        character.style.left = startX + "%";
        isColliding();
    }
}

function isColliding(){
    let characterCollide = character.getBoundingClientRect();
    let coinCollide = coin.getBoundingClientRect();
    if (characterCollide.left < coinCollide.left + coinCollide.width  && characterCollide.left + characterCollide.width  > coinCollide.left && characterCollide.top < coinCollide.top + coinCollide.height && characterCollide.top + characterCollide.height > coinCollide.top) {
        collectedCoin();
    }
}

window.addEventListener("keydown", (e) => {
    if(event.keyCode === 87 || event.keyCode === 38){
        goup();
    }
    if(event.keyCode === 83 || event.keyCode === 40){
        godown();
    }
    if(event.keyCode === 65 || event.keyCode === 37){
        goleft();
    }
    if(event.keyCode === 68 || event.keyCode === 39){
        goright();
    }
})

function collectedCoin(){
    let posX = Math.floor(Math.random() * 100);
    let posY = Math.floor(Math.random() * 100);
    score = score + 1;
    coinSound.play();
    scoreResult.innerHTML = score + ' <div class="coin"></div>';
    coin.style.top = posY + "%";
    coin.style.left = posX + "%";
}

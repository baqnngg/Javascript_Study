for(let i=0; i<100; i++){
    const square = document.createElement("div");
    document.querySelector(".grid").appendChild(square);
}

const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const scoreDisplay = document.querySelector("#score");
const width = 10;
let interval;
let intervalTime = 300;
let dir = 1;
let snake = [2,1,0];

function start(){
    snake.forEach(function(item){
        squares[item].classList.add("snake");
    })
    interval = setInterval(runGame, intervalTime);
}

function runGame(){
    const tail = snake.pop()
    squares[tail].classList.remove("snake");
    snake.unshift(snake[0]+dir)
    squares[snake[0]].classList.add("snake");
}

function move(e) {
    if (e.keyCode === 37) { dir = -1 }
    else if (e.keyCode === 39) {dir=1}
    else if (e.keyCode === 38) {dir=-width}
    else if (e.keyCode === 40) {dir = width} 
}

document.addEventListener("keyup", move)
startBtn.addEventListener("click", start)
let firstPlayer = "";
let nextPlayer = firstPlayer;
let count = 0;
let occupied = new Array(9).fill(0);
const oArr = [];
const xArr = [];
let oCount = 0;
let xCount = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const mainDiv = document.querySelector(".main");
const tossArea = document.getElementById("tossArea");
const tossBtn = document.getElementById("tossBtn");
const afterToss = document.createElement("h2");
const restartBtn = document.createElement("button");
const res = document.querySelector(".result");


const boxes = document.querySelectorAll(".btn");                              // Returns nodeList, we can not apply addEventListner on it.
boxes.forEach((value, index) => {
  value.addEventListener("click", () => {
    move(value, index);
  });
});

function move(value, index) {
  if (occupied[index] === 0) {
    if (firstPlayer === "O") {
      if (count % 2 === 0) {
        value.textContent = `O`;
        value.style.color = "red";
        oArr.push(index);
      } else {
        value.textContent = `X`;
        value.style.color = "blue";
        xArr.push(index);
      }
      occupied[index] = 1;
      count++;
    }
    if (firstPlayer === "X") {
      if (count % 2 === 0) {
        value.textContent = `X`;
        value.style.color = "blue";
        xArr.push(index);
      } else {
        value.textContent = `O`;
        value.style.color = "red";
        oArr.push(index);
      }

      occupied[index] = 1;
      count++;
    }
    if (count >= 5) {
      decideWinner();
    }
}
}
function decideWinner() {
    console.log("decide executed", oArr, xArr,count);
    let champ = "";
  winPatterns.forEach((arr, i) => {
    if(oArr.includes(arr[0]) && oArr.includes(arr[1]) && oArr.includes(arr[2])){
        champ = 'O';
        winner('O');
    }
    
    if(xArr.includes(arr[0]) && xArr.includes(arr[1]) && xArr.includes(arr[2])){
        champ = 'X';
        winner('X');
    }
    if(count ===9 && champ==="") winner();
   
  });
}

function winner(win){
    occupied = new Array(9).fill(1);
    res.style.color = "#32CD32";
    res.textContent = `Player ${win === 'O'? 'O': 'X'} is Winner`;
    if(!win){
        res.textContent = `Game DRAW`;
        console.log("count",win)
    }
}

tossBtn.addEventListener("click", toss);

function toss() {
  firstPlayer = Math.random() < 0.5 ? "O" : "X";
  afterToss.textContent = `Player ${firstPlayer} won the Toss. Let's start!`;
  tossArea.replaceChild(afterToss, tossBtn);
  restartBtn.innerText = "Restart";
  restartBtn.classList.add("restartBtn");
  mainDiv.append(restartBtn);

  restartBtn.addEventListener("click", onRestart);
}

function onRestart() {
  firstPlayer = "";
  tossArea.replaceChild(tossBtn, afterToss);
  boxes.forEach((value, index) => {
    value.textContent = "";
  });
  count = 0;
  occupied = new Array(9).fill(0);
  res.textContent = "";
  oCount = 0;
  xCount =0;
  oArr.splice(0,oArr.length);
  xArr.splice(0,xArr.length);
  restartBtn.remove();
}

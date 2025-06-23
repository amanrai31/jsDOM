let firstPlayer;

let playerInput = document.getElementsByClassName("playerInput");

playerInput.addEventListener("input",(e)=>{
    
})

function toss(){
    firstPlayer = Math.random() < 0.5? "O": "X";
    console.log("firstPlayer",firstPlayer);
}
// toggle dark mode & light mode

let x = document.querySelector("body");

let btn = document.getElementById("btn");

function fun() {
  x.classList.toggle("dark");   // adds a class if it is not there, remove a class if it is already there.
}

btn.addEventListener("click", fun);

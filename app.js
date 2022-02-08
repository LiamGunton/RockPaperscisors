const startButton = document.querySelector(".start");
const refresh = document.querySelector(".refresh");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scisors = document.querySelector(".scisors");
const emoji = document.querySelectorAll(".game-emoji");
let cpuChoice = new Array("rock", "paper", "scisors");

startButton.addEventListener("click", startGame);
refresh.addEventListener("click", refreshGame);

function startGame() {
  startButton.classList.remove("active");
  let rand = Math.floor(Math.random() * 3);
  console.log(cpuChoice[rand]);
  if (cpuChoice[rand] == "rock") {
    rock.classList.add("active");
  } else if (cpuChoice[rand] === "paper") {
    paper.classList.add("active");
  } else {
    scisors.classList.add("active");
  }
}

function refreshGame() {
  startButton.classList.add("active");
  for (let i = 0; i < emoji.length; i++) {
    emoji[i].classList.remove("active");
  }
}

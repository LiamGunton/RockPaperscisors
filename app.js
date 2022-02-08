const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scisors = document.querySelector(".scisors");
const emoji = document.querySelectorAll(".game-emoji");

const playerRock = document.querySelector(".player-rock");
const playerPaper = document.querySelector(".player-paper");
const playerScisors = document.querySelector(".player-scisors");
const playerEmoji = document.querySelectorAll(".player-emoji");

const winText = document.querySelector(".win-text");
const tieText = document.querySelector(".tie-text");
const loseText = document.querySelector(".lose-text");
const text = document.querySelectorAll(".text");

let cpuChoice = new Array("rock", "paper", "scisors");

playerRock.addEventListener("click", startGame);
playerPaper.addEventListener("click", startGame);
playerScisors.addEventListener("click", startGame);

function startGame(e) {
  tmp = e.target;

  for (let i = 0; i < emoji.length; i++) {
    emoji[i].classList.remove("active");
  }
  for (let i = 0; i < playerEmoji.length; i++) {
    playerEmoji[i].style.background = "none";
  }
  for (let i = 0; i < text.length; i++) {
    text[i].classList.remove("active");
  }

  let rand = Math.floor(Math.random() * 3);
  console.log(cpuChoice[rand]);
  if (cpuChoice[rand] == "rock") {
    rock.classList.add("active");
  } else if (cpuChoice[rand] === "paper") {
    paper.classList.add("active");
  } else {
    scisors.classList.add("active");
  }

  switch (true) {
    case tmp.classList.contains("player-rock"):
      tmp.style.background = "lightgray";
      if (rock.classList.contains("active")) {
        tieText.classList.add("active");
      } else if (paper.classList.contains("active")) {
        loseText.classList.add("active");
      } else {
        winText.classList.add("active");
      }
      break;
    case tmp.classList.contains("player-paper"):
      tmp.style.background = "lightgray";
      if (rock.classList.contains("active")) {
        winText.classList.add("active");
      } else if (paper.classList.contains("active")) {
        tieText.classList.add("active");
      } else {
        loseText.classList.add("active");
      }
      break;
    case tmp.classList.contains("player-scisors"):
      tmp.style.background = "lightgray";
      if (rock.classList.contains("active")) {
        loseText.classList.add("active");
      } else if (paper.classList.contains("active")) {
        winText.classList.add("active");
      } else {
        tieText.classList.add("active");
      }
      break;
  }
}

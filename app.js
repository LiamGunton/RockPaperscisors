/*
    Name:   Liam Gunton -LiamGunton3@gmail.com
    Date:   Feb 02/2022
    Purpose:Rock Paper Scisors game
*/
const body = document.querySelector("body");
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
const resultDisplay = document.querySelector(".results");
const text = document.querySelectorAll(".text");

let cpuChoice = new Array("rock", "paper", "scisors");
let winCount = 0;
let loseCount = 0;
let tieCount = 0;

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
  if (cpuChoice[rand] == "rock") {
    rock.classList.add("active");
  } else if (cpuChoice[rand] === "paper") {
    paper.classList.add("active");
  } else {
    scisors.classList.add("active");
  }

  switch (true) {
    case tmp.classList.contains("player-rock"):
      if (rock.classList.contains("active")) {
        tie(tmp);
      } else if (paper.classList.contains("active")) {
        lose(tmp);
      } else {

        win(tmp);
      }
      break;
    case tmp.classList.contains("player-paper"):
      tmp.style.background = "lightgray";
      if (rock.classList.contains("active")) {
        win(tmp);
      } else if (paper.classList.contains("active")) {
        tie(tmp);
      } else {
        lose(tmp);
      }
      break;
    case tmp.classList.contains("player-scisors"):
      tmp.style.background = "lightgray";
      if (rock.classList.contains("active")) {
        lose(tmp);
      } else if (paper.classList.contains("active")) {
        win(tmp);
      } else {
        tie(tmp);
      }
      break;
  }
}
function tie(tmp) {
  tieCount++;
  tieText.classList.add("active");
  body.style.background = "orange";
  tmp.style.background = "darkOrange";
  displayResults();
}
function win(tmp) {
  winCount++;
  winText.classList.add("active");
  body.style.background = "green";
  tmp.style.background = "darkgreen";
  displayResults();
}
function lose(tmp) {
  loseCount++;
  loseText.classList.add("active");
  body.style.background = "red";
  tmp.style.background = "darkred";
  displayResults();
}

function displayResults() {
  resultDisplay.innerHTML = `Wins: ${winCount} <br>Losses: ${loseCount} <br>Ties: ${tieCount}`;
}

const rulesButton = document.getElementById("rules");
const container = document.getElementById("container");
const header = document.getElementById("header-container");
const rulesContainer = document.getElementById("rules-outer-container");

rulesButton.addEventListener("click", function () {
  if (window.innerWidth < 700) {
    container.style.display = "none";
    header.style.display = "none";
    rulesContainer.style.display = "flex";
  } else {
    rulesContainer.style.display = "flex";
  }
});

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function () {
  if (window.innerWidth < 700) {
    container.style.display = "flex";
    header.style.display = "grid";
    rulesContainer.style.display = "none";
  } else {
    rulesContainer.style.display = "none";
  }
});

const hpImgcon = document.getElementById("house-picked-img-container");
const hpImgconEmpty = document.getElementById(
  "house-picked-img-container-empty"
);

const housePicked = document.getElementById("house-picked");
const opponentPicked = { value: null };

function picking() {
  hpImgcon.style.display = "flex";
  hpImgconEmpty.style.display = "none";

  var randomNum = Math.floor(Math.random() * 3);

  if (choices[randomNum] === choices[0]) {
    housePicked.src = "images/icon-paper.svg";
    opponentPicked.value = 1;
    hpImgcon.style.borderColor = color0;
  }
  if (choices[randomNum] === choices[1]) {
    housePicked.src = "images/icon-scissors.svg";
    hpImgcon.style.borderColor = color1;
    opponentPicked.value = 2;
  }
  if (choices[randomNum] === choices[2]) {
    housePicked.src = "images/icon-rock.svg";
    hpImgcon.style.borderColor = color2;
    opponentPicked.value = 3;
  }
}

const resultContainer = document.getElementById("result");
const resultContainerDesktop = document.getElementById("result-desktop");
const winText = document.getElementById("win-text");
const loseText = document.getElementById("lose-text");
const drawText = document.getElementById("draw-text");
const winTextmobile = document.getElementById("win-text-mobile");
const loseTextmobile = document.getElementById("lose-text-mobile");
const drawTextmobile = document.getElementById("draw-text-mobile");

function result() {
  if (window.innerWidth < 700) {
    resultContainer.style.display = "flex";
    // paper
    if (userPicked.value === 1) {
      if (opponentPicked.value === 1) {
        winTextmobile.style.display = "none";
        loseTextmobile.style.display = "none";
        drawTextmobile.style.display = "block";
      }
    }

    if (userPicked.value === 1) {
      if (opponentPicked.value === 2) {
        winTextmobile.style.display = "none";
        loseTextmobile.style.display = "block";
      }
    }

    if (userPicked.value === 1) {
      if (opponentPicked.value === 3) {
        winTextmobile.style.display = "block";
        loseTextmobile.style.display = "none";
      }
    }

    // scissor
    if (userPicked.value === 2) {
      if (opponentPicked.value === 2) {
        winTextmobile.style.display = "none";
        loseTextmobile.style.display = "none";
        drawTextmobile.style.display = "block";
      }
    }

    if (userPicked.value === 2) {
      if (opponentPicked.value === 3) {
        winTextmobile.style.display = "none";
        loseTextmobile.style.display = "block";
      }
    }

    if (userPicked.value === 2) {
      if (opponentPicked.value === 1) {
        winTextmobile.style.display = "block";
        loseTextmobile.style.display = "none";
      }
    }

    // rock
    if (userPicked.value === 3) {
      if (opponentPicked.value === 3) {
        winTextmobile.style.display = "none";
        loseTextmobile.style.display = "none";
        drawTextmobile.style.display = "block";
      }
    }

    if (userPicked.value === 3) {
      if (opponentPicked.value === 1) {
        winTextmobile.style.display = "none";
        loseTextmobile.style.display = "block";
      }
    }

    if (userPicked.value === 3) {
      if (opponentPicked.value === 2) {
        winTextmobile.style.display = "block";
        loseTextmobile.style.display = "none";
      }
    }
  } else {
    resultContainerDesktop.style.display = "flex";
    pickingContainer.style.width = "1000px";
    // paper
    if (userPicked.value === 1) {
      if (opponentPicked.value === 1) {
        winText.style.display = "none";
        loseText.style.display = "none";
        drawText.style.display = "block";
      }
    }

    if (userPicked.value === 1) {
      if (opponentPicked.value === 2) {
        winText.style.display = "none";
        loseText.style.display = "block";
      }
    }

    if (userPicked.value === 1) {
      if (opponentPicked.value === 3) {
        winText.style.display = "block";
        loseText.style.display = "none";
      }
    }

    // scissor
    if (userPicked.value === 2) {
      if (opponentPicked.value === 2) {
        winText.style.display = "none";
        loseText.style.display = "none";
        drawText.style.display = "block";
      }
    }

    if (userPicked.value === 2) {
      if (opponentPicked.value === 3) {
        winText.style.display = "none";
        loseText.style.display = "block";
      }
    }

    if (userPicked.value === 2) {
      if (opponentPicked.value === 1) {
        winText.style.display = "block";
        loseText.style.display = "none";
      }
    }

    // rock
    if (userPicked.value === 3) {
      if (opponentPicked.value === 3) {
        winText.style.display = "none";
        loseText.style.display = "none";
        drawText.style.display = "block";
      }
    }

    if (userPicked.value === 3) {
      if (opponentPicked.value === 1) {
        winText.style.display = "none";
        loseText.style.display = "block";
      }
    }

    if (userPicked.value === 3) {
      if (opponentPicked.value === 2) {
        winText.style.display = "block";
        loseText.style.display = "none";
      }
    }
  }
}

const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const yourPicked = document.getElementById("your-picked");
const imageContainer = document.getElementById("images-container");
const pickingContainer = document.getElementById("picking-container");
const ypImgCon = document.getElementById("your-picked-img-container");
let color0 = "hsl(230, 89%, 62%)";
let color1 = "hsl(39, 89%, 49%)";
let color2 = "hsl(349, 71%, 52%)";
const userPicked = { value: null };
const choices = [paper, scissors, rock];

for (let i = 0; i < 3; i++) {
  choices[i].addEventListener("click", function () {
    imageContainer.style.display = "none";
    pickingContainer.style.display = "flex";
    if (choices[i] === choices[0]) {
      userPicked.value = 1;
      yourPicked.src = "images/icon-paper.svg";
      ypImgCon.style.borderColor = color0;
    }
    if (choices[i] === choices[1]) {
      userPicked.value = 2;
      yourPicked.src = "images/icon-scissors.svg";
      ypImgCon.style.borderColor = color1;
    }
    if (choices[i] === choices[2]) {
      userPicked.value = 3;
      yourPicked.src = "images/icon-rock.svg";
      ypImgCon.style.borderColor = color2;
    }
    setTimeout(picking, 1000);
    setTimeout(result, 3000);
    setTimeout(usersScore, 3500);
  });
}

const score = document.getElementById("score");

function usersScore() {
  if (winText.style.display === "block") {
    score.textContent = parseInt(score.textContent) + 1;
  }
  if (loseText.style.display === "block") {
    score.textContent = parseInt(score.textContent) - 1;
  }
  if (winTextmobile.style.display === "block") {
    score.textContent = parseInt(score.textContent) + 1;
  }
  if (loseTextmobile.style.display === "block") {
    score.textContent = parseInt(score.textContent) - 1;
  }
  if (score.textContent < 0) {
    score.textContent = 0;
  }
}

const playAgainbutton = document.getElementById("play-again");
const pabDesktop = document.getElementById("play-again-desktop");
let pickingTimeout;
let resultTimeout;
let usersScoreTimeout;

playAgainbutton.addEventListener("click", function () {
  clearTimeout(pickingTimeout);
  clearTimeout(resultTimeout);
  clearTimeout(usersScoreTimeout);
  resetGame();
});

pabDesktop.addEventListener("click", function () {
  clearTimeout(pickingTimeout);
  clearTimeout(resultTimeout);
  clearTimeout(usersScoreTimeout);
  resetGame();
});

function resetGame() {
  imageContainer.style.display = "grid";
  pickingContainer.style.display = "none";
  resultContainer.style.display = "none";
  resultContainerDesktop.style.display = "none";
  winText.style.display = "none";
  loseText.style.display = "none";
  drawText.style.display = "none";
  winTextmobile.style.display = "none";
  loseTextmobile.style.display = "none";
  drawTextmobile.style.display = "none";
  userPicked.value = null;
  opponentPicked.value = null;
  yourPicked.src = " ";
  housePicked.src = " ";
  hpImgcon.style.display = "none";
  hpImgconEmpty.style.display = "flex";
  ypImgCon.style.borderColor = "none";
  hpImgcon.style.borderColor = "none";
  const windowSize = window.innerWidth;
  if (windowSize < 800) {
    pickingContainer.style.width = "250px";
  } else {
    pickingContainer.style.width = "500px";
  }
}

window.addEventListener("resize", function () {
  const windowSize = window.innerWidth;
  if (windowSize < 800) {
    resultContainer.style.display = "flex";
    resultContainerDesktop.style.display = "none";
    pickingContainer.style.width = "250px";
  } else {
    resultContainer.style.display = "none";
    resultContainerDesktop.style.display = "flex";
    pickingContainer.style.width = "1000px";
  }
});

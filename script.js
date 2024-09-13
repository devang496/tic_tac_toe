const boxes = document.getElementsByClassName("box");
const winnerHeading = document.getElementById("winner");
const newGameBtn = document.getElementById("new-game");
let turnO = false;

let winO = document.getElementById("scoreO");
let winX = document.getElementById("scoreX");

let countO = 0;
let countX = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      box.setAttribute("disabled", "true");
      turnO = false;
    } else {
      box.innerText = "X";
      box.setAttribute("disabled", "true");
      turnO = true;
    }
    checkWinner();
  });
}

newGameBtn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    box.removeAttribute("disabled");
  }
  winnerHeading.classList.add("hidden");
  newGameBtn.classList.add("hidden");
});

const disableAllBoxes = () => {
  for (let box of boxes) {
    box.setAttribute("disabled", "true");
  }
};

const showWinner = (winnerPlayer) => {
  winnerHeading.innerText = `Winner : ${winnerPlayer}`;
  winnerHeading.classList.remove("hidden");
  newGameBtn.classList.remove("hidden");

  if (winnerPlayer === "O") {
    countO++;
    scoreO.innerText = `O : ${countO}`;
  } else {
    countX++;
    scoreX.innerText = `X : ${countX}`;
  }

  disableAllBoxes();
};

const checkWinner = () => {
  winPatterns.forEach((pattern) => {
    const index0Value = pattern[0];
    const index1Value = pattern[1];
    const index2Value = pattern[2];

    const pos0 = boxes[index0Value];
    const pos1 = boxes[index1Value];
    const pos2 = boxes[index2Value];

    const pos0Value = pos0.innerText;
    const pos1Value = pos1.innerText;
    const pos2Value = pos2.innerText;

    if (pos0Value && pos1Value && pos2Value) {
      if (pos0Value === pos1Value && pos1Value === pos2Value) {
        showWinner(pos0Value);
      }
    }
  });
};

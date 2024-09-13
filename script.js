let boxes = document.getElementsByClassName("box");
// console.log(boxes);

let playerO = true;

let winnerPlayer = document.getElementById("winner");

const newGameBtn = document.getElementById("new-game");

const scoreO = document.getElementById("scoreO");
console.log(scoreO.innerText);
const scoreX = document.getElementById("scoreX");

// const winnerNamePlate = document.getElementById("winnerNamePlate");
// console.log(winnerNamePlate);

const winningPatternds = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let countO = 0;
let countX = 0;

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (playerO === true) {
      //   console.log("Clicked");
      box.innerText = "O";
      playerO = false;
      box.setAttribute("disabled", "true");
    } else {
      //   console.log("Clicked");
      box.innerText = "X";
      playerO = true;
      box.setAttribute("disabled", "true");
    }
    checkWinner();
  });
}

const checkWinner = () => {
  winningPatternds.forEach((pattern) => {
    // console.log(pattern);/
    // console.log(pattern[0]);
    // console.log(pattern[1]);

    // const index0Value = pattern[0];
    // const index1Value = pattern[1];
    // const index2Value = pattern[2];

    // // console.log(boxes[pattern[1]]);
    // const pos0 = boxes[index0Value];
    // const pos1 = boxes[index1Value];
    // const pos2 = boxes[index2Value];

    const pos0Value = boxes[pattern[0]].innerText;
    const pos1Value = boxes[pattern[1]].innerText;
    const pos2Value = boxes[pattern[2]].innerText;

    if (pos0Value && pos1Value && pos2Value) {
      if (pos0Value === pos1Value && pos1Value === pos2Value) {
        showWinner(pos0Value);
      }
    }
  });
};

const showWinner = (Player) => {
  //   console.log(Player);
  winnerPlayer.innerText = `Winner : ${Player}`;
  winnerPlayer.classList.remove("hidden");
  newGameBtn.classList.remove("hidden");
  // winnerNamePlate.classList.remove("hidden");

  if (Player === "O") {
    countO++;
    scoreO.innerText = `O : ${countO}`;
  } else {
    countX++;
    scoreX.innerText = `X : ${countX}`;
  }
  disableAllBoxes();
};

const disableAllBoxes = () => {
  for (let box of boxes) {
    box.setAttribute("disabled", "true");
  }
};

newGameBtn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    box.removeAttribute("disabled");
  }
  winnerPlayer.classList.add("hidden");
  newGameBtn.classList.add("hidden");
  // winnerNamePlate.classList.add("hidden");
});

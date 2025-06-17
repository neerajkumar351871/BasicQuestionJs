let boxes = document.querySelectorAll(".btn");
let mesvic = document.querySelector("#mes-vic");
let score0 = document.querySelector('#score-o');
let scoreX = document.querySelector('#score-x');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#New-game');

let x = 0;
let o = 0;

const Winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turn = true;
let gameOver = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "" || gameOver) return;

    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of Winpattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      mesvic.innerText = `🏆 Winner is ${val1}`;
      scoreboard(val1);
      disableAllButtons();
      gameOver = true;
      return;
    }
  }

  // Check for draw
  let isDraw = [...boxes].every(box => box.innerText !== "");
  if (isDraw && !gameOver) {
    mesvic.innerText = "🤝 It's a Draw!";
    gameOver = true;
  }
};

const scoreboard = (res) => {
  if (res === "O") {
    o++;
    score0.innerText = `Score: ${o}`;
  } else {
    x++;
    scoreX.innerText = `Score: ${x}`;
  }
};

const disableAllButtons = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// New Game = clear board only
newGameBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  mesvic.innerText = "";
  turn = true;
  gameOver = false;
});

// Reset = clear board + scores
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  x = 0;
  o = 0;
  score0.innerText = "Score: 0";
  scoreX.innerText = "Score: 0";
  mesvic.innerText = "";
  turn = true;
  gameOver = false;
});

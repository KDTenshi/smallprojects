const gameField = document.getElementById("field");
const restartBtn = document.getElementById("restart");

gameField.addEventListener("click", playerTurn);
restartBtn.addEventListener("click", restart);

let isGameOver = false;
let currentChar = "x";

const field = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function restart() {
  location.reload(true);
}

function playerTurn(e) {
  const target = e.target;

  if (isGameOver) return;

  if (!target.classList.contains("Game_Cell")) return;

  const row = target.dataset.row;
  const col = target.dataset.col;

  const pos = [row, col];

  if (placeChar(pos)) {
    target.innerText = currentChar;

    checkVictory(pos);

    switchChar();
  }
}

function placeChar(pos) {
  const row = pos[0];
  const col = pos[1];

  if (field[row][col] === "") {
    field[row][col] = currentChar;

    return true;
  }

  return false;
}

function switchChar() {
  if (currentChar === "x") {
    currentChar = "o";
  } else {
    currentChar = "x";
  }
}

function checkVictory(pos) {
  if (checkCol(pos) || checkRow(pos) || checkDiagonal(pos)) {
    isGameOver = true;
    alert(`${currentChar}'s Won!`);
  }
}

function checkRow(pos) {
  const row = pos[0];

  if (field[row][0] !== "" && field[row][1] !== "" && field[row][2] !== "") {
    if (field[row][0] === field[row][1] && field[row][1] === field[row][2]) {
      return true;
    }
  }

  return false;
}

function checkCol(pos) {
  const col = pos[1];

  if (field[0][col] !== "" && field[1][col] !== "" && field[2][col] !== "") {
    if (field[0][col] === field[1][col] && field[1][col] === field[2][col]) {
      return true;
    }
  }

  return false;
}

function checkDiagonal(pos) {
  const row = pos[0];
  const col = pos[1];

  if (Math.abs(row - col) === 1) return false;

  if (field[0][0] !== "" && field[1][1] !== "" && field[2][2] !== "") {
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
      return true;
    }
  }

  if (field[0][2] !== "" && field[1][1] !== "" && field[2][0] !== "") {
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
      return true;
    }
  }

  return false;
}

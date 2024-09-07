const board = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    handleResultValidation();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
};

const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.textContent = `Player ${currentPlayer} has won!`;
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        message.textContent = 'Game ended in a draw!';
        gameActive = false;
        return;
    }
};

const handleReset = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", ""];
    message.textContent = "";
    board.forEach(cell => cell.textContent = "");
};

board.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', handleReset);

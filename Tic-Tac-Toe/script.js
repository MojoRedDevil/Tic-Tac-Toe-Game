// Create an empty board
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Current player (X or O)
let currentPlayer = 'X';

// Scores
let xWins = 0;
let oWins = 0;

// Function to render the board
function renderBoard() {
  let boardDiv = document.getElementById('board');
  boardDiv.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = board[i][j];
      if (board[i][j] === 'X') {
        cell.classList.add('x');
      } else if (board[i][j] === 'O') {
        cell.classList.add('o');
      }
      cell.addEventListener('click', () => {
        if (board[i][j] === '' && !checkWinner()) {
          board[i][j] = currentPlayer;
          renderBoard();
          if (!checkWinner()) {
            togglePlayer();
          }
        }
      });
      row.appendChild(cell);
    }
    boardDiv.appendChild(row);
  }
}

// Function to toggle between players
function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check for a winner
function checkWinner() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      alert(`${board[i][0]} wins!`);
      updateScore(board[i][0]);
      return true;
    }
  }
  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== '') {
      alert(`${board[0][j]} wins!`);
      updateScore(board[0][j]);
      return true;
    }
  }
  // Check diagonals
  if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')) {
    alert(`${board[1][1]} wins!`);
    updateScore(board[1][1]);
    return true;
  }
  // Check for tie
  if (board.every(row => row.every(cell => cell !== ''))) {
    alert("It's a tie!");
    return true;
  }
  return false;
}

// Function to update the score
function updateScore(winner) {
  if (winner === 'X') {
    xWins++;
    document.getElementById('xWins').textContent = xWins;
  } else if (winner === 'O') {
    oWins++;
    document.getElementById('oWins').textContent = oWins;
  }
}

// Function to restart the game
function restartGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  renderBoard();
}

// Function to restart the score
function restartScore() {
  xWins = 0;
  oWins = 0;
  document.getElementById('xWins').textContent = xWins;
  document.getElementById('oWins').textContent = oWins;
  restartGame();
}

// Event listeners for buttons
document.getElementById('restartGame').addEventListener('click', restartGame);
document.getElementById('restartScore').addEventListener('click', restartScore);

// Initialize the game
renderBoard();
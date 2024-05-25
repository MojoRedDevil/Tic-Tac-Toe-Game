// Create an empty board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  // Current player (X or O)
  let currentPlayer = 'X';
  
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
        cell.addEventListener('click', () => {
          if (board[i][j] === '' && !checkWinner()) {
            board[i][j] = currentPlayer;
            renderBoard();
            togglePlayer();
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
        return true;
      }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== '') {
        alert(`${board[0][j]} wins!`);
        return true;
      }
    }
    // Check diagonals
    if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')) {
      alert(`${board[1][1]} wins!`);
      return true;
    }
    // Check for tie
    if (board.every(row => row.every(cell => cell !== ''))) {
      alert("It's a tie!");
      return true;
    }
    return false;
  }
  
  // Initialize the game
  renderBoard();  
document.addEventListener('DOMContentLoaded', function() {
    // Click the Button Game
    const clickButton = document.getElementById('clickButton');
    const clickScoreElement = document.getElementById('clickScore');
    const clickTimer = document.getElementById('clickTimer');
    let clickScore = 0;
    let timeLeft = 10;
    let clickInterval;
    let timerInterval;

    function startClickGame() {
        clickScore = 0;
        clickScoreElement.textContent = clickScore;
        timeLeft = 10;
        clickTimer.textContent = `Time Left: ${timeLeft}s`;

        clickButton.disabled = false;

        clickInterval = setInterval(() => {
            clickScore++;
            clickScoreElement.textContent = clickScore;
        }, 100); // Increment score every 100ms

        timerInterval = setInterval(() => {
            timeLeft--;
            clickTimer.textContent = `Time Left: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(clickInterval);
                clearInterval(timerInterval);
                clickButton.disabled = true;
                alert(`Time's up! Your final score is ${clickScore}`);
            }
        }, 1000); // Update timer every second
    }

    clickButton.addEventListener('click', () => {
        clickScore++;
        clickScoreElement.textContent = clickScore;
    });
    
    startClickGame();

    // Number Guessing Game
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const guessResult = document.getElementById('guessResult');
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessButton.addEventListener('click', () => {
        const guess = Number(guessInput.value);
        attempts++;
        if (guess === secretNumber) {
            guessResult.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        } else if (guess < secretNumber) {
            guessResult.textContent = 'Too low! Try again.';
        } else {
            guessResult.textContent = 'Too high! Try again.';
        }
    });

    // Tic-Tac-Toe Game
    const ticTacToeCells = document.querySelectorAll('.ticTacToeCell');
    const ticTacToeResult = document.getElementById('ticTacToeResult');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];

    ticTacToeCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const cellIndex = this.dataset.cell;
            if (board[cellIndex] === '' && !checkWinner()) {
                board[cellIndex] = currentPlayer;
                this.textContent = currentPlayer;
                if (checkWinner()) {
                    ticTacToeResult.textContent = `${currentPlayer} wins!`;
                } else if (board.every(cell => cell !== '')) {
                    ticTacToeResult.textContent = 'It\'s a draw!';
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        return winningCombinations.some(combo => {
            const [a, b, c] = combo;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function resetTicTacToe() {
        board = ['', '', '', '', '', '', '', '', ''];
        ticTacToeCells.forEach(cell => cell.textContent = '');
        ticTacToeResult.textContent = '';
        currentPlayer = 'X';
    }

    // Simple Calculator
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const addButton = document.getElementById('addButton');
    const subtractButton = document.getElementById('subtractButton');
    const multiplyButton = document.getElementById('multiplyButton');
    const divideButton = document.getElementById('divideButton');
    const calcResult = document.getElementById('calcResult');

    addButton.addEventListener('click', () => {
        const result = Number(num1.value) + Number(num2.value);
        calcResult.textContent = `Result: ${result}`;
    });

    subtractButton.addEventListener('click', () => {
        const result = Number(num1.value) - Number(num2.value);
        calcResult.textContent = `Result: ${result}`;
    });

    multiplyButton.addEventListener('click', () => {
        const result = Number(num1.value) * Number(num2.value);
        calcResult.textContent = `Result: ${result}`;
    });

    divideButton.addEventListener('click', () => {
        const result = Number(num1.value) / Number(num2.value);
        calcResult.textContent = `Result: ${result}`;
    });

    // Color Guessing Game
    const colorDisplay = document.getElementById('colorDisplay');
    const colorInput = document.getElementById('colorInput');
    const colorGuessButton = document.getElementById('colorGuessButton');
    const colorGuessResult = document.getElementById('colorGuessResult');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let currentColor = colors[Math.floor(Math.random() * colors.length)];

    function setRandomColor() {
        currentColor = colors[Math.floor(Math.random() * colors.length)];
        colorDisplay.textContent = `Guess the color: ${currentColor}`;
    }

    setRandomColor();

    colorGuessButton.addEventListener('click', () => {
        const guess = colorInput.value.toLowerCase();
        if (guess === currentColor) {
            colorGuessResult.textContent = 'Correct!';
        } else {
            colorGuessResult.textContent = `Wrong! The color was ${currentColor}.`;
        }
        setRandomColor();
    });
});

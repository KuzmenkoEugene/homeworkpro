let isGameActive = false;
const playersData = [];
let score = 0;

const menuGames = window.onload = function () {

    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    const startGameButton = document.getElementById("startGame");
    startGameButton.addEventListener("click", function () {
        const playerName = document.getElementById("playerName").value;
        const difficulty = document.getElementById("difficulty").value;

        modal.style.display = "none";

        startGame(playerName, difficulty);
    });
};

function startGame(playerName, difficulty) {

    isGameActive = true;
    let speedSnake;

    if (difficulty === 'easy') {
        speedSnake = 22
    } else if (difficulty === 'medium') {
        speedSnake = 10
    } else if (difficulty === 'hard') {
        speedSnake = 4
    }

    let scoreBlock;

    const config = {
        step: 10,
        maxStep: speedSnake,
        sizeCell: 16,
        sizeBerry: 16 / 4,
        rows: 25,
        cols: 25
    };

    const snake = {
        x: 0,
        y: 0,
        dx: config.sizeCell,
        dy: 0,
        tails: [],
        maxTails: 5
    }

    let berry = {
        x: 0,
        y: 0
    }

    function placeInitialFood() {
        randomPositionBerry();
    }

    let canvas = document.querySelector("#game-canvas");
    let context = canvas.getContext("2d");
    scoreBlock = document.querySelector(".game_sign .sign_count");
    let snakeName = document.querySelector(".game_sign .sign_name");
    snakeName.innerHTML = `Голодний змій: ${playerName ? playerName : 'Без імені'}`

    let snakeLevel = document.querySelector(".game_sign .sign_level");
    snakeLevel.innerHTML = `Рівень: ${difficulty}`

    drawScore();

    canvas.width = config.cols * config.sizeCell;
    canvas.height = config.rows * config.sizeCell;

    function gameLoop() {

        if (!isGameActive) {
            return;
        }

        requestAnimationFrame(gameLoop);
        if (++config.step < config.maxStep) {
            return;
        }
        config.step = 0;

        context.clearRect(0, 0, canvas.width, canvas.height);

        drawBerry();
        drawSnake();
    }

    requestAnimationFrame(gameLoop);

    function drawSnake() {
        snake.x += snake.dx;
        snake.y += snake.dy;

        collisionBorder();

        snake.tails.unshift({ x: snake.x, y: snake.y });

        if (snake.tails.length > snake.maxTails) {
            snake.tails.pop();
        }

        snake.tails.forEach(function (el, index) {
            if (index == 0) {
                context.fillStyle = "#FA0556";
            } else {
                context.fillStyle = "#A00034";
            }
            context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

            if (el.x === berry.x && el.y === berry.y) {
                snake.maxTails++;
                incScore();
                randomPositionBerry();
            }

            for (let i = index + 1; i < snake.tails.length; i++) {
                if (el.x == snake.tails[i].x && el.y == snake.tails[i].y) {
                    refreshGame();
                }
            }
        });
    }

    function collisionBorder() {
        if (snake.x < 0) {
            snake.x = (config.cols - 1) * config.sizeCell;
        } else if (snake.x >= canvas.width) {
            snake.x = 0;
        }

        if (snake.y < 0) {
            snake.y = (config.rows - 1) * config.sizeCell;
        } else if (snake.y >= canvas.height) {
            snake.y = 0;
        }
    }

    function refreshGame() {
        isGameActive = false;

        playersData.push({ name: playerName ? playerName : 'Без імені', score: score, difficulty: difficulty });
        playersData.sort((a, b) => b.score - a.score);

        const ratingList = document.querySelector("#rating_usersList");
        ratingList.innerHTML = '';

        playersData.forEach((player) => {
            if (player.difficulty === difficulty) {
                const newPlayerItem = document.createElement("li");
                newPlayerItem.innerHTML = `Name: ${player.name} Score: ${player.score} Difficulty: ${player.difficulty}`;
                ratingList.appendChild(newPlayerItem);
            }
        });

        score = 0

        menuGames();
    }

    placeInitialFood()

    function drawBerry() {
        context.beginPath();
        context.fillStyle = "#A00034";
        context.arc(berry.x + (config.sizeCell / 2), berry.y + (config.sizeCell / 2), config.sizeBerry, 0, 2 * Math.PI);
        context.fill();
    }

    function randomPositionBerry() {
        berry.x = getRandomInt(0, canvas.width / config.sizeCell) * config.sizeCell;
        berry.y = getRandomInt(0, canvas.height / config.sizeCell) * config.sizeCell;
    }

    function incScore() {
        score++;
        drawScore();
    }

    function drawScore() {
        scoreBlock.innerHTML = score;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    document.addEventListener("keydown", function (e) {
        if (e.code == "KeyW") {
            snake.dy = -config.sizeCell;
            snake.dx = 0;
        } else if (e.code == "KeyA") {
            snake.dx = -config.sizeCell;
            snake.dy = 0;
        } else if (e.code == "KeyS") {
            snake.dy = config.sizeCell;
            snake.dx = 0;
        } else if (e.code == "KeyD") {
            snake.dx = config.sizeCell;
            snake.dy = 0;
        }
    });
}


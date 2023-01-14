let gameBoard,
    bombCheck = false,
    bombSum = 10;
setTimeout(() => {
    gameBoard = boardGenerate(9, 9);
}, 0);

function customBoard() {
    let w = document.querySelector("#w").value,
        h = document.querySelector("#h").value;
    bombSum = document.querySelector("#bombCount").value;
    if (w < 1) w = 9;
    if (h < 1) h = 9;
    if (bombSum >= w * h) bombSum = w * h - 1;
    gameBoard = boardGenerate(h, w);
}
function posChose(x, y) {
    //DOM picker
    return document.getElementById(`${x},${y}`);
}
function generate(x, y, e) {
    //place flag
    if (e.button == 2) {
        if (gameBoard[x][y].flaged) {
            gameBoard[x][y].flaged = false;
            posChose(x, y).innerHTML = "";
        } else if (gameBoard[x][y].checked == false) {
            gameBoard[x][y].flaged = true;
            posChose(x, y).innerHTML =
                "<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQwMy4wNCA0MDMuMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3MC42MDQsNTAuMTZMMzcwLjYwNCw1MC4xNmMtMi45NDgtMS40ODctNi41MDctMS4wMTEtOC45NiwxLjJjLTIxLjY4LDE5LjQ0LTQxLjYsMjguODgtNjAuOTYsMjguODggICAgcy0zOC4xNi04Ljk2LTYxLjUyLTI5LjJjLTUwLjcyLTQzLjI4LTEwMC41Ni00My4yLTE1OC44LTEuODRjLTQuMDgsMi44OC00LjA4LDIuODgtMy4zNiw4Ni4xNmMwLDMyLjcyLDAuNTYsNzMuMjgsMCw3OC45NiAgICBjLTEuMTA2LDQuMjc4LDEuNDY1LDguNjQyLDUuNzQyLDkuNzQ4YzIuNTcyLDAuNjY1LDUuMzA2LDAuMDEsNy4yOTgtMS43NDhjMjAuMzAxLTE1LjY2Miw0NS4wODUtMjQuNDA5LDcwLjcyLTI0Ljk2ICAgIGMxNi42OTMsMC4wOTEsMzMuMTMyLDQuMDkyLDQ4LDExLjY4YzE2LjI0Nyw4LjcwOSwzNC4yOTQsMTMuNTI5LDUyLjcyLDE0LjA4Yzk2LjY0LDAsMTEyLjU2LTE1OC4xNiwxMTMuMi0xNjQuODggICAgQzM3NS4xMjUsNTQuOTYyLDM3My41MDQsNTEuNzUxLDM3MC42MDQsNTAuMTZ6IiBmaWxsPSIjZmY1NTQzIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01Mi4zNjQsMGgtNy41MmMtOS4xNDYsMC0xNi41Niw3LjQxNC0xNi41NiwxNi41NnYzNjkuOTJjMCw5LjE0Niw3LjQxNCwxNi41NiwxNi41NiwxNi41Nmg3LjUyICAgIGM5LjE0NiwwLDE2LjU2LTcuNDE0LDE2LjU2LTE2LjU2VjE2LjU2QzY4LjkyNCw3LjQxNCw2MS41MSwwLDUyLjM2NCwweiIgZmlsbD0iI2ZmNTU0MyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=' />";
        }
        return;
    }
    //lose if click on bomb
    if (gameBoard[x][y].isBomb == true && gameBoard[x][y].flaged == false) {
        // debugger
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j].isBomb == true) {
                    posChose(i, j).style.backgroundColor = "chocolate";
                }
            }
        }
        setTimeout(() => {
            alert("u lose :(");
        }, 0);
        location.reload();
    }
    //bomb generate
    if (bombCheck == false) {
        let bombCount = 0;
        while (bombCount < bombSum) {
            //chose bomb cords
            let bombX = Math.floor(Math.random() * gameBoard.length),
                bombY = Math.floor(Math.random() * gameBoard[0].length);
            if (
                gameBoard[bombX][bombY].isBomb == false &&
                (x != bombX || y != bombY)
            ) {
                gameBoard[bombX][bombY].isBomb = true;

                bombCount++;
            } else continue;
        }
    }
    bombCheck = true;
    if (gameBoard[x][y].flaged == false && gameBoard[x][y].isBomb == false) numGenerate(x, y);
}
function numGenerate(x, y) {
    let directions = [
        { xMove: -1, yMove: -1 },
        { xMove: 0, yMove: -1 },
        { xMove: 1, yMove: -1 },
        { xMove: -1, yMove: 0 },
        { xMove: 1, yMove: 0 },
        { xMove: -1, yMove: 1 },
        { xMove: 0, yMove: 1 },
        { xMove: 1, yMove: 1 },
    ];
    let safe = []; //position with 0 bomb neighbor for recursive numGenerate
    gameBoard[x][y].bombNeighbor = 0;
    directions.forEach((direction) => {
        let checkX = x + direction.xMove,
            checkY = y + direction.yMove;
        if (
            checkX < 0 ||
            checkX == gameBoard.length ||
            checkY < 0 ||
            checkY == gameBoard[0].length
        )
            return;
        let checkPos = gameBoard[checkX][checkY];

        if (checkPos.isBomb == true) {
            gameBoard[x][y].bombNeighbor += 1;
        } else if (
            checkPos.bombNeighbor == 0 &&
            checkPos.flaged == false &&
            checkPos.checked == false
        ) {
            safe.push([checkX, checkY]);
        }
    });
    gameBoard[x][y].checked = true;
    posChose(x, y).style.backgroundColor = "wheat";
    if (gameBoard[x][y].bombNeighbor != 0) {
        let txtColor = [
            "darkslateblue",
            "forestgreen",
            "firebrick",
            "darkblue",
            "maroon",
            "teal",
            "darkgoldenrod",
            "darkslategray",
        ];
        posChose(x, y).innerText = gameBoard[x][y].bombNeighbor;
        posChose(x, y).style.color = txtColor[gameBoard[x][y].bombNeighbor - 1];
    } else {
        //generate number for neighbor
        safe.forEach((pos) => {
            let x = pos[0],
                y = pos[1];
            numGenerate(x, y);
        });
    }
    for (let i = 0; i < gameBoard.length; i++)
        for (let j = 0; j < gameBoard[i].length; j++)
            if (
                gameBoard[i][j].checked == false &&
                gameBoard[i][j].isBomb == false
            )
                return;
    alert("u win yay");
    location.reload();
}
function boardGenerate(h, w) {
    let board = [];
    for (let i = 0; i < h; i++) {
        let row = [];
        for (let j = 0; j < w; j++)
            row.push({
                isBomb: false,
                bombNeighbor: 0,
                flaged: false,
                checked: false,
            });
        board.push(row);
    }
    let displayBoard = document.createElement("div");
    displayBoard.id = "gameBoard";
    for (let i = 0; i < h; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < w; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `${i},${j}`;
            cell.setAttribute("onmousedown", `generate(${i},${j},event)`);
            row.appendChild(cell);
        }
        displayBoard.appendChild(row);
    }
    let prevBoard = document.querySelector("#gameBoard");
    if (prevBoard) document.querySelector("#body").removeChild(prevBoard);
    document.querySelector("#body").appendChild(displayBoard);
    return board;
}
window.oncontextmenu = () => {
    return false;
};

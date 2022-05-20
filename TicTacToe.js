const prompt = require("prompt-sync")({ sigint: true });

const TicTacToe = () => {
    let board = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8']
    ];
    let player = true;
    let available = new Set(board.flat());
    let winner = null;
    let marker = 'X';

    console.log("New Game!");
    console.log("X goes first!");
    while (available.size > 0 && winner === null) {
        printBoard();
        turn();
        player = !player;
        marker = player ? 'X' : 'O';
    }

    function turn(square = prompt("What square would you like to play?")) {
        if (available.has(square)) {
            available.delete(square);
            let i = Math.floor(square / 3)
            let j = square % 3
            board[i][j] = marker;
            if (available.size < 5) {
                checkWin(i, j);
            }
        } else {
            console.log("Try an open square");
            turn()
        }
    }
    function printBoard(){
        let i = 2;
        board.forEach(row => {
            console.log(row.join("|"));
            if (i > 0) console.log("-----");
            i--;
        })
        console.log("/n/n");
    }

    function checkWin(i, j) {
        let column = [board[0][j], board[1][j], board[2][j]];
        let row = board[i];
        let diagonal = [board[0][0], board[1][1], board[2][2]];
        let diagonal2 = [board[0][2], board[1][1], board[2][0]];
        let checks = [column, row, diagonal, diagonal2];
        for (check of checks) {
            if (check.every(square => square === check[0])) {
                winner = check[0];
                console.log(`${winner} wins!`);
                break;
            }
        }
    }
}
TicTacToe();
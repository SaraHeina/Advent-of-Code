const { input } = require('./input');
var rowTrueValue = false;
var collumTrueValue = false;
let lastNubmer = 0;
var winningBoard = [];


for (let number of input.numbers) {
    for (let i = 0; i < input.boards.length; i++) {
        input.boards[i].forEach(element => findNumber(element, number));
    }
    const win = didSomeoneWin();
    if (win == true) {
        lastNubmer = number;
        break
    }
}

function findNumber(board, num) {
    board.forEach(e => {
        if (e.number == num) {
            e.marked = true;
        }
    })
};


function didSomeoneWin() {
    for (let i = 0; i < input.boards.length; i++) {
        for (let j = 0; j < 5; j++) {
            rowTrue(input.boards[i][j]);
            collumnTrue(input.boards[i], j);
            if (rowTrueValue == true || collumTrueValue == true) {
                winningBoard = input.boards[i]
                return true;
            }
        }
    }
}

function collumnTrue(board, x) {
    let trues = 0;
    for (let i = 0; i < 5; i++) {
        board[i][x].marked == true && trues++
    }
    trues == 5 ? collumTrueValue = true : collumTrueValue = false
}

function rowTrue(row) {
    let trues = 0;
    for (let i = 0; i < 5; i++) {
        row[i].marked == true && trues++
    }
    trues == 5 ? rowTrueValue = true : rowTrueValue = false
}

function winningBoardScore(board) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        board[i].forEach(element => {
            element.marked == false && (sum += element.number)
        })
    }
    return sum;
}


console.log(winningBoardScore(winningBoard)*lastNubmer);
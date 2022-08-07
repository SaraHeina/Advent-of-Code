const { input } = require('./input');
var rowTrueValue = false;
var collumTrueValue = false;
let lastNubmer = 0;
var winningBoard = [];
var allTheBoards = input.boards;


for (let number of input.numbers) {
    for (let i = 0; i < allTheBoards.length; i++) {
        allTheBoards[i].forEach(element => findNumber(element, number));
    }
    didSomeoneWin();
    if (allTheBoards.length == 0) {
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
    for (let i = 0; i < allTheBoards.length; i++) {
        for (let j = 0; j < 5; j++) {
            rowTrue(allTheBoards[i][j]);
            collumnTrue(allTheBoards[i], j);
            if (rowTrueValue == true || collumTrueValue == true) {
                winningBoard = allTheBoards[i]
                allTheBoards.splice(i, 1)
                break;
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
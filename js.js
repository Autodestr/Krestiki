let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")

let oScore = 0
let xScore = 0
let iteration = 0

const valueField = new Map ([
    ['b1', 1],
    ['b2', 2],
    ['b3', 3],
    ['b4', 10],
    ['b5', 20],
    ['b6', 30],
    ['b7', 100],
    ['b8', 200],
    ['b9', 300],
])

const succsesValueSet = new Set([6, 60, 600, 111, 222, 333, 321, 123])

const unblockField = (node) => {
    node.forEach((item) => item.disabled = false)
}

const startGame = () => {
    b1 = document.getElementById("b1")
    b2 = document.getElementById("b2")
    b3 = document.getElementById("b3")
    b4 = document.getElementById("b4")
    b5 = document.getElementById("b5")
    b6 = document.getElementById("b6")
    b7 = document.getElementById("b7")
    b8 = document.getElementById("b8")
    b9 = document.getElementById("b9")
    unblockField([b1,b2,b3,b4,b5,b6,b7,b8,b9])
}
function myfunc() {
    iteration+=1;
    const xWin = succsesValueSet.has(xScore)
    const oWin = succsesValueSet.has(oScore)
    if (xWin || oWin){
        window.alert(`${xWin? 'X player': 'O player'} are a winner`);
        reset();
    } else if (iteration === 9){
        window.alert('Nobody are a winner');
        reset();
    }
}

function reset() {
    if (!b1) {
        startGame()
    }
    b1.value = " ";
    b2.value = " ";
    b3.value = " ";
    b4.value = " ";
    b5.value = " ";
    b6.value = " ";
    b7.value = " ";
    b8.value = " ";
    b9.value = " ";
    location.reload();
}

let flag = 1;
function setValue() {
    if (flag === 1) {
        this.value = "X";
        this.disabled = true;
        flag = 0;
        xScore += valueField.get(this.id);
    }
    else {
        oScore += valueField.get(this.id);
        this.value = "O";
        this.disabled = true;
        flag = 1;
    }
}
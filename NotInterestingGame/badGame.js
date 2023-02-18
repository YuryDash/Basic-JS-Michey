
let num = 0;
let money = 100;
let duoble;


function incrementClick() {
    RERENDER(++num, --money);
}

function RERENDER(value, moneys) {
    document.getElementById("a0").innerHTML = value;
    document.getElementById("a00").innerHTML = moneys
    duoble = moneys
}

function resetCounter() {
    num = 0;
    RERENDER(num, duoble + 10);
}

function game(numBtn) {
    const winnerNumber =  Math.ceil( Math.random() * 11 )
    console.log(winnerNumber)
    switch (numBtn) {
        case winnerNumber :
            alert (`-YOU ARE WON, ON THE ${num = num -1} ATTEMPT-`)
            resetCounter()
        default :
         return 'lol'
    }

}

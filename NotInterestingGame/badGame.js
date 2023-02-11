

let num = 0;
function incrementClick() {
    RERENDER(++num);
}

function RERENDER(value) {
    document.getElementById("a0").innerHTML = value;
}

function resetCounter() {
    num = 0;
    RERENDER(num);
}



function game(numBtn) {
    const winnerNumber =  Math.ceil( Math.random() * 10 )
    console.log(winnerNumber)
    switch (numBtn) {
        case winnerNumber :
            alert (`-YOU ARE WON, ON THE ${num = num -1} ATTEMPT-`)
            resetCounter()
        default :
         return 'lol'
    }

}



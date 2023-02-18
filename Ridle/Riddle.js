
let countWindow = 3
let count = 0;
document.querySelector("span").innerText = countWindow.toString();

const riddles = [
    {
        id: 1,
        question: 'The  . . . .(  )  method executes a provided function once for each array element.',
        correctAnswer: 'foreach',
        hints: ["This is iterative Method", "function once for each element in an array in ascending-index order"]
        // checkAnswer(answer){
        //    return  answer === 'forEach' ? 'you win' : 'you looser'
        // }
    },
    {
        id: 2,
        question: 'Method  . . . . ()  is to return the sum of all the elements in an array:',
        correctAnswer: 'reduce',
        hints: ["(a,b) => a + b", "re...(( a, b ) => a + b )"]
    },
    {
        id: 3,
        question: 'Кто такой квадралицый ?',
        correctAnswer: 'буйлов',
        hints: ["ОЛЕКСАНЬДЕР", "ПетушинаяГолова"]
    },
    {
        id: 4,
        question: 'Самый успешный в мире Александер успехов которого никому не постичь!!!',
        correctAnswer: 'романюк',
        hints: ["Великолепный боец, строитель, мойщик, кровельщик, каменьщик, кабельщик, сантехник , телохранитель, правовед, кенолог, полиглот," +
        "великолепный водитель, вывшибала , геймер, покоритель женских сердец, рассомаха, ЧЭМПИЁН РАСЕИ, ЧЭМПИЁН ЕВРОППЫ , политолог с 2014 года," +
        "плавец, чемпион ММА, чемпион МУАЙ ТАЙ, чемпион по БОРЬБЕ, чемпион по БОЕВОМУ САМБО, чемпион по БОКСУ," +
        " отлчник в школе (9 баллов) делающий 3 ошибки в слове (кЕрпЕчЯ), непокоренный и несломленный, НЕПРЕВЗАЙДЕННЫЙ!!! => ", "пиздаболл..."]
    }
];

function incrementCLick(){
    RERENDER(--countWindow)
}

function RERENDER(countWindow){
   return  document.getElementById('count').innerHTML = countWindow
}

const counter = () => {
     return ++count
 }

// const counterWindow = () => {
//     console.log(countWindow)
//     return --countWindow
// }

window.onload = function () {
    document.getElementById('riddle').innerText = riddles[3].question;

    switch (riddles.map(el => el.id)) {
        case "1":
            return document.getElementById('riddle').innerText = riddles[0].question;
        case "2":
            return document.getElementById('riddle').innerText = riddles[1].question;
        case "3":
            return document.getElementById('riddle').innerText = riddles[2].question;
        case "4":
            return document.getElementById('riddle').innerText = riddles[3].question;
    }
}

let guessedAnswer;

function check() {
    if (counter() <= 3){
        const input = document.getElementsByTagName('input')[0];
        guessedAnswer = input.value.toLowerCase();
        incrementCLick()
        // console.log(guessedAnswer)
    }


    if (guessedAnswer.trim() === riddles[3].correctAnswer) {
        alert('suchenok sharit')


    } else {
// = === === === === = === = === = = = = = = = = = = = = = = = = = = =
    }
}


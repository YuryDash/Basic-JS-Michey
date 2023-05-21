
let countWindow = 3
let count = 0;
document.querySelector("span").innerText = countWindow.toString();
let answerNum = 0;
const riddles = [
    {
        id: 1,
        question: 'The  . . . .(  )  method executes a provided function once for each array element.',
        correctAnswer: 'foreach',
        hints: ["This is iterative Method", "Function once for each element in an array in ascending-index order"]
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


 function riddleText(answerNum) {
     return document.getElementById('riddle').innerText = riddles[answerNum].question;
 }
 function riddleHints() {
    if ((count - 1) < 2){
        return document.getElementById('hints').innerText = riddles[answerNum].hints[count-1];
    } else {
        return document.getElementById('hints').innerText = " -LOSHOK-"
    }
 }
riddleText(answerNum)



let guessedAnswer;


function check() {
    console.log('keyStart')
    if (counter() <= 3){
        guessedAnswer = document.getElementsByTagName('input')[0].value.toLowerCase();
        incrementCLick()
    }
    if (guessedAnswer.trim() === riddles[answerNum].correctAnswer && guessedAnswer !== '') {
        answerNum++
        riddleText(answerNum)
        countWindow = 3
        document.getElementById('count').innerHTML = countWindow
        count = 0
        alert('suchenok sharit')
    } else {
        riddleHints(count)
    }
}

function checkKey() {
    document.getElementsByTagName('input')[0].addEventListener('keydown', function (e) {
        return e.key === "Enter" ? check() : console.log('keyINTO')
    });
}

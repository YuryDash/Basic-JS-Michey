let arrayForWhile = [1, 2, 3, 4, 5]
// function copyArrAndDoSmth(arr, funcNums) {
//     let someArray = []
//     for (let i = 0; i < arr.length; i++) {
//         someArray.push(funcNums( arr[i] ))
//     }
//     return someArray;
// }
// //copyArrAndDoSomth = функция высшего порядка
//
// console.log(copyArrAndDoSmth(arrayForWhile, multNums));
// console.log(copyArrAndDoSmth(arrayForWhile, minusNums));
// console.log(copyArrAndDoSmth(arrayForWhile, sumNums));


// function factorial(n) {
//     if(n === 0) return 1
//     return n * factorial(n - 1)
// }
// console.log(factorial(4))
//
// let counter = 0;
// function repeater(char) {
//     counter++;
//
//     if (counter === 5){
//         counter = 0;
//         return char;
//     }
//
//     return char + ", " +repeater(char);
// }
// console.log(repeater('Х'));
// console.log(repeater('10100101'));

//Closure функция возвращает другие функции
//Возвращаемая функция запоминает Scope.


// function hello(name) {
//     const helloName = () => console.log('hello' , name);
//     return helloName;
// }
// const hi = hello('WORLD')
// const hi2 = hello('John')
// hi2()
// hi()


// function outer() {
//     let counter = 0;
//     function inc() {
//         console.log(++counter);
//     }
//     return inc;
// }
// let a = outer();
// let b = outer();
// a()
// a()
// a()
// a()
// b()
// b()


// function print() {
//     console.log(this), 2000
// }
// print()

// const cat = {
//     name: "Timoshka",
//     say(){
//         const greeting = () => console.log(this.name)
//         setTimeout(greeting, 1000)
//     }
// }
// cat.say()
//
// const cat2 = {
//     name: "Timoshka",
//     say(){
//         setTimeout(function (){ console.log(this.name) }, 1000 )
//     }
// }
// cat2.say()
// // Arrow fn не создает контекста!!!

// const developer = {
//     name: "Mike",
//     salary: 2500,
//     getBonus(sum) {
//         return console.log(this.name, 'has a salary this month', this.salary + sum)
//     }
// }
// console.log(developer.getBonus(250));
//
// const manager = {
//     name: "Nastya",
//     salary: 1800,
// }
//call , apply , bind
// developer.getBonus.call(manager, 150)// передаем другой контекст. 1ый параметр обьект , 2ой и последующие агрументы.
// developer.getBonus.call(manager, [150])// передаем другой контекст, но в массиве[150, 200, 250... и т.д.]
// manager.getBonus = developer.getBonus.bind(manager);//добавляет метод getBonus
// manager.getBonus(2001);


function censor() {
    let arrForCensor = [];
    return function (strOme, strTwo = '') {
        if (strTwo) {
            arrForCensor.push([strOme, strTwo])
        } else {
            for (let pair of arrForCensor){
                strOme = strOme.replace( new RegExp(pair[0], 'gi'), pair[1] )
            }
            return strOme
        }
    }

}

let a = censor();
console.log(a('lol', 'nastasya'));
console.log(a('Моя жена lol , она моя lol :D'));




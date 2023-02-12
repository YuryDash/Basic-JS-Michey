
// objects повторенье мать...

const developer = {
    name: "Vasiliy",
    surname: "Petrov",
    age: 30,
    skills: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS"
    ],
    isMarried: true,
    addAge() {
        this.age++
    },
    getMarried(){
        this.isMarried = true;
    },
    getDivorced(){
        this.isMarried = false
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

console.log(getRandomInt(1, 100));

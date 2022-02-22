// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, manufacturer, yearManufacture, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearManufacture = yearManufacture;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         this.info = function () {
//             for (let key in this) {
//                 if (typeof this[key] !== 'function') console.log(`${key}-${this[key]}`)
//             }
//         };
//         this.newMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed
//         };
//         this.changeYear = function (newValue) {
//             this.yearManufacture = newValue
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver;
//
//         }
//
// }
//
// let cars = new Car ('Porsche','German',2021,200,530 )
// console.log(cars);
// cars.drive();
// cars.info();
// cars.newMaxSpeed(250);
// cars.drive();
// cars.changeYear(2022)
// cars.info();
// cars.addDriver('Kokos')
// console.log(cars)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, yearManufactur, maxSpeed, engineCapacity, drive) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearManufactur = yearManufactur;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     };
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info () {
//         for(let key in this){
//             console.log(`${key} - ${this[key]}`)
//
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = this.maxSpeed +newSpeed
//     }
//     changeYear (newValue){
//         this.yearManufactur= newValue
//
//     }
//     addDrive (drive){
//         this.drive= drive
//     }
// }
// let cars =new Car('Porsche','German',2021,200,530 )
// console.log(cars)
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(250);
// cars.drive();
// cars.changeYear(2022)
// cars.info();
// cars.addDriver('Kokos')
// console.log(cars)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.footsize = foot;

    }
}
let arryPopel= [
    new Popelushka('Katya',31 ,39),
    new Popelushka('Ksenya', 25, 35),
    new Popelushka('Olya', 27, 37),
    new Popelushka('Oksana', 23, 34),
    new Popelushka('Lera', 33, 37),
    new Popelushka('Monika', 25, 33),
    new Popelushka('Vasylyna', 45, 41),
    new Popelushka('Ganusya', 29, 38),
    new Popelushka('Galyna', 24, 36),
    new Popelushka('Magda', 27, 35),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class  Princ{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let princ = new Princ('Artur', 27, 39)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let para =(arryPopel, princ)=>{
    for (const i of arryPopel){
     if (i.footsize === princ.shoe)
         return `Your popelushka ${i.name}`

    }
}
document.write(para(arryPopel,princ) )
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const emptyPrincess = arryPopel.find((i) => i.footsize === princ.shoe);
console.log(emptyPrincess);
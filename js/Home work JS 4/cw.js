// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function nums(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3){
//         document.write(num1)
//     }else if (num2 < num1 && num2 < num3){
//         document.write(num2)
//     }else {
//         document.write(num3)
//     }
// }
// nums (100,200,500)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function nums (num1 , num2, num3){
//     if (num1 > num2 && num1 > num3){
//         document.write(num1)
//
//     }else if (num2 > num3 && num2 > num1)
//     {
//         document.write(num2)
//
//     }else {
//         document.write(num3)
//
//     }
// }
// nums (100,200,500)


// - створити функцію яка повертає найбільше число з масиву

// function numMax (x){
//     let max = x[0];
//     for (let max1 of x) {
//         if(max1 > max){max=max1}
//     }
//
//
//     return max
// }
// let maxNum = [100,200,6000,400,6000]
// document.write(numMax(maxNum))

// - створити функцію яка повертає найменьше число з масиву

// function numMax (x){
//     let max = x[0];
//     for (let max1 of x) {
//         if(max1 < max){max=max1}
//     }
//
//
//     return max
// }
// let maxNum = [100,200,3000,50,6000]
// document.write(numMax(maxNum))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrayNum = [ 1,2,10];
// function arrayElements (array){
//     let sum = 0
//     for (const arrayElement of array) {
//         sum+= arrayElement
//
//     }
// return sum
// }
// document.write(arrayElements(arrayNum))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayNum = [ 1,2,10];
// function arrayElements (array){
//     let sum = 0
//     for (const arrayElement of array) {
//         sum+= arrayElement
//
//     }
// return sum/array.length
// }
// document.write(arrayElements(arrayNum))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numberOfNumbers (vas){
// let max = arguments[0];
// let min = arguments[0];
//     for (let argument of arguments) {
//         if (argument > max){
//         max = argument}
//         else if (argument < min){
//         argument = min}
//     }
//     console.log(max)
//     return min
//     }
//     document.write(numberOfNumbers(100,2,400,500,1000))

// - створити функцію яка заповнює масив рандомними числами
// function random (lenght){
//     let array = []
//     for (let i=0; i < lenght; i++ ){
//         array.push (Math.random()*100);
//     }
//     return array
// }
// document.write(random(500))
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomNum (length,limit){
//     let array = []
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*limit));
//     }
//     return array
// }
// document.write(randomNum(1,100))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function reverseArray(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[arr.length - i - 1];
//     }
//     return newArr;
// }
//
// console.log(reverseArray(mas));

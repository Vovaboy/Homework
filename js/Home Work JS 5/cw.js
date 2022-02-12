// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let nums = (num1, num2, num3)=>{
//     if (num1<num2 && num1<num3){
//         document.write(num1)
//     }else if ( num2<num1 && num2<num3 ){
//         document.write(num2)
//     }else {
//         document.write(num3)
//     }
// }
// nums( 100,200,500)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let nums = (num1, num2, num3)=>{
//     if (num1>num2 && num1>num3){
//         document.write(num1)
//
//     }else if (num2 > num1 && num2>num3 ){
//         document.write(num2)
//     }else{
//         document.write(num3)
//     }
// }
// nums(110,200,500)
// - створити функцію яка повертає найбільше число з масиву
// let maxArray = [100,200,3000,50,6000];
// let arrayMax =  (array)=>{
//     let max = array [0];
//     for (const max1 of array) {
//         if (max1 >max){
//             max=max1;
//         }
//
//     }
//     return max
// }
// document.write(arrayMax(maxArray))
// - створити функцію яка повертає найменьше число з масиву
// let minArray =[100,200,3000,50,6000];
// let arrayMin = (array)=>{
//     let min=array[0];
//     for (const minElement of array) {
//         if (minElement<min){
//             min=minElement
//         }
//
//     }
//     return min
// }
// document.write(arrayMin(minArray))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrayNum = [1,2,10,22];
// let arrayElem =(array)=>{
//     let sum=0
//     for (const arrayElement of array) {
//         sum+=arrayElement
//
//     }
//     return sum
// }
// document.write(arrayElem(arrayNum))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrayNum =[1,2,10,22];
// let numArray =(array)=>{
//     let sum=0
//     for (const arrayElement of array) {
//         sum+=arrayElement
//
//     }
//     return sum/array.length
// }
// document.write(numArray(arrayNum))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write( minMax(-100, 200, 300, 1004400))
// - створити функцію яка заповнює масив рандомними числами
// let funRandom =(length)=>{
//     let array = [];
//     for (let i=0; i<length;i++){
//         array.push(Math.round(Math.random()*100));
//     }
//     return array
// }
// document.write(funRandom(2))
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.

// const randomNumber = (length,limit) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(3,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array = [1, 2, 3, 4]
const reverse = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = arr[i];
    }

    return newArr;
}
console.log(reverse(array));
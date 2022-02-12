// 1 - створити функцію яка обчислює та повертає площу прямокутника
// let calc = (a , b)=> a*b
// console.log(calc(10,10))

// 2 - створити функцію яка обчислює та повертає площу кола
// let circle = (r) => {
// let x = r**2;
// return 3.14 * x;
// }
// console.log(circle(10))
// document.write('Площa кола: ' + circle(10))


// 3 - створити функцію яка обчислює та повертає площу циліндру
// let calc = (a,b) => {
//     return 2 * 3.14 * a * b;
// }
// console.log(calc(10, 10))

// 4 - створити функцію яка приймає масив та виводить кожен його елемент

// let mas = [1,2,3,'Vasya']
// let arr = (mas)=> {
// for (i=0;i<mas.length;i++){
//     document.write(mas)
// }
//
// }
// arr(mas)


// 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let arr = (text)=>{
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text})</p>`);
// }
// arr ('Vanya');
// arr("Katya");

// 6- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let arr = (text)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
//
//
// }
// arr ('Okten')

//7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
// let  arr = (text,num) =>{
//     document.write(`<ul>`)
//     for(let i = 0; i < num; i++){
//     document.write(`<li>${text}</li>`)}
//     document.write(`</ul>`)
// }
// arr('Okten', 20)


// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let anyArray = [true,'Vasya', 2022, 'Petya'];
//
// const primitives = (array) => {
//     document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(anyArray);

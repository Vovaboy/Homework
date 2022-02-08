// --створити масив з:
//  - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let num = [ 5 , 6, 4, 10, 7,];
// let text= ['3', '5','2', '322','21'];
// let bools= [32, '44' , true, false,]
// console.log(num);
// console.log(text);
// console.log(bools);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let num = [11,22,33,44,55 ];
// console.log(num[3]);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i= 0 ;  i<10; i++) {
// document.write(`<div><p>Hello World</p></div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0 ; i<10; i++) {
//     document.write(`<div>${i}<p>Hello World</p></div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while ( i < 20){
//     document.write(`<div><h1>Hello World</h1></div>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while ( i < 20){
//     document.write(`<div>${i}<h1>Hello World</h1></div>`)
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let num = [11,22,33,44,55,66,77,88,99,10]
// for (i = 0; i<num.length; i++ )
// {console.log(num[i])}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let string = ['vasya', 'dima', 'lena','ira','sad','dsdsa','rerer','hghg','des'];
// for (i = 0 ; i<string.length; i++){
//     console.log(string[i])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let x = [ 22, '44', true, 55, false, 'string', 44, 'Okten',];
// for (i = 0 ; i < x.length; i++){
//     console.log(x[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let x =[22, '44', true, 55, false, 'string', 44, 'Okten',]
// for (i = 0 ; i < x.length; i++){
//     if (typeof x[i] === 'boolean') {
//                 console.log(x[i]);
//             }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let x =[22, '44', true, 55, false, 'string', 44, 'Okten',]
// for (i = 0 ; i < x.length; i++){
//     if (typeof x[i] === 'number') {
//         console.log(x[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let x =[22, '44', true, 55, false, 'string', 44, 'Okten',]
// for (i = 0 ; i < x.length; i++){
//     if (typeof x[i] === 'string') {
//         console.log(x[i]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let x = [];
// x [0] = 22;
// x [1] ='44';
// x [2] = true;
// x [3] = 55;
// x [4] = false;
// x [5] = 'string';
// x [6] = 44;
// x [7] = 'Okten';
// x [8] = true;
// x [9] = 65;
// x [10] = 'Vasya';
// for (let i = 0; i < x.length; i++ ){
//     console.log(x[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i =0; i < 10; i++) {
// console.log(  + i + ' ')
//     document.write(+ i + '')
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i < 100;i++){
//     console.log(+ i+ '')
//     document.write(+ i + '')}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i < 100;i+=2){
//     console.log( i +'')
//     document.write( i + '')}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0; i < 100;i+=2) {
//     console.log( i +'')
//     document.write( i + '')}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0; i < 100;i++)
//  if(i % 2 === 1){
//     console.log( i +'')
//     document.write( i + '')}
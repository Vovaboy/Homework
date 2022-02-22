// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let name = (string, symbol) => {
//     let arr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) arr.push(item);
//         })
//         document.write(`<li>`)
//         document.write(arr.join(' '))
//         document.write(`</li>`)
//     }
// }
// name (n1,'.')
// name (n2, '-')
// name (n3,'_')

// let  arr = (text,num) =>{
//    document.write(`<ul>`)
//    for(let i = 0; i < num; i++){
//    document.write(`<li>${text}</li>`)}
//    document.write(`</ul>`)}

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (length, num ) => {
//     let array = [];
//     for (let i = 0; i < length; i ++){
//         array.push(Math.floor(Math.random()*num))
//     }
//     return array
// }
// let result = random(3, 100)
// document.write(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let random = (length, num ) => {
//     let array = [];
//     for (let i = 0; i < length; i ++){
//         array.push(Math.floor(Math.random()*num))
//     }
//     return array.sort((a,b)=> a-b);
// }
// let result = random(3, 100)
// document.write(result)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random = (length, num ) => {
//     let array = [];
//     for (let i = 0; i < length; i ++){
//         array.push(Math.floor(Math.random()*num))
//     }
//     return array.filter(emp => emp % 2===0 )
// }
// let result = random(3, 100)
// document.write(result)


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random = (length, num ) => {
//     let array = [];
//     for (let i = 0; i < length; i ++){
//         array.push(Math.floor(Math.random()*num))
//     }
//     return array.map(emp => emp.toString())
// }
// let result = random(3, 100)
// document.write(result)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums =(arr, direction) => {
//     if (direction === 'ascending') return arr.sort((a,b)=> a-b);
//     if (direction === 'descending') return  arr.sort((a,b) => b - a );
//
// }
// console.log(sortNums([1,2,34,5,54,546,-23,232],'ascending'))
// //
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a,b)=>a.monthDuration- b.monthDuration);
// console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let sort  = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(sort)
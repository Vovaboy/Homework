// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let one = 'hello world';
// console.log(one.length);
//
// let two = 'lorem ipsum';
// console.log(two.length);
//
// let three = 'javascript is cool'
// console.log(three.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world','lorem ipsum' , 'javascript is cool'
// let one = 'hello world';
// let upOne = one.toLocaleUpperCase();
// console.log(upOne);
//
// let two ='lorem ipsum';
// let upTwo = two.toLocaleUpperCase();
// console.log(upTwo)
//
// let three = 'javascript is cool';
// let upThree = three.toLocaleUpperCase()
// console.log(upThree)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let one = 'HELLO WORLD';
// let upOne = one.toLowerCase();
// console.log(upOne);
//
// let two = 'LOREM IPSUM';
// let upTwo = two.toLowerCase();
// console.log(upTwo);
//
// let tree = 'JAVASCRIPT IS COOL';
// let upTree = tree.toLowerCase();
// console.log(upTree)
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let upStr = str.trim()
// console.log(upStr)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//    let string = (str) => {
//         return str.split(' ');
//     }
//     let str = 'Каждый охотник желает знать';
//     let arr = string(str);
//     console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let delete_characters = (str, length) => {
//     return str.substr(0, length);
// };
// let str = 'Каждый охотник желает знать'
// document.writeln(delete_characters(str, 6));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));
// document.write(insert_dash(string));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let name = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// }
// document.write(name('hello okten'));
//

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str)=>{
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
//      };
//      document.write(capitalize('каждый охотник желает знать'));
//

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let main_header = document.getElementById('main_header');
// main_header.innerText = 'Lorem ';
// // b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul');
// console.log(ul)
// ul[0].style.width = '400px';
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let link = document.getElementsByClassName('linkList');
// for (const linkElement of link) {
//     linkElement.style.widht  ='50%';
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let text = document.getElementsByClassName('listElement2');
// console.log(text);
// text[0].innerHTML = '<a href=""><b>NEW TEXT</b></a>>'
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let liAll = document.getElementsByTagName('li');
// for (const liAllElement of liAll) {
//     liAllElement.style.backgroundColor = "grey";
//
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     aAllElement.classList.add('anchor')
//     console.log(aAllElement);
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aAll = document.getElementsByTagName('a');
//  console.log(aAll);
//  for (let aAllElement of aAll) {
//      console.log(aAllElement);
//      if (aAllElement.innerText === 'link3') {
//          aAllElement.style.fontSize = '40px';
//      }
//  }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (const aAllElement of aAll) {
//     console.log(aAllElement){
//         let newA = aAllElement.innerText
//         aAllElement.classList.add(`element${newA}`)
//     }

// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeadersList = document.getElementsByClassName('sub-header');
// for (const item of subHeadersList) {
//     item.style.background = prompt('enter color');
//
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// let subHeaders = document.getElementsByClassName('sub-header');
// for (const subHeader of subHeaders) {
//     if (subHeader.innerText === 'content 2 segment') {
//         subHeader.style.color = prompt('color?');
//     }
//
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName('content_1');
// console.log(content_1[0].innerText);
// content_1[0].innerText = prompt('enter Text')
// l) отримати елементи p та змінити їм padding на 20px
// let elementP = document.getElementsByTagName('p');
// for (const elementPElement of elementP) {
//     elementPElement.style.padding = '20px';
//     elementPElement.style.border = '1px solid red ';
//
//
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let tx = document.getElementsByClassName('text2' );
// console.log(tx)
// tx[0].innerText = 'ser-2021'

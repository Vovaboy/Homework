// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".

// let clik = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     clik.style.display = 'none';
// }

//=============================================================================
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn= document.getElementById('button');
// button.onclick = function () {
//     btn.style.display = 'none'
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('button').onclick = function (){
//     let age = document.getElementById('age').value;
//     if (!age){
//         alert('Ви не ввели свого віку ');
//     } else if (+age < 18){
//         alert('Вибачте вам мало років')
//     } else {
//         alert('Вітаємо на сайті')
//     }
// }
//


//================================================================================
// - Создайте меню, которое раскрывается/сворачивается при клике
// let menuElem = document.getElementById('sweeties');
// let titleElem = menuElem.querySelector('.title');
//
// titleElem.onclick = function() {
//     menuElem.classList.toggle('open');
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {name: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {name: 'lorem blavlalv', body: 'lorem ipsum dolo sit ameti vvbdvd'},
//
// ];
//
// let divFather = document.createElement('div');
// for (const item of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = item.name;
//     p.innerHTML = item.body;
//     btn.innerHTML = 'Закрий мене'
//
//     btn.onclick = () => {
//         p.classList.add('pHidden');
//
//     }
//     div.append(h3, p, btn);
//     divFather.append(div, hr);
// }
// document.body.appendChild(divFather)
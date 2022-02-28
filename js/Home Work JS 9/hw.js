// Все робити за допомоги js.
// - створити блок,
// let div = document.createElement('div');



// - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'gren';
// div.style.color = 'red';
// div.style.fontSize = '40px';



// - додати цей блок в body.
// document.body.appendChild(div);


// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true));


//==============================================================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const courses of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${courses.title} ${courses.monthDuration}`;
//     document.body.appendChild(divElement)
//
// }



//==============================================================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     h1.innerText = coursesAndDurationArrayElement.title;
//     p.innerText  = coursesAndDurationArrayElement.monthDuration
//
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// }



//==============================================================
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts'];
//
// let ulElement = document.getElementsByClassName('menu')[0];
//
// for (let string of arr) {
//     let li = document.createElement('li');
//     li.innerText = string;
//     ulElement.append(li)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Введіть число від 0 до 59 ');
//
// if (time >= 0 && time <= 14){
//     console.log('Перша четверть');
// }
// else if (time >=14 && time <= 29){
//     console.log('Друга четверть ');
// }
// else if (time >=29 && time <= 44){
//     console.log('Третя четверть');
// }
// else if (time >=44 && time <=59){
//     console.log('Четверта четверть')
//
// }
// else {
//     console.log('wtf???')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt('Введіть число від 1 до 31');
//
// if ( day>=1 && day<=10){
//     console.log('Перша декада');
// }
// else if  (day >=10 && day <=20){
//     console.log ('Друга дека');
// }
// else if (day >=20 && day <=31){
//     console.log('Третя дукада ');
// }
// else {console.log('wtf vasya?')
// }



// - У нас є змінна test яка дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = 'text'
// if (test ) {
//     console.log('Вірно')}
// else  {
//     console.log('Неправильно')}


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('Введіть число ')
// if ( a !==0){
//     console.log('Вірно')
// }
// else console.log('Невірно')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let scheduleForTheWeek = +prompt('Розклад на тиждень');
// switch (scheduleForTheWeek) {
//     case 1:
//         console.log('Понеділок:сходити на роботу')
//         break;
//     case 2:
//         console.log('Вівторок: сходити на роботу')
//         break;
//     case 3:
//         console.log('Середа: сходити на роботу')
//         break;
//     case 4:
//         console.log('Четвер: сходити на роботу')
//         break;
//     case 5:
//         console.log('Пятниця: сходити на роботу')
//         break;
//     case 6:
//         console.log('Субота : бухнути ')
//         break;
//     case 7:
//         console.log('Неділя: відійти )')
//         break;
//     default:
//         console.log('wtf')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt('Введіть дні');
//
// if(year % 4 === 0){
//     console.log('Рік Високосний');
// }else {
//     console.log('Рік не Високосний');
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let value = prompt('Яка «офіційна» назва JavaScript?', '');
//
// if (value === 'ECMAScript') {
//     alert('Вірно !');
// } else {
//     alert('Не знаете? ECMAScript!');
// }

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let  cutString = (str, n)=> {
//     var res = [];
//     for(var i = 0 ; i < str.length; i += n) {
//         res.push(str.substr(i, n));
//     }
//     return res;
// }
//
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//     наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let emal = 'someemail@gmail.com';
// let validFn = (mail) => {
//     let mailLow = mail.toLowerCase()
//     let sumbols = [mailLow.includes('@'), mailLow.includes('.')]
//     let ind = [mailLow.indexOf('@'), mailLow.indexOf('.')]
//     if (sumbols) {
//         if (ind[1] - ind[0] > 2 && ind[0] > 3 && ind[1] - ind[0] < 7) {
//             console.log("Вітаю ви ввели email вірно")
//         } else {
//             console.log("Не вірно")
//         }
//     } else {
//         console.log('Невірний email')
//     }
// }
// validFn(emal)

// - є масивlet coursesArray
// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let sortCoursesArray = coursesArray.sort((a,b) =>{
//     return b.modules.length - a.modules.length
// })
// console.log(sortCoursesArray)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// //     let symb = "о", str = "Астрономия это наука о небесных объектах";
// // document.writeln(count(str, symb)) // 5
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// let count = (str, stringsearch)=>{
// let counter =[];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch){
//             counter.push(str[i])
//         }
//     }
//     return counter.length
// }
//     let symb = "о"
//     let strrr = "Астрономия это наука о небесных объектах";

// document.write(count(strrr, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
//
// let cutString=(str, n)=> {
//     return str.split(" ").splice(0, n).join(" ");
// }
//
// document.writeln(cutString(str, 5))

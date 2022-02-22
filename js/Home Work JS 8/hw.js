// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentById = document.getElementById ('content');
console.log(contentById);

// -- отримує текст з блоку з id "rules"
let rulesById = document.getElementById('rules');
console.log(rulesById);
// -- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerHTML = '<p> TEST Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae. </p>';
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesById.innerHTML =' <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, suscipit? </p>'
// -- змініть кожному елементу колір фону на червоний
let childrenBackground = document.body.children;
for (const childrenBackgroundElement of childrenBackground) {
    childrenBackgroundElement.style.backgroundColor = 'red'
    
}
// -- змініть кожному елементу колір тексту на синій
let childrenColor = document.body.children;
for (const childrenColorElement of childrenColor) {
    childrenColorElement.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById('rules');
console.log(rulesId.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classRules = document.getElementsByClassName('fc_rules');
for (const cl of classRules) {
    cl.style.color = 'red'

}

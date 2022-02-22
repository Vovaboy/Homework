// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone ){
//     this.id = id;
//     this.name= name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arrUser = [
//    new User (1, 'Vasya', 'Pupkin', 'pupkin.@gmail.com', 48793360811),
//    new User (2, 'Olya', 'Pup', 'oly.@gmail.com', 48793360812),
//    new User (3, 'Vova', 'Bin', 'vova.@gmail.com', 48793360813),
//    new User (4, 'Nina', 'Lena', 'nina.@gmail.com', 48793360834),
//    new User (5, 'Lena', 'Nina', 'lena.@gmail.com', 48793360837),
//    new User (34, 'Stepan', 'Stepsnov', 'step.@gmail.com', 48793360878),
//    new User (7, 'Piotr', 'Zol', 'piotr.@gmail.com', 48793360809),
//    new User (8, 'Erik', 'Gurt', 'erik.@gmail.com', 48793360823),
//    new User (9, 'Katya', 'Dibr', 'katya.@gmail.com', 48793360824),
//    new User (10, 'Oksana', 'Svob', 'oksana.@gmail.com', 48793360825)
//
// ]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUser = arrUser.filter((arr) => {
//     if (arr.id % 2 === 0 ){
//       return arr
//     }
// })
// console.log(filterUser)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//  arrUser.sort((a,b) => a.id - b.id)
// console.log(arrUser)


//     - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//        this.phone = phone;
//        this.order = order;
//     }
// }
// створити пустий масив, наповнити його 10 об'єктами Client
// let clientArray = [
//     new Client(1, 'Vasya', 'Pupkin', 'pupkin.@gmail.com', 48793360811, 'apple watch '),
//     new Client (2, 'Olya', 'Pup', 'oly.@gmail.com', 48793360812, 'iPhone 13 pro '),
//     new Client(3, 'Vova', 'Bin', 'vova.@gmail.com', 48793360813, 'MacBook, lesr'),
//     new Client(4, 'Nina', 'Lena', 'nina.@gmail.com', 48793360834, 'game'),
//     new Client(5, 'Lena', 'Nina', 'lena.@gmail.com', 48793360837, 'ps5'),
//     new Client(6, 'Stepan', 'Stepsnov', 'step.@gmail.com', 48793360878,'Tv, 55'),
//     new Client(7, 'Piotr', 'Zol', 'piotr.@gmail.com', 48793360809, 'laptop'),
//     new Client(8, 'Erik', 'Gurt', 'erik.@gmail.com', 48793360823,'asus 303'),
//     new Client(9, 'Katya', 'Dibr', 'katya.@gmail.com', 48793360824,'MSI'),
//     new Client(10, 'Oksana', 'Svob', 'oksana.@gmail.com', 48793360825,'book'),
//
// ]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClients = clientArray.sort((a,b) => a.order.length - b.order.length);
// console.log(sortClients)
//



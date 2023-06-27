// флаги и дескрипторы свойств

let user = {
    name: 'Steven',
    salary: 1000
}

// Ключ name:
// value            - 'Steven'  |   Значение свойства
// writable         - true      |   Право на изменение значения свойства
// enumerable       - true      |   Право на итерацию в цикле (и в выводе объекта)
// configurable     - true      |   Право на удаление и последующие изменения дескрипторов

// Object.getOwnPropertyDescriptor(user, 'name') // метод, который позволяет получить полную информацию о свойстве объекта
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

//--------------------
//! Метод, который позволяет менять дескрипторы у свойства объекта

// Отключение возможности переопределения значения свойства name
Object.defineProperty(user, 'name', {enumerable: false})
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// user.name = 'Tigran'
// console.log(user);

//===========================================================
// Задача: измените у всех сво-св право на удаление и переопределения значения у obj

let obj = {
    name: 'Steven',
    age: 16,
    isJob: false,
    salary: 5000
}

//! нельзя передавать сразу несколько свойств
// Object.defineProperty(obj, 'name', 'age', 'isJob', 'salary', {enumerable: false, configurable:false})
// console.log(Object.getOwnPropertyDescriptor(obj, 'name', 'age', 'isJob', 'salary')) // Error


for (const elem in obj) {
    Object.defineProperty(obj, elem, {writable: false, configurable:false})
}



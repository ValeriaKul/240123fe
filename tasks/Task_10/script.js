//* 1) реализовать сохранение в localStorage ключа test, и значения 100.
localStorage.setItem("test", 100);

//* 2) реализовать получение ключа test из localStorage, и вывод его в консоль.
console.log(localStorage.getItem("test"));

//* 3) очистить ключ test в localStorage.
localStorage.removeItem("test");

//* 4) реализовать запоминание времени первого посещения сайта, и вывод его в консоль. То есть, на событие загрузки документа добавить обработчик, который:
//* проверит наличие в localStorage ключа firstEnter.
//* если его нет - запомнит в localStorage значение текущего времени (использовать конструкцию let firstEnter = Date.now();), с ключом firstEnter.
//* если такой ключ есть - вывести его в консоль.
const btn = document.querySelector("button");
const inp = document.querySelector("input");

window.onload = function () {
    const firstEnter = localStorage.getItem("firstEnter");
    if (!firstEnter) {
        localStorage.setItem("firstEnter", Date.now());
    } else {
        console.log(firstEnter);
    }
    const inputValue = localStorage.getItem("inputValue");
    if (inputValue) {
        inp.value = inputValue;
    }
};
/* const firstEnter = Date.now();
localStorage.getItem('firstEnter') ?? localStorage.setItem('firstEnter', firstEnter)
console.log(localStorage.getItem('firstEnter')); */

//* 5) реализовать сохранение значения инпута в localStorage, а именно:
// добавить под кнопку "Связаться с нами", инпут.
// на инпут, на событие потери фокуса, добавить обработчик, который сохранит в localStorage значение инпута (использовать ключ inputValue)
// на событие загрузки документа, добавить обработчик, который проверит наличие в localStorage ключа inputValue. Если такой имеется - то его значение записать в инпут.

inp.addEventListener("blur", (event) => {
  localStorage.setItem("inputValue", event.target.value);
});

let obj = {
    prop1: 'prop1',
    prop2: 'prop2'
}

localStorage.setItem('obj', JSON.stringify(obj))
const obj2 = JSON.parse(localStorage.getItem('obj'))
console.log(obj2);

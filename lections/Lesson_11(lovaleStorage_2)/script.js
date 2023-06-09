//запись объектов в LS
/* 
let obj = {
    name: "Alex",
    salary: 1000
} */

// localStorage.setItem('user', obj)

//--------------------
//* JSON.stringify()              // из JS object в JSON
//* JSON.parse()                  // из JSON в JS object

// localStorage.setItem('user', JSON.stringify(obj))
// let result = JSON.parse(localStorage.getItem('user'))
// console.log(result);

//--------------------
// let string = '[10,20,30,40,50,60]'

// Задание: добавьте в массив 2 новых элемента
// 0 в начало, и 70 в конце. Итоговую строку выведите в косноль
// -----
// Задача 3.2
// Продемонстрируйте пример записи объекта в LS и чтение его оттуда
// -----
/* const newString = JSON.parse(string)
newString.unshift(0);
newString.push(70);
localStorage.setItem('string',JSON.stringify(newString));
console.log(JSON.parse(localStorage.getItem('string')));
 */
// ---------------------------------
// Задача. Опишите две функции: writeLocalStorage(obj) и readLocalStorage.
// Функции должны записывать или считывать объекты в localStorage соответственно.

// writeLocalStorage - получает объект
// readLocalStorage  - возращает значение LS

// const writeLocalStorage = (obj) => {
//     localStorage.setItem('key', JSON.stringify(obj))
// }
// const readLocalStorage = () => {
//     return JSON.parse(localStorage.getItem('key'))
// }
//  writeLocalStorage({id:1, name: "Valeriia"})
// console.log(readLocalStorage());

// ------------------------------------------------------

//* Реализовать форму которая позволяет добавить новый элемент в список продуктов в массив.
//* Данные из массива должно отображться в интерфейсе при добавлении нового товара.

let products = JSON.parse(localStorage.getItem("products")) ?? [];

const form = document.querySelector("form");
const root = document.querySelector("#root");
let div_wrapper = document.createElement("div");
let clear_btn = document.createElement("button");

div_wrapper.className = "product_wrapper";
clear_btn.className = "clear_btn";
clear_btn.textContent = "Delete products";
root.append(clear_btn);

/* let products = [
  { id: 1, name: "Bike", price: 1000 },
  { id: 2, name: "Scooter", price: 2000 },
  { id: 3, name: "Rollers", price: 3000 },
]; */
clear_btn.onclick = () => {
  localStorage.removeItem("products");
  products = [];
  rerender(products);
};

form.onsubmit = (e) => {
  e.preventDefault();
  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data);
  data.id = Date.now();
  products.push(data);
  rerender(products);

  form.reset();
};

const rerender = (array) => {
  localStorage.setItem("products", JSON.stringify(products));
  div_wrapper.innerHTML = "";
  render(array);
};

const render = (array) => {
  for (let elem of array) {
    let div_elem = document.createElement("div");
    let p_elem_price = document.createElement("p");
    let p_elem_title = document.createElement("p");

    div_elem.ondblclick = () => {
      removeElem(elem.id);
    };

    div_elem.className = "product";
    p_elem_price.innerText = elem.price;
    p_elem_title.innerText = elem.name;

    div_elem.append(p_elem_title, p_elem_price);
    div_wrapper.append(div_elem);
  }
  root.append(div_wrapper);
};

function removeElem(id) {
  products = products.filter((elem) => elem.id !== id);
  rerender(products);
}

render(products);

// new Task:
// Добавить на разметке кнопку, которая будет очищать данные на стороне интерфейса и LS соотсветсвенно

//! Задание.
// Напишите функцию getProducts(url), которая в качестве аргумента будет принимать ссылку
// Функция должна осуществить GET запрос к источнику. Данные необходимо вывести в косноль
let url = "https://api.escuelajs.co/api/v1/products/";
function getProducts(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// getProducts(url);

//!Задание (б)
//Переписать функцию используя async/await

async function getProducts2(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

//----------------------------
// POST - запросы
//----------------------------

// ------------------
// Задание 2
// Напишите функию createProduct(obj), которая принимает JS объект в качестве аргумента 
// и осуществляет POST запрос с данными, которые указаны в качестве параметров функции

let data = {
  title: "Valeriia_Kul",
  price: 100,
  description: "TEST 2.0",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};
function createProducts(data) {
  let url = "https://api.escuelajs.co/api/v1/products/";

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
}

let form_elem = document.querySelector('form');
let btn_get = document.querySelector('button');
btn_get.onclick = event => {
    event.preventDefault();
    getProducts2(url);
    
}

form_elem.onsubmit = (event) => {
    event.preventDefault();
    let form_data = new FormData(form_elem)
    let data = Object.fromEntries(form_data)
    data.images = ["https://placeimg.com/640/480/any"]
    createProducts(data);
    console.log('Данные отправились!');
}

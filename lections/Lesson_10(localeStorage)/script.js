//! localStorage - объект, позволяющий сохранить в браузер любую информацию в виде строкового типа

// localStorage.setItem('String', 'hello world') //* создание нового хранилища с ключом String и значением hello world

// localStorage.getItem('dssfd') //* вернет null, так как нeт такого ключа

// localStorage.getItem('String') //* возвращает значение по ключу String
//* 'hello world'

// localStorage.removeItem('String') //* удаление записи по ключу
// localStorage.clear() //* удаление всех записей внутри хранилища

let btn_elem = document.querySelector("button");
let btn1_elem = document.querySelector("#btn1");
let btn2_elem = document.querySelector("#btn2");
let btn3_elem = document.querySelector("#btn3");
let inp_elem = document.querySelector("input");

btn_elem.onclick = () => {
  if (localStorage.getItem("num") === "1") {
    localStorage.setItem("num", "0");
  } else {
    localStorage.setItem("num", "1");
  }
};

// inp_elem.onchange = (event) => {
//     localStorage.setItem('input', event.target.value)
// }

// --------------
// Задача 2. 
// Напишите процесс, который по событию onchange будет сохранять значение инпут - поля в localStorage

btn1_elem.onclick = () => {
    localStorage.setItem('input', inp_elem.value)
    inp_elem.value = '';

}
// ---------------
// Задача 2.2
// Доработайте решение. Реализуйте дополнительную кнопку которая будет помещать в input поле ранее 
// сохраненное значение localStorage (ключа input)
btn2_elem.onclick = () => {
    inp_elem.value = localStorage.getItem("input")
}

// ---------------
// Задача 2.3
// Доработайте решение. Добавьте новую кнопку, которая будет очищать (удалять) только ключ data в localStorage

btn3_elem.onclick = () => {
    localStorage.removeItem("num")
}


let userStore = {};

class User {
  constructor(username, surname,url) {
    this.username = username;
    this.surname = surname;
    this.url = url;
  }
}

let formInput = document.querySelectorAll(".form-input");
let btn = document.querySelector(".btn");

formInput.forEach((elem) => {
  elem.onkeyup = handlerChange;
});

btn.onclick = saveForm;



function handlerChange(e) {
    userStore[e.target.name] = e.target.value;
}
function saveForm() {
    let user = new User(userStore.username, userStore.surname, userStore.url);
    
    let div = document.createElement("div");
    div.classList.add("user__item");

    let img = document.createElement("img");
    img.setAttribute("src", user.url);

    let h6 = document.createElement("h6");
    h6.innerText = `${user.username} ${user.surname}`;

    div.append(img, h6);
    document.querySelector('.user').append(div);
}

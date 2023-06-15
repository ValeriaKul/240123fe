const car1 = {
  name: "BMW",
  model: "X6",
  year: 2023,
};

// console.log(car1["year"]);

function handlerOnChange(event) {
  console.log(event.target.name, event.target.value);
}

function save() {
  console.log(store);
}

const store = {};

let inputElem = document.querySelectorAll(".inputElement");
for (let i = 0; i < inputElem.length; i++) {
  inputElem[i].onkeyup = function (event) {
    console.log(event.target.name, event.target.value);
    // if(event.target.name = 'username'){
    //     store.username = event.target.value;
    // }
    store[event.target.name] = event.target.value;
  };
}

const car2 = {
  name: "Mersedes",
  model: "GLE 450",
  year: 2022,
  getCarInfo: function () {
    document.write(`<h1> This is ${this.name} ${this.model} </h1>`);
  },
};

// car2.getCarInfo();

const car3 = {
  name: "Audi",
  model: "A6",
  year: 2022,
  getCarInfo: function () {
    document.write(`<h1> This is ${this.name} ${this.model} </h1>`);
  },
};

// car3.getCarInfo();

function Car(name, model, year) {
  let temp = {};

  temp.name = name;
  temp.model = model;
  temp.year = year;

  temp.getCarYear = function () {
    document.write(`<h1> Year: ${this.year}</h1>`);
  };
  return temp;
}

let car4 = Car("BMW", "5 series", 2022);
// car4.getCarYear();

function Person(username, surname, age) {
  this.username = username;
  this.surname = surname;
  this.age = age;

  this.getUserInfo = function () {
    document.write(
      `<h1> Username: ${this.username}, <br> Surname: ${this.surname}, <br> Age: ${this.age} </h1>`
    );
  };
}

let person1 = new Person("John", "Done", 35);
// console.log(person1);
// person1.getUserInfo();

Person.prototype.getUserName = function () {
  document.write(`<h1> Username: ${this.username} </h1>`);
};

// person1.getUserName();

// console.log(person1);
// console.log("getUserName" in person1);
// console.log(person1.hasOwnProperty("getUserName"));
// console.log(person1.hasOwnProperty("getUserInfo"));

class Student {
  constructor(username, surname, rating) {
    this.username = username;
    this.surname = surname;
    this.rating = rating;
    this.getName = function () {
      console.log(this.username);
    };
  }
  average() {
    return !this.rating
      ? 0
      : (this.rating.reduce((a, b) => a + b) / this.rating.length).toFixed(2);
  }
}

let student1 = new Student("John", "Done", [5, 8, 7, 10, 6, 8]);
// console.log(student1.average());
// console.log(student1);

class Math2 {
  static add(a, b) {
    return a + b;
  }
  constructor() {
    throw new Error("Math is not Error constructor");
  }
}

// console.log(Math2.add(5, 6));

Math2.minus = function (a, b) {
  return a - b;
};

// console.log(Math2.minus(10, 6));

// let x = new Math2();
// x.add(8, 9);

console.hello = function (a) {
  console.log(a);
};
// console.hello('Hello world!')

class Employee {
  constructor(username, surname, company) {
    this.username = username;
    this.surname = surname;
    this.company = company;
  }

  getName() {
    return this.username;
  }
}

class Developer extends Employee {
  constructor(username, surname, company, skills) {
    super(username, surname, company);
    this.skills = skills;
  }
}
let user1 = new Employee("John", "Done", "Apple");
let user2 = new Developer("John", "Done", "Apple", ["HTML", "CSS", "JS"]);
// console.log(user2);
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
    console.log(user);
}

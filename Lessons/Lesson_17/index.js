//! Статические методы и свойства

//*Класс без статических методов и свойств
class Car {
  constructor(model, year, speed) {
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  driving(speed) {
    let lessSpeed = this.speed;
    this.speed = speed;
    console.log(`${this.model} is driving with ${this.speed} km/h`);
    return lessSpeed;
  }
}

let car1 = new Car("Tesla", 2020);

// console.log(car1.driving(100));

class Browser {
  constructor(name) {
    this.name = name;
  }
}

class Counter {
  constructor() {
    this.count = 0;
  }

  getEx(name) {
    this.count++;
    return new Browser(name);
  }
}

let count1 = new Counter();
count1.getEx("Chrome");

//*Класс со статическими методами и свойствами

//Cтатическое свойство будет доступно только внутри класса. Экземпляры доступ к статическим св-вам не имеют

//Cтатические методы доступны только внутри класса. кземпляры доступ к статическим методам не имеют

class Route {
  constructor(name) {
    this.name = name;
  }

  //статическое свойство
  static job = "IT_PROG";
  //статический метод
  static sayHi() {
    console.log("Hi!");
  }
}

let ex = new Route("Alex");

//! До добавления слова "static" к job
// console.log(ex);            Route { job: 'IT_PROG', name: 'Alex' }
// console.log(ex.name);       Alex
// console.log(ex.job);        IT_PROG

//!После:
// console.log(ex);            Route { name: 'Alex' }
// console.log(ex.name);       Alex
// console.log(ex.job);        undefined
// console.log(Route.job);     IT_PROG

// ex.sayHi()                  ex.sayHi() is not a function
// Route.sayHi();              Hi!


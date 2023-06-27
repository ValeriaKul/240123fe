//! Контекст this

class User {
  constructor(name) {
    this.name = name; // обозначается контекст "свойство.имя_объекта"
  }
}

let user1 = new User("Alex");

// user1.name

let pet1 = {
  name: "Sharik",
  getName() {
    console.log(this); //this - динамический параметр
  },
};

let foo = pet1.getName;

// foo() // Windiw

let pet2 = {
  name: "Tuzik",
  age: 3,
};

let pet3 = {
  name: "Dikson",
  age: 3,
  get() {
    console.log(this.name);
  },
};

function getName() {
  console.log(this.name);
}

// pet2.get = getName;

// pet2.get();
// pet3.get();

// пример:

let numbers = [1, 2, 3, 4, 5];
function double(array) {
  return array.map((elem) => elem ** 2);
}

// console.log(double(numbers));

//! утеря контекста
//* 1) Если вызвать метод, который использует this не в контексте объекта - тогда this будет объект Window
//* 2) Контекст this теряется при использовании стрелочной функции

let user = {
  name: "Alex",
  age: 30,
  getAge: () => {
    console.log(this.age);
  },
};

// user.getAge(); //undefined

//-----------------------------------
//! Meтоды функции (bind, call, apply)

//! bind - позволяет явно привязать this для указанного объекта, возвращает новую функцию


let car = {
    model: "Tesla",
    color: "red",
    milage: 1000
}

let getKm = function(){
    console.log(this.milage * 1.6);
}

// 1й способ
// getKm.bind(car)()                   // 1600

// 2й способ
let newFunc = getKm.bind(car)
// newFunc();                          // 1600

//! call - делает тоже самое, что и bind, только сразу же вызывает саму функцию

// getKm.call(car);                    // 1600

let getKm2 = function(n){
    console.log(this.milage * n);
}

// getKm.call(car, 1.6);               // 1600

//! apply - делает тоже самое, что и call
// основное отличие заключается в том, что аргументы самой функции передаются внутри массива

let getKm3 = function(valueKm, prop){
    console.log(`${this[prop]} проехал ${this.milage * valueKm} км`);
}

// getKm3.call(car, 1.6, 'model')       // Tesla проехал 1600 км
// getKm3.apply(car, [1.6, 'model'])    // Tesla проехал 1600 км

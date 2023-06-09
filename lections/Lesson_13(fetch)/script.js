/* let URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.filter((elem) => elem.id % 2 !== 0));
  });
 */
// Задача 2
// Получите данные используя сетевой запрос
// Выведите в косноль элемент массива, у которого самое большое сво-во title

let URL = "https://jsonplaceholder.typicode.com/todos";
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const elem = data.reduce((prev, cur) => {
        if (cur.title.length > prev.title.length) {
          return cur;
        } else {
          return prev;
        }
      });
      console.log(elem);
  });

  //{userId: 3, id: 41, title: 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit', completed: false}

let url = "https://fakestoreapi.com/products";
let div_root = document.querySelector('#root');
let div_wrapper = document.createElement('div');
div_wrapper.className = "product_wrapper";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    render(data);
  });


function render (array) {
  for (let elem of array) {
    if (Number.isInteger(elem.price)) {
    let div_product = document.createElement('div');
    let p_title = document.createElement('p');
    let p_price = document.createElement('p');
    let img_product = document.createElement('img');

    div_product.className = "product_elem";
    p_title.className = 'title';
    p_price.className = 'price';
    img_product.className = 'img_product';

    p_title.innerText = elem.title;
    p_price.innerText = `${elem.price} $` ;
    img_product.src = elem.image;

    div_product.append(img_product, p_title, p_price)
    div_wrapper.append(div_product);
  }}
  div_root.append(div_wrapper);
}

// Выведите только те товары, у которых в цене отсуствует дробная часть
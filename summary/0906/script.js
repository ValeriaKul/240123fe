let store = {
  navbar: [
    {
      id: 1,
      title: "Рюкзаки",
      classNames: "navbar__item",
      isActive: true,
    },
    {
      id: 2,
      title: "Футболки",
      classNames: "navbar__item",
      isActive: false,
    },
    {
      id: 3,
      title: "Рубашки",
      classNames: "navbar__item",
      isActive: false,
    },
  ],
  products: {
    1: [
      {
        id: 1,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery",
        price: "16 000$",
      },
      {
        id: 2,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery",
        price: "15 000$",
      },
      {
        id: 3,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery",
        price: "10 000$",
      },
      {
        id: 4,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery",
        price: "11 000$",
      },
    ],
    2: [
      {
        id: 1,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery2",
        price: "16 000$",
      },
      {
        id: 2,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery2",
        price: "15 000$",
      },
      {
        id: 3,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery2",
        price: "10 000$",
      },
      {
        id: 4,
        img: "./img/bag.jpg",
        title: "Рюкзак Louis Vuitton Discovery2",
        price: "11 000$",
      },
    ],
  },
};

// document.addEventListener('DOMContentLoaded', function(){})

const setNavbar = (state) => {
  const navbar = document.createElement("ul");
  const nav_container = document.querySelector("aside>nav");
  nav_container.append(navbar);
  navbar.setAttribute("class", "navbar");
  for (let i = 0; i < state.length; i++) {
    const liElement = document.createElement("li");
    liElement.setAttribute("class", state[i].classNames);
    liElement.innerText = state[i].title;
    if (state[i].isActive) {
      liElement.classList.add("navbar__item_active");
    }
    navbar.append(liElement);
  }
};
setNavbar(store.navbar);

const setProducts = (catalogs, products) => {
  let cardsItems = document.createElement("div");
  cardsItems.classList.add("cards__items");
  catalogs.forEach((catalog) => {
    if (catalogs.isActive) {
      products[catalog.id].forEach((product) => {
   
        let item = document.createElement("div");
        item.classList.add("item");

        let itemHeader = document.createElement("div");
        itemHeader.classList.add("item__header");

        let itemIcon = document.createElement("img");
        itemIcon.setAttribute("src", "./img/cart.svg");

        itemHeader.append(itemIcon);

        let itemImg = document.createElement("img");
        itemImg.setAttribute("src", product.img);
        itemImg.classList.add("item__image");

        let itemTitle = document.createElement("h2");
        itemTitle.classList.add("item__title");
        itemTitle.innerText = product.title;

        let itemPrice = document.createElement("h3");
        itemPrice.classList.add("item__price");
        itemPrice.innerText = product.price;

        item.append(itemHeader);
        item.append(itemImg);
        item.append(itemTitle);
        item.append(itemPrice);

        cardsItems.append(item);
      });
    }
  });
  return cardsItems;
};
// setProducts(store.navbar,store.products)

function render() {
  let navbar = document.querySelector("#navbar");
  let cards = document.querySelector(".cards");

  navbar.append(setNavbar(store.navbar));
  cards.append(setProducts(store.navbar, store.products));
}

render();

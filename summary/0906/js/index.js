let store = {
    navbar: [
        {
            id: 1,
            title: "Рюкзаки",
            classNames: "navbar__item",
            isActive: true
        },
        {
            id: 2,
            title: "Футболки",
            classNames: "navbar__item",
            isActive: false
        },
        {
            id: 3,
            title: "Рубашки",
            classNames: "navbar__item",
            isActive: false
        }
    ],
    products: {
        "1": [
            {
                id: 1,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 1",
                price: 150000
            },
            {
                id: 2,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 2",
                price: 200000
            },
            {
                id: 3,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 3",
                price: 100000
            },
            {
                id: 4,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 4",
                price: 300000
            },
            {
                id: 5,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 5",
                price: 100000
            },
            {
                id: 6,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 4",
                price: 120000
            },
        ],
        "2": [
            {
                id: 1,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 2-1",
                price: 150000
            },
            {
                id: 2,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 2-2",
                price: 200000
            },
            {
                id: 3,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 2-3",
                price: 100000
            },
            {
                id: 4,
                img: "./img/product.png",
                title: "Рюкзак Louis Vuitton Discovery 2-4",
                price: 300000
            }
        ],
    }
};

const setNavbar = (state) => {
    let navbar = document.createElement("ul");
    navbar.setAttribute("class", "navbar");

    for (let i = 0; i < state.length; i++) {
        let li = document.createElement("li");

        li.classList.add(state[i].classNames);

        if (state[i].isActive) {
            li.classList.add("navbar__item_active");
        }

        li.innerText = state[i].title;

        navbar.append(li)
    }

    return navbar;
}

const setProducts = (catalogs, products) => {
    let cardsItems = document.createElement("div");
    cardsItems.classList.add("cards__items");

    catalogs.forEach((catalog) => {
        if (catalog.isActive) {
            products[catalog.id].forEach(product => {
                let item = document.createElement("div");
                item.classList.add("item");

                let itemHeader = document.createElement("div");
                itemHeader.classList.add("item__header");

                let itemIcon = document.createElement("img");
                itemIcon.setAttribute("src", "./img/cart.svg");

                itemHeader.append(itemIcon);

                let itemImg = document.createElement("img");
                itemImg.setAttribute("src", product.img)
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
            })
        }
    })

    return cardsItems;
}


function render(){
    let navbar = document.querySelector("#navbar")
    let cards = document.querySelector(".cards")

    navbar.append(setNavbar(store.navbar))
    cards.append(setProducts(store.navbar, store.products));
}

render();

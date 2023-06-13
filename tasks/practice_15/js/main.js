const postsContainerEl = document.querySelector(".posts-container");
const commentsContainerEl = document.querySelector(".comments-container");
const notificationContainerEl = document.querySelector(
  ".notification-container"
);

let url = "https://jsonplaceholder.typicode.com/posts";

function renderPost(data) {
  let post_card = document.createElement("div");
  let title_elem = document.createElement("h3");
  let body_elem = document.createElement("p");

  title_elem.innerText = data.title;
  body_elem.innerText = data.body;

  post_card.classList.add("post-card");
  title_elem.classList.add("post-header");
  body_elem.classList.add("post-body");

  post_card.append(title_elem, body_elem);
  return post_card;
}

function renderPosts(data) {
  postsContainerEl.classList.add("posts-container");
  data.forEach((post) => postsContainerEl.append(renderPost(post)));
  return postsContainerEl;
}

function requestPosts(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderPosts(data));
}

requestPosts(url);

function createPost(title, body, userId) {
  let url = "https://jsonplaceholder.typicode.com/posts";

  return fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ title, body, userId }),
  });
}

function notification(message) {
  let notification_p = document.createElement("p");
  notification_p.innerText = message;
  notificationContainerEl.innerHTML = "";
  notificationContainerEl.append(notification_p);
  notificationContainerEl.style.display = "block";

  setTimeout(() => {
    notificationContainerEl.style.display = "none";
  }, 5000);
}

createPost("title", "body", 1)
  .then((res) => res.json())
  .then((data) => {
    let message = `Пользователь ${data.userId} успешно добавил пост, ID=${data.id}`;
    notification(message);
  });

  

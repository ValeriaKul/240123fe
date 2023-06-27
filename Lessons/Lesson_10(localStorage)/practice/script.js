let switch_elem = document.querySelector("input");

switch_elem.checked = localStorage.getItem("theme") === "dark" ? true : false;
document.body.className = localStorage.getItem("theme") ?? "light";


switch_elem.onclick = () => {
  if (switch_elem.checked) {
    localStorage.setItem("theme", 'dark');
  } else {
    localStorage.setItem("theme", 'light');
  }
  document.body.className =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";
};

// Задача: сделать так, чтобы при обновлении страницы тема сохранялась.

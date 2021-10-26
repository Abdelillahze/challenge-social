let button = document.querySelector(".button");
let html = document.querySelector("html");

button.onclick = () => {
  if (html.getAttribute("data-theme") == "light") {
    html.setAttribute("data-theme", "dark");
    button.querySelector("div").style.transform = "translate(150%, -50%)";
  } else {
    html.setAttribute("data-theme", "light");
    button.querySelector("div").style.transform = "translate(0%, -50%)";
  }
};

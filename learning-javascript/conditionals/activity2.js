const select = document.getElementById("theme");
const html = document.querySelector("html");
const img = document.getElementById("image");
const text = document.getElementById("text");

select.addEventListener("change", setTheme);

function setTheme() {
  if (select.value === "blue") {
    html.style.backgroundColor = "darkblue";
    html.style.color = "cornflowerblue";
    img.src = "https://static.wikia.nocookie.net/strawberryshortcakeberrybitty/images/8/84/Blueberry2D.png/revision/latest?cb=20210929214302";
    img.style.height = "300px";
    img.style.width = "150px";
    text.innerText = "Blueberry Muffin";
  }

  if (select.value === "yellow") {
  html.style.backgroundColor = "yellow";
  html.style.color = "white";
    img.src = "https://static.wikia.nocookie.net/p__/images/e/ea/Lemon_Meringue_%28Strawberry_Shortcake%27s_Berry_Bitty_Adventures%29.png/revision/latest?cb=20220303174944&path-prefix=protagonist";
    img.style.height = "300px";
    img.style.width = "150px";
    text.innerText = "Lemon Meringue";
  }

  if (select.value === "purple") {
  html.style.backgroundColor = "indigo";
  html.style.color = "violet";
  img.src = "https://static.wikia.nocookie.net/strawberryshortcake/images/c/c0/Plum2009.png/revision/latest?cb=20210924171300";
    img.style.height = "300px";
    img.style.width = "200px";
    text.innerText = "Plum Pudding";
  }

  if (select.value === "orange") {
  html.style.backgroundColor = "coral";
  html.style.color = "red";
  img.src = "https://static.wikia.nocookie.net/strawberryshortcakeberrybitty/images/0/07/Orangebags.png/revision/latest?cb=20211002190217";
    img.style.height = "300px";
    img.style.width = "250px";
    text.innerText = "Orange Blossom";
  }

  if (select.value === "pink") {
  html.style.backgroundColor = "deeppink";
  html.style.color = "fuchsia";
  img.src = "https://static.wikia.nocookie.net/strawberryshortcakeberrybitty/images/f/fb/Raspberryprofile.png/revision/latest?cb=20210929214305";
    img.style.height = "300px";
    img.style.width = "150px";
    text.innerText = "Raspberry Torte";
  }
}
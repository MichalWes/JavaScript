const list = document.createElement("ul");
document.body.append(list);

for (let i = 1; i <= 10; i++) {
  const listElement = document.createElement("li");
  listElement.textContent = i;
  list.append(listElement);
}

const last = document.querySelector("li:last-child");
last.textContent = "Jestem ostatnim elementem z listy";
last.style.padding = "20px 40px";
last.style.fontSize = "48px";
last.style.backgroundColor = "royalblue";

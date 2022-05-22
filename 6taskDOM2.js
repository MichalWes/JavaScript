const list = document.createElement("ul");
document.body.append(list);

for (let i = 1; i <= 10; i++) {
  const listElement = document.createElement("li");
  listElement.textContent = i;
  list.append(listElement);
}

const listElements = document.querySelectorAll("li");
const last = listElements[listElements.length - 1];
last.textContent = "Jestem ostatnim elementem z listy";
last.style.padding = "20px 40px";
last.style.fontSize = "48px";
last.style.backgroundColor = "blue";

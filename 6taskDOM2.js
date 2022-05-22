const div = document.querySelector("div");
const list = document.createElement("ul");
div.append(list);

// for (let i = 1; i < 10; i++) {
// 	listElement = document.createElement("li");
// 	listElement.innerHTML(i);
// 	list.append(listElement);
// }

for (let i = 1; i < 10; i++) {
	const listElement = document.createElement("li");
	listElement.list.append(listElement);
}

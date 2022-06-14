const ulElement = document.querySelector("ul");
const children = Array.from(ulElement.children);
children.forEach((item) => {
	const idN = !item.previousElementSibling
		? 1
		: parseInt(item.previousElementSibling.dataset.id) + 1;
	item.textContent = idN;
	item.dataset.id = idN;
});
const thirdLi = document.querySelector('[data-id="3"]');
console.log(thirdLi.closest("div"));

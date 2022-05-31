const paragraphs = document.querySelectorAll("p");
const buttons = document.querySelectorAll("button");
const buttonsArr = Array.from(buttons);
const divSquare = document.querySelector(".square");
const notSquare = "This element doesn't contain .square";

const hi = () => {
	console.log("Cześć");
};

const redSquare = (square) => {
	square.className == "square"
		? (square.style.backgroundColor = "red")
		: console.log(notSquare);
};

const blueSquare = (square) => {
	square.className == "square"
		? (square.style.backgroundColor = "blue")
		: console.log(notSquare);
};

const toggleClass = () => {
	paragraphs.forEach((p) => p.classList.toggle("show"));
};

buttonsArr
	.find((btn) => btn.className == "btn btn1")
	.addEventListener("dblclick", hi);
divSquare.addEventListener("mouseenter", (e) => redSquare(e.target));
divSquare.addEventListener("mouseleave", (e) => blueSquare(e.target));
buttonsArr
	.find((btn) => btn.className == "btn btn2")
	.addEventListener("click", toggleClass);

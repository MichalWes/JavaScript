const imgElement = document.querySelector("img");
imgElement.setAttribute(
	"src",
	"https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg"
);
imgElement.setAttribute("alt", "Cat rolling on the floor purring");

const func = () => {
	console.log(imgElement.getAttribute("alt"));
};

setTimeout(func, 2000);

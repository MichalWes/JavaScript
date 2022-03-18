let colors = ["white"];

colors.unshift("black");
colors.push("red");

colors.forEach((c) => console.log("My favorite color is: " + capitalize(c)));

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

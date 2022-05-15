const responseText = "supa";
console.log(responseText);
if (responseText.match(/^[a-z]+$/g)) {
	console.log(responseText.match(/[a-z]/));
	alert("matches");
} else {
	alert("doesn't match");
}

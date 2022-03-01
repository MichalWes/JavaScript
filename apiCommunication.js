const url = "http://localhost:8081/api/v1/conferences";

const test = {
	method: "GET",
};

fetch(url, test)
	.then((response) => response.json())
	.then((data) => console.log(data));

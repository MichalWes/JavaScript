const cars = "Audi,Mercedes,BMW,Nissan,Dodge";

let newCars = cars.split(",");

newCars.length > 3 ? console.log("Jest OK") : console.log("Nie jest OK");

newCars.includes("Audi") ? newCars.push("Renault") : newCars.pop();

console.log(newCars);

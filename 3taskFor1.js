const cities = ["Gdańsk, Gdynia, Sopot, Kościerzyna"];

for (i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

for (i = 0; i < 4; i++) {
  console.log(cities[i]);
}

for (const city of cities) {
  console.log(city);
}

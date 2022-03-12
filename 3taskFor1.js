const cities = ["Gdańsk, Gdynia, Sopot, Kościerzyna"];

for (i = 0; i < 4; i++) {
  console.log(cities[i]);
}
for (city of cities) {
  console.log(city);
}

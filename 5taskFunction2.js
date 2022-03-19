let celsius = 5;
let temp;

function fahrenheit(cel) {
  celsius = cel;
  temp = celsius * 1.8 + 32;
  console.log(`${cel}°C = ${temp}°F`);
}

fahrenheit(5);

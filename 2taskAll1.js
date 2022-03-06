const x = 50;

const message1 = "X > 100";
const message2 = "X is mediocre";
const message3 = "X is small";

if (x >= 100) {
  console.log(message1.toUpperCase());
} else if (x > 30) {
  console.log(message2.toUpperCase());
} else {
  console.log(message3.toUpperCase());
}

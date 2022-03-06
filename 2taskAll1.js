const x = 50;

let message;
const message1 = "X > 100";
const message2 = "X is mediocre";
const message3 = "X is small";

if (x >= 100) {
  message = message1;
} else if (x > 30) {
  message = message2;
} else {
  message = message3;
}

console.log(message);

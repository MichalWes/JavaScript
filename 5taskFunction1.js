let score;

function add(a, b) {
  score = a + b;
  score % 2 == 0 ? even() : odd();
}

function even() {
  console.log(`Number ${score} is even`);
}

function odd() {
  console.log(`Number ${score} is odd`);
}

add(4, 5);
add(4, 4);

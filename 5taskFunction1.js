function add(a, b) {
  const score = a + b;
  score % 2 == 0 ? even(score) : odd(score);
}

function even(score) {
  console.log(`Number ${score} is even`);
}

function odd(score) {
  console.log(`Number ${score} is odd`);
}

add(4, 5);
add(4, 4);

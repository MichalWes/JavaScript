const num = 10;
let numbers = [];

for (i = 0; i < num; i++) {
  numbers.push(i);
}

function divCheck(n) {
  msgYes = `${n} is divisible by 3`;
  msgNo = `${n} is not divisible by 3 or ${n} = 0`;
  n % 3 == 0 && n != 0 ? console.log(msgYes) : console.log(msgNo);
}

console.log(numbers);

numbers.forEach(divCheck);

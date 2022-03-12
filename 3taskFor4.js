const nums = [5, 8, 10, 23, 48, 60];

for (const num of nums) {
  console.log(num / 5);
}

for (const num of nums) {
  if (num % 2 == 0) {
    console.log(
      `%cNumber ${num} is even.`,
      "background-color: gold; color: black"
    );
  } else {
    console.log(
      `%cNumber ${num} is odd.`,
      "background-color: tomato; color: black"
    );
  }
}

const nums = [1, 5, 13, 26, 48];

const newNums = nums.map((n) => n * 5);

console.log(newNums);

newNums.forEach((n) =>
	n % 2 == 0 ? console.log("Parzyste " + n) : console.log("Nieparzyste " + n)
);

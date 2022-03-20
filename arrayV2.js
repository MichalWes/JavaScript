const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabFilter = tab.filter((n) => n % 2 == 0);
const tabAny = tab.some((n) => n % 2 == 0);
const tabFind = tab.find((n) => n % 2 == 0);
const tabAll = tab.every((n) => n > 0);
const index1 = tab.findIndex((n) => n % 2 == 0);
const index = tab.findIndex((n) => n == 8);
const includes = tab.includes(11);
const cars = "mercedes,audi,bmw,ford,fiat";

console.log(tabFilter);
console.log(tabAny);
console.log(tabAll);
console.log(index);
console.log(includes);

for (num in tab) {
  console.log(num);
}
for (num of tab) {
  console.log(num);
}

const letters = ["c", "d"];

letters.unshift("a", "b");
letters.push("e", "f");

if (letters.includes("e")) {
  console.log("e is there");
} else {
  console.log("e is missing");
}

console.log(letters);

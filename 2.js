const fs = require("fs");

const main = () => {
  const input = fs
    .readFileSync("input1.txt", { encoding: "utf-8" })
    .split("\n")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));
};
main();

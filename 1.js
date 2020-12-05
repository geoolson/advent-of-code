const fs = require("fs");

const multOperands = (nums, sumVal = 2020) => {
  const numSet = new Set(nums);
  const entry = nums.find((num) => numSet.has(sumVal - num));
  return (sumVal - entry) * entry;
};

const main = () => {
  const input = fs
    .readFileSync("input1.txt", { encoding: "utf-8" })
    .split("\n")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  console.log(multOperands(input));
};
main();

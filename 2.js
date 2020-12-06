const fs = require("fs");

const findOperands = (nums, sumVal = 2020) => {
  const numSet = new Set(nums);
  const entry = nums.find((num) => numSet.has(sumVal - num));
  if (entry) return [entry, sumVal - entry];
  else return false;
};

const findThree = (nums) => {
  let solution;
  nums.find((num) => {
    const ops = findOperands(nums, 2020 - num);
    if (ops) {
      solution = num * ops[0] * ops[1];
      return true;
    }
    return false;
  });
  return solution;
};

const main = () => {
  const input = fs
    .readFileSync("input1.txt", { encoding: "utf-8" })
    .split("\n")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));
  console.log(findThree(input));
};
main();

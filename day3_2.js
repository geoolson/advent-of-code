const fs = require("fs");

const trees = (slope, right, down) => {
  const width = slope[0].length;
  const TREE = "#";
  return slope
    .filter((row, idx) => idx % down === 0)
    .filter((row, idx) => row[(idx * right) % width] === TREE).length;
};

const main = () => {
  const input = fs
    .readFileSync("input3.txt", { encoding: "utf-8" })
    .split("\n")
    .map((curr) => curr.split(""));
  const solution = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ]
    .map(([right, down]) => trees(input, right, down))
    .reduce((acc, curr) => acc * curr, 1);
  console.log(solution);
};
main();

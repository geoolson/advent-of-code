const fs = require("fs");

const main = () => {
  const TREE = "#";
  const input = fs
    .readFileSync("input3.txt", { encoding: "utf-8" })
    .split("\n")
    .map((curr) => curr.split(""));
  const width = input[0].length;
  console.log(
    input.filter((row, idx) => row[(idx * 3) % width] === TREE).length
  );
};
main();

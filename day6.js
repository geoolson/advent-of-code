const fs = require("fs");

const groups = fs
  .readFileSync("input6.txt", { encoding: "utf-8" })
  .split("\n\n")
  .map((curr) => new Set(curr.replace(/\n/g, "")).size);

console.log(groups.reduce((acc, curr) => acc + curr, 0));

const fs = require("fs");

const groups = fs
  .readFileSync("input6.txt", { encoding: "utf-8" })
  .slice(0, -1)
  .split("\n\n")
  .map((curr, idx) => {
    const groupSize = curr.split("\n").length;
    const group = curr.replace(/\n/g, "").split("");
    const count = group.reduce((acc, curr) => {
      if (curr in acc) acc[curr] = acc[curr] + 1;
      else acc[curr] = 1;
      return acc;
    }, {});
    return Object.entries(count).filter(([key, val]) => val === groupSize)
      .length;
  });

console.log(groups.reduce((acc, curr) => acc + curr, 0));

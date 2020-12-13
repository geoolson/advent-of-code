const fs = require("fs");

const findNum = (graph, vertex) => {
  if (graph[vertex].visited) return graph[vertex].bags;
  graph[vertex].visited = true;
  graph[vertex].bags += graph[vertex].list.reduce(
    (acc, [num, bag]) => acc + num * findNum(graph, bag),
    0
  );
  return graph[vertex].bags;
};

const main = () => {
  const graph = fs
    .readFileSync("input7.txt", { encoding: "utf-8" })
    .split("\n")
    .slice(0, -1)
    .map((curr) =>
      curr
        .replace(/\sbags/g, "")
        .replace(/\sbag/g, "")
        .replace(".", "")
    )
    .reduce((acc, curr) => {
      const [key, valString] = curr.split(" contain ");
      if (curr.includes("other")) {
        acc[key] = {
          visited: true,
          bags: 1,
        };
      } else {
        acc[key] = {
          visited: false,
          bags: 1,
          list: valString.split(", ").map((curr) => {
            const [num, ...val] = curr.split("");
            const value = val.slice(1);
            return [parseInt(num), value.join("").trim()];
          }),
        };
      }
      return acc;
    }, {});
  console.log(findNum(graph, "shiny gold") - 1);
};
console.time("time");
main();
console.timeEnd("time");

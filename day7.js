const fs = require("fs");

const findGold = (graph, vertex) => {
  if (graph[vertex].visited) return graph[vertex].bag;
  graph[vertex].visited = true;
  graph[vertex].bag = graph[vertex].list.some(([num, edge]) =>
    findGold(graph, edge)
  );
  return graph[vertex].bag;
};

const main = () => {
  const input = fs
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
          bag: false,
        };
      } else {
        acc[key] = {
          visited: false,
          bag: false,
          list: valString.split(", ").map((curr) => {
            const [num, ...val] = curr.split("");
            const value = val.slice(1);
            return [parseInt(num), value.join("").trim()];
          }),
        };
      }
      return acc;
    }, {});
  input["shiny gold"] = { visited: true, bag: true };
  Object.entries(input).forEach(([key]) => findGold(input, key));
  console.log(
    Object.entries(input).filter(([key]) => input[key].bag).length - 1
  );
};
main();

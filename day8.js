const fs = require("fs");

const main = () => {
  const instructions = fs
    .readFileSync("input8.txt", { encoding: "utf-8" })
    .split("\n")
    .slice(0, -1)
    .map((line) => {
      const [instruction, num] = line.split(" ");
      return {
        visited: false,
        instruction,
        num: parseInt(num),
      };
    });
  let acc = 0;
  let index = 0;
  while (true) {
    let { instruction, visited, num } = instructions[index];
    if (visited) break;
    instructions[index].visited = true;
    if (instruction === "nop") ++index;
    else if (instruction === "jmp") index += num;
    else if (instruction === "acc") {
      acc += num;
      ++index;
    } else throw "invalid instruction";
  }
  console.log(acc);
};
main();

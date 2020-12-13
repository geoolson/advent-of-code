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
    let instruction = instructions[index];
    if (instruction.visited) break;
    instruction.visited = true;
    if (instruction.instruction === "nop") ++index;
    else if (instruction.instruction === "jmp") index += instruction.num;
    else if (instruction.instruction === "acc") {
      acc += instruction.num;
      ++index;
    } else throw "invalid instruction";
  }
  console.log(acc);
};
main();

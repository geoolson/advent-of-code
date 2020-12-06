const fs = require("fs");

const validPassword = ({ min, max, character, password }) => {
  const characters = password.split("").filter((char) => char === character);
  return characters.length >= min && characters.length <= max;
};

const main = () => {
  const input = fs
    .readFileSync("input2.txt", { encoding: "utf-8" })
    .split("\n")
    .slice(0, -1)
    .map((line) => {
      const [min, max, character, password] = line.split(/\s|-/);
      return {
        min: parseInt(min),
        max: parseInt(max),
        character: character.split("")[0],
        password,
      };
    });
  console.log(input.filter(validPassword).length);
};
main();

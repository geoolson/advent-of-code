const fs = require("fs");

const validPassword = ({ min, max, character, password }) => {
  const characters = password.split("");
  return (
    (characters[min - 1] === character && characters[max - 1] !== character) ||
    (characters[min - 1] !== character && characters[max - 1] === character)
  );
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

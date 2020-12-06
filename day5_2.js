const fs = require("fs");

// binSearch :: Array -> int
const binSearch = (characters) => {
  const size = 2 ** characters.length;
  const _binSearch = (characters, min, max) => {
    if (characters.length == 0) return max;
    const direction = characters.shift();
    return direction === "F" || direction === "L"
      ? _binSearch(characters, min, Math.floor(max - (max - min) / 2))
      : _binSearch(characters, Math.floor(min + (max - min) / 2), max);
  };
  return _binSearch([...characters], 0, size - 1);
};

const main = (fs, console) => {
  const input = fs
    .readFileSync("input5.txt", { encoding: "utf-8" })
    .split("\n")
    .slice(0, -1)
    .map((curr) => {
      const directions = curr.split("");
      return {
        rows: directions.slice(0, 7),
        cols: directions.slice(7),
      };
    });
  const ids = input.map((curr) => {
    const row = binSearch(curr.rows);
    const col = binSearch(curr.cols);
    return 8 * row + col;
  });
  const idSet = new Set(ids);
  console.log(
    Array(Math.max(...ids))
      .fill()
      .map((_, idx) => idx)
      .filter((curr, idx) => !idSet.has(idx))
      .slice(-1)
  );
};

main(fs, console);

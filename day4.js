const fs = require("fs");

const validPassport = (() => {
  const passportFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  return (passport) =>
    passportFields.every((field) => Boolean(field in passport));
})();

const main = (fs, console) => {
  const passports = fs
    .readFileSync("input4.txt", { encoding: "utf-8" })
    .split("\n\n")
    .map((passport) => {
      const keyvals = passport.split(/\n|\s/);
      return keyvals.reduce((acc, curr) => {
        const [key, val] = curr.split(":");
        acc[key] = val;
        return acc;
      }, {});
    });
  console.log(passports.filter(validPassport).length);
};
main(fs, console);

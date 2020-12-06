const fs = require("fs");

const validYear = (year, min, max) =>
  Boolean(year.length === 4 && parseInt(year) && year >= min && year <= max);

const validHeight = (height) => {
  const num = parseInt(height.split(/cm|in/)[0]);
  const units = height.split(/\d+/)[1];
  return Boolean(
    (num >= 150 && num <= 193 && units === "cm") ||
      (num >= 59 && num <= 76 && units === "in")
  );
};

// validEyeColor :: string -> boolean
const validEyeColor = (() => {
  const colors = new Set(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]);
  return (eye) => colors.has(eye);
})();

// validPassport :: Object -> boolean
const validPassport = (() => {
  const passportFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  return (passport) => {
    if (!passportFields.every((field) => Boolean(field in passport)))
      return false;
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
    if (
      !(
        validYear(byr, 1920, 2002) &&
        validYear(iyr, 2010, 2020) &&
        validYear(eyr, 2020, 2030)
      ) ||
      !validHeight(hgt) ||
      !hcl.match(/#[0-9a-f]{6}/) ||
      !validEyeColor(ecl) ||
      pid.length !== 9 ||
      parseInt(pid) === NaN
    )
      return false;
    return true;
  };
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

const fs = require("fs");
const chalk = require("chalk");
const exist = require("./exist");

const writeFile = async (path, data) => {
  console.log(
    (await exist(path)) ? chalk.yellow("rewrite") : chalk.green("writeFile:"),
    path
  );
  fs.writeFileSync(path, data, "utf8");
};

module.exports = writeFile;

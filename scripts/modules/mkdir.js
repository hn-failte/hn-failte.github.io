const fs = require("fs");
const chalk = require("chalk");
const exist = require("./exist");

const mkdir = async (path) => {
  if (exist(path)) {
    console.log(chalk.red("mkdir failed: exsit", path));
    return;
  }
  console.log(chalk.green("mkdir:"), path);
  return fs.mkdirSync(path);
};

module.exports = mkdir;

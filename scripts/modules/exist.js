const fs = require("fs");
const chalk = require("chalk");

const exist = (path) => {
  console.log(chalk.green("exist:"), path);
  return fs.existsSync(path);
};

module.exports = exist;

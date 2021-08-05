const chalk = require("chalk");

const cd = async (dest) => {
  process.chdir(dest);
  console.log(chalk.green("cd:"), dest);
};

module.exports = cd;

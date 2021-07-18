const chalk = require("chalk");

const pwd = () => {
  const cwd = process.cwd();
  console.log(chalk.green("pwd:"), cwd);
  return cwd;
};

module.exports = pwd;

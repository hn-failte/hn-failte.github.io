const execa = require("execa");
const chalk = require("chalk");

const exec = async (cmd) => {
  console.log(cmd);
  let res = {};
  try {
    res = await execa(cmd, { shell: "powershell" });
  } catch (error) {
    console.log(chalk.red(error.message));
    res = false;
  }
  return res;
};

module.exports = exec;

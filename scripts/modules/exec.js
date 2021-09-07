const execa = require("execa");
const chalk = require("chalk");
const platform = require("../platform");

const exec = async (cmd) => {
  console.log(cmd);
  let res = {};
  try {
    res = await execa(cmd, {
      shell: platform === "win32" ? "powershell" : platform === "darwin" ? "zsh" : "bash"
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    res = false;
  }
  return res;
};

module.exports = exec;

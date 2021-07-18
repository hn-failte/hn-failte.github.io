const fs = require("fs");
const chalk = require("chalk");

const rm = (path) => {
  console.log(chalk.green(`rm ${path}`));
  var files = [];
  if (fs.existsSync(path)) {
    if (fs.statSync(path).isDirectory()) {
      files = fs.readdirSync(path);
      files.forEach(function(file) {
        var curPath = path + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
          rm(curPath);
        } else {
          try {
            fs.unlinkSync(curPath);
          } catch (error) {
            console.log(chalk.red(error.message));
          }
        }
      });
      try {
        fs.rmdirSync(path);
      } catch (error) {
        console.log(chalk.red(error.message));
      }
    } else {
      fs.unlinkSync(path);
    }
  } else {
    console.log(chalk.red("path not exsit"));
  }
};

module.exports = rm;

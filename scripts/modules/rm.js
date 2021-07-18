const fs = require("fs");
const chalk = require("chalk");

const rm = (path) => {
  var files = [];
  if (fs.existsSync(path)) {
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
  }
};

module.exports = rm;

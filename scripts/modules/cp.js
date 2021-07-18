const fs = require("fs");
const chalk = require("chalk");

const cp = (origin, dest) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(origin, dest, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  }).then(
    () => {
      console.log(chalk.green(`cp ${origin} ${dest}`));
    },
    (err) => {
      console.log(chalk.red(err.message));
    }
  );
};

module.exports = cp;

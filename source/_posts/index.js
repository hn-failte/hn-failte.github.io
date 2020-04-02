// blog命名去空格工具

const fs = require("fs");
const path = require("path");

const MainList = fs.readdirSync(path.resolve(__dirname, "."));

MainList.forEach(item => {
  if (item !== "index.js") {
    let subDir = fs.readdirSync(path.resolve(__dirname, item));
    subDir.forEach(filename => {
        fs.renameSync(path.resolve(__dirname, item, filename), path.resolve(__dirname, item, filename.replace(/\s/g, '')))
    });
  }
});

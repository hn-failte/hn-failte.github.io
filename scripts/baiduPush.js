/**
 * 生成百度链接推送文件
 */
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const matter = require("gray-matter"); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const readFileList = require("./modules/readFileList");
const exec = require("./modules/exec");
const rm = require("./modules/rm");
const cd = require("./modules/cd");

const urlsRoot = path.join(__dirname, "..", "urls.txt"); // 百度链接推送文件
// const arg = process.argv.splice(2)[0]; // 获取命令行传入的参数
const CNAME = fs.readFileSync(path.resolve(__dirname, "../CNAME"), "utf-8");
let DOMAIN = CNAME;

if (!DOMAIN) {
  console.log(chalk.red("请指定一个你要进行百度推送的域名参数"));
  return;
}

if (!/https?:\/\//i.test(DOMAIN)) {
  DOMAIN = "https://" + DOMAIN;
}

main();

/**
 * 主体函数
 */
async function main() {
  fs.writeFileSync(urlsRoot, DOMAIN);
  const files = readFileList(); // 读取所有md文件数据

  files.forEach((file) => {
    const { data } = matter(fs.readFileSync(file.filePath, "utf8"));

    if (data.permalink) {
      const link = `\r\n${DOMAIN}${data.permalink}`;
      console.log(link);
      fs.appendFileSync(urlsRoot, link);
    }
  });

  cd(path.resolve(__dirname, "../"));
  const { stdout } = await exec(
    `sudo curl -H 'Content-Type:text/plain' --data-binary '@urls.txt' 'http://data.zz.baidu.com/urls?site=https://failte.cn&token=nbmU3aAMJG1ZRsZs'`
  );

  if (stdout) {
    console.log(stdout);
    rm(path.resolve(__dirname, "./urls.txt"));
  }
}

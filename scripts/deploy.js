const join = require("path").join;
const chalk = require("chalk");
const exec = require("./modules/exec");
const pwd = require("./modules/pwd");
const cd = require("./modules/cd");
const cp = require("./modules/cp");
const rm = require("./modules/rm");
const exist = require("./modules/exist");

const main = async () => {
  const vuepress = join(__dirname, "../docs/.vuepress/");
  const dist = join(__dirname, "../docs/.vuepress/dist/");
  const CNAME = join(__dirname, "../CNAME");
  const destCNAME = join(dist, "./CNAME");
  await pwd();

  const { stdout } = await exec("yarn build");
  console.log(stdout);

  if (exist(dist)) {
    await cp(CNAME, destCNAME);
    await cd(dist);
    await exec("git init");
    await exec("git add --all");
    await exec(`git commit -m "quick deploy"`);
    const { stdout } = await exec(`git config --global --list`);
    console.log(stdout);
    await pwd();
    const res = await exec(
      `sudo git push -f 'git@github.com:hn-failte/hn-failte.github.io.git' master:gh-pages`
    );
    if (res) {
      console.log(res);
      await cd(vuepress);
      await rm(dist);
    }
  } else {
    console.log(chalk.red("dist not exist"));
    process.exit(0);
  }
};

main();

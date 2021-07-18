const fs = require("fs");
const join = require("path").join;
const chalk = require("chalk");
const exec = require('./modules/exec');
const pwd = require('./modules/pwd');
const cd = require('./modules/cd');
const cp = require('./modules/cp');
const rm = require('./modules/rm');

const main = async () => {
  const vuepress = join(__dirname, "../docs/.vuepress/");
  const dist = join(__dirname, "../docs/.vuepress/dist/");
  const CNAME = join(__dirname, "../CNAME");
  const destCNAME = join(dist, "./CNAME");
  pwd();

  const { stdout } = await exec("yarn build");
  console.log(stdout);

  if (fs.existsSync(dist)) {
    await cp(CNAME, destCNAME);
    cd(dist);
    await exec("git init");
    await exec("git add --all");
    await exec(`git commit -m "quick deploy"`);
    const { stdout } = await exec(`git config --global --list`);
    console.log(stdout);
    pwd();
    const res = await exec(
      `sudo git push -f 'git@github.com:hn-failte/hn-failte.github.io.git' master:gh-pages`
    );
    if (res) {
      console.log(res);
      cd(vuepress);
      await rm(dist);
    }
  } else {
    console.log(chalk.red("dist not exist"));
    process.exit(0);
  }
};

main();

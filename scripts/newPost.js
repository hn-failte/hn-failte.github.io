const writeFile = require("./modules/writeFile");
const dayjs = require("dayjs");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;

const format = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const year = dayjs().year();
const month = format(dayjs().month());
const day = format(dayjs().day());
const hour = format(dayjs().hour());
const minute = format(dayjs().minute());
const second = format(dayjs().second());
const title = argv.title || "untitled";

const postData = `---
title: ${title}
date: ${year}-${month}-${day} ${hour}:${minute}:${second}
permalink: /pages/${year}${month}${day}f${second.slice(1)}/
categories:
  - 前端
  -
tags:
  -
---

# ${title}
`;

writeFile("./docs/demo.md", postData);

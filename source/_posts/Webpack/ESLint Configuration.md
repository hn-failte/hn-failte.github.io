---
title: eslint从愁眉苦脸到为所欲为
date: 2020-01-22 12:16:01
layout: post
categories: Webpack
tags: ESLint
excerpt: 小王刚入职不久，第一次写项目，写了一行，结果开发脚手架报了一堆eslint错误，此时的表情简直不要太丰富......
---

## eslint从愁眉苦脸到为所欲为

小王入职不久，第一次写项目，写了一行，结果开发脚手架报了一堆eslint错误，此时的表情简直不要太丰富......

### 介绍

eslint是一个对EcmaScript语法进行检测的工具。

eslint存在的意义是规范代码，确保代码的风格一致。

eslint也可以提前检测出错误的语法。

eslint使用AST分析代码

### 安装与配置

安装：`npm i eslint -D`

初始化配置：`npx eslint --init`
> 输入该指令后，根据自己的需求，脚手架会生成一个配置文件
> 如果是在vue项目中，需要安装vue插件：`npm i eslint-plugin-vue -D`
> 若是react，则安装react插件：`npm i eslint-plugin-react -D`

执行检测：`npx eslint [filename1] [filename2]` or `npx eslint [filepath]/**`
```bash
# 检测指定文件
npx eslint src/index.js

# 检测指定文件夹下的所有文件
npx eslint src/todo/**
```

### 配置项说明

eslint可以高度定制配置

#### 0、配置方式与优先级

1、配置方式

eslint的配置可以在文件的注释中，也可以在配置文件中。

eslint可以配置在各个目录下，当子目录下不存在配置文件时，会读取根目录下的配置文件。

配置文件可以是以下：.eslintrc.js、.eslintrc.json、.eslintrc.yaml、.eslintrc、package.json。

配置文件为.eslintrc时，可以是json，也可以是yaml，但该方式已启用。

2、配置优先级

行内配置：`/* options config */`，该方式优先级最高。

cli配置：`--global`、`--rule`、`--env`、`env`、`-c`，该方式优先级低于行内。

项目配置：检测当前文件同级目录下是否有配置文件，若没有，则往上层找，直到根目录或存在配置为`"root": true`的文件。该方式优先级低于行内和cli。

若以上几种配置方式均不存在，则寻找`~/.eslintrc`自定义的默认配置。

3、忽略文件配置

eslint本身会忽略`node_modules`和`bower_components`文件夹下的文件。

eslint在执行之前会检测当前文件夹是否存在`.eslintignore`文件，一次只有一个此类文件会被使用。

文件的写法采用glob模式，类似`.gitignore`：`#`为注释、`!`为非

可以直接在package.json中书写eslintIgnore字段替代文件。
```json
{
    "eslintIgnore": []
}
```

#### 1、parserOptions

配置支持的js语言选项。默认支持语言为es5。

- `ecmaVersion`

默认为`3, 5`，可配置版本或年号：6/2015、7/2016、8/2017、9/2018、10/2019

- `sourceType`

默认为script，可配置为esm：module

- `ecmaFeatures`
语言特性，包括：`globalReturn`：全局的return、`impliedStrict`：全局严格、`jsx`：是否启用JSX、`experimentalObjectRestSpread`：实验对象剩余传播的支持

#### 2、parser

解析器。默认为Espree。在配置webpack时，一般会切换该项。
为了配合babel，切换为babel-eslint；为了配合ts，切换为@typescript-eslint/parser。
除此之外，也可以自定义解析器。

#### 3、processor

处理器。

#### 4、env

环境。可以选择多个环境。

可以在文件的最上方注释环境：
```js
/* eslint-env browser jquery */
```

也可以在文件中配置：
```json
{
    "env": {
        "browser": true,
        "jquery": true
    }
}
```

或在package.json中配置：
```json
{
    "eslintConfig": {
        "env": {
            "browser": true,
            "jquery": true
        }
    }
}
```

常用的配置有：
browser（浏览器）、node、shared-node-browser、worker
es6、commonjs、amd、
mocha、jest、qunit、
jquery、shelljs、ember、meteor等等

插件的配置：`env: plugin/env: true`

#### 5、global

全局变量。

在文件中配置：
```js
/* global var1: off, var2: writable, var3: readonly */
```
> readonly，也可写为readable、false
> writable，也可写为writeable、true
> off，禁用变量

使用readonly时，需开启`no-global-assign`规则。

#### 6、plugin

插件。可自定义插件。

常用的插件有：eslint-plugin-vue、eslint-plugin-react。

#### 7、rules

规则。使用off/0关闭规则；使用warn/1开启规则警告；使用error/2开启规则错误（程序退出）。

在文件中，可以单独配置：
```js
/* eslint eqeqeq: 0, curly: 2, quotes: ["error", "double"] */
```

自定义插件：`plugin/rulex: 2`

eslint规则查询：[https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)

#### 8、disable

禁止规则警告。

在文件中配置：
当该行单独存在与整个文件顶部时，会禁用该文件的全局或指定规则
```js
/* eslint-disable */
console.log('eslint')
```

禁用指定代码块全部或指定规则
```js
/* eslint-disable no-console, no-alert*/
console.log('eslint')
alert('eslint')
/* eslint-disable */
```

禁用指定行的全部或指定规则
```js
// eslint-disable-next-line
console.log('eslint')
/* eslint-disable-next-line */
console.log('eslint')
alert('eslint') // eslint-disable-line
alert('eslint') /* eslint-disable-line */
```

自定义插件：`plugin/ruleX`

#### 9、extends

规则继承。派生规则的可以继承基础规则，也可以重写基础规则。

可配置：路径、共享配置名、eslint:recommand、eslint:all、字符串数组

`eslint:recommended`：一系列核心规则。在使用脚手架生成时可以启动该继承。
`eslint:all`：全部规则。

共享配置：可以配置并发布到npm，也可以在npm上下载并使用。一般命名为`eslint-config-[name]`

### 实操

```bash
mkdir operation && cd operation
npm init -y
npm i eslint -D
npx eslint --init
# To check syntax, find problems, and enforce code style
# JavaScript modules (import/export)
# Vue.js
# (Typescript) N
# Browser
# Use a popular style guide
# standard
# (config file) Javascript
# Would you like to install them now with npm? (Y/n) Y
# 至此，最基本的配置就完成了。我们查看下配置文件：
cat ./.eslintrc.js
# or
notepad ./.eslintrc.js
# 尝试创建vue项目，并放入src文件夹中
# 检测
npx eslint ./src/**
```

随后将你想要添加的规则添加到rule中即可

紧接着，我们开始在webpack中添加
```bash
npm i eslint-loader babe-eslint -D
```

在webpack.config.js中，插入以下
```js
{
    module: {
        rules: [
            {
                enforce: 'pre', // 该项会使得检测在babel编译前执行
                test: /\.(js|vue)/i,
                exclude: /node_modules/i, // 忽略该文件夹下的文件
                use: {
                    loader: 'eslint-loader',
                    options: {
                        cache: true,
                        emitError: true, // 打印错误
                        emitWarning: false, // 打印警告
                        failOnError: true, //在检测到错误时，停止编译
                        formatter: require('eslint-friendly-formatter')
 // 输出格式化，顾名思义，更加友好
                    }
                }
            }
        ]
    }
}
```

接着在.eslintrc文件中，修改以下部分：
```js
parserOptions: {
    parser: "babel-eslint", // bebel-eslint允许使用实验性的特征
    ecmaVersion: 2018,
    sourceType: "module",
    "ecmaFeatures": {
        "globalReturn": false,
        "impliedStrict": false,
        "jsx": true
    }
}
```

其他的rule看情况配置，至此eslint就基本完成配置了。

note：
由于eslint很消耗性能，建议只在开发环境中使用，即将其配置在dev.config.js之中，而正式环境中不配置，以提高打包速度。

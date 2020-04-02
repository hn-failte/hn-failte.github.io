---
title:  package.json详解
date: 2018-11-11 13:16:28
layout: post
categories: Node
tags: Npm
excerpt: package.json详解
---

# package.json详解

**name**: 包名称，符合正则`/\w+/`

**description**：包详情

**author**：包作者

**version**：版本

**keywords**：关键字数组

**maintainers**：维护者数组，元素包含name [, name] [, web]

**licenses**：许可证数组, 元素包含type和url

**repositories**: 仓库托管地址数组, 元素包含type(仓库类型，如git)、url和path(相对于仓库的路径)

**dependencies**: 生产环境所依赖的包, 关联数组，由包名称和版本号组成

**devDependencies**: 开发环境所依赖的包，一个关联数组，由包名称和版本号组成

**main**: 被require时的入口js文件

**node-echo**: 命令行程序名和主模块位置

**bin**: 用来指定各个内部命令对应的可执行文件的位置，可用于其他命令中，如scripts

```json
"bin": {
    "someTool": "./bin/someTool.js"
  }
```

**config**: 添加命令行的环境变量，在js文件中可以进行引用，如：

```js
process.env.npm_package_config_[key]
```

**scripts**: 定义脚本命令，使用`npm run [command]` 或 `npm [command]`  执行

```json
"scripts": {
    "start": "node index.js",
    "test": "tap test/*.js",
    "myscript": "echo myscript"
}
```

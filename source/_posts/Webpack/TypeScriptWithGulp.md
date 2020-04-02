---
title: 使用Gulp4.0搭建ts学习环境
date: 2019-07-20 16:25:42
layout: post
categories: Webpack
tags: TypeScript
excerpt: 基于Gulp4.0搭建一个简单的学习TypeScript的环境
---

# Gulp4.0构建TypeScript学习环境

## 必备条件

大前提：node

1、gulp

2、gulp-typescript

3、nodemon

npm i gulp nodemon -g

npm i gulp gulp-typescript -D

## Gulp4的配置

### Gulp4的变动

1、task拥有两个参数，第一个参数为任务名，第二个参数为函数，函数的参数为回调函数done，执行done才会结束任务

> 若不执行该done函数，gulp会报一个警告，询问是否完成任务，若是在watch中，监听只会执行一次

2、任务分为并行任务、串行任务，对应series、parallel

>执行串行任务tss时，会确保tsc执行后才执行hi

> 执行并行任务tsp时，会按照顺序同时执行，无需等待前一个任务执行完

> 串行与并行可以相互嵌套

### 配置

创建src文件夹，存放ts文件

创建dist文件夹，存放编译后的js文件

gulpfile.js
```js
const gulp = require("gulp")
const ts = require("gulp-typescript")

const paths = { //配置路径
    src: "src/**/*.ts",
    output: "dist"
}

const tasks = {
    tsc: function(done){ //新增done回调函数
        gulp.src(paths.src)
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest(paths.output))
        done() //执行done后，gulp才会判断此次任务完成
    },
    ts: function(){
        // gulp.watch(paths.src, tasks.tsc)) //仅有一个任务时可写成这种形式
        // gulp.watch(paths.src, gulp.series("任务一","任务二")) //并行任务的写法
        // gulp.watch(paths.src, gulp.parallel("任务一","任务二")) //串行任务的写法
        gulp.watch(paths.src, gulp.series("tsc"))
    }
}

module.exports = tasks
```

## 使用

在命令行输入nodemon <文件名[.js]>，此时，编译的ts文件一旦进行了保存操作，node会马上编译并执行

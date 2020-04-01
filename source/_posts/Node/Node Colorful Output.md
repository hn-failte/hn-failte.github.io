---
title: 如何在Node和浏览器控制台中打印彩色文字
date: 2020-01-09 13:11:43
layout: post
categories: Node
tags: Node
excerpt: 看着项目运行时打印出来的彩色文字，我突然意识到这些cli工具都是由前端写的，那么这些彩色打印是怎么实现的呢？
---

[TOC]

# 如何在Node和浏览器控制台中打印彩色文字

看着项目运行时打印出来的彩色文字，我突然意识到这些cli工具都是由前端写的，那么这些彩色打印是怎么实现的呢？

在这篇文章中，我们主要研究的是如何在Node中打印出彩色文字，浏览器的只是附带。

## 一、常用场景：

1、在Wepack的打包过程中，显示打包完成后，控制台输出了几行注目的彩色文字信息。

2、在cli工具中，提示的信息有时会附带红色或绿色的提示。



## 二、浏览器的彩色console

在浏览器中，要打印彩色的log很简单，如下：

```js
console.log('%c%s', 'color: red; font-size: 20px', 'red')
// %c代表样式，%s代表字符串
// 样式设置后，后面的字符串才能被渲染
```

那这样子，我们是不是就可以直接挪到node上了呢？

急冲冲的挪过去一试验，然而显示的还是无情的白色文字。

那在Node上要怎么解决这个问题呢？

## 三、Shell的彩色console

### 1、c语言与输出

在讲Node的彩色打印前，我们先来温习一波c语言吧。

在c语言中，\033是一个转义字符，这里注意033表示的是8进制的数字，表示换码。

当这个字符串输出时，表示对屏幕的控制。使用时可在后接一个控制字符串。

### 2、控制字符串组合

所有的控制字符串组合如下：

```
\33[0m 关闭所有属性
\33[1m 设置高亮度
\33[4m 下划线
\33[5m 闪烁
\33[7m 反显
\33[8m 消隐
\33[30~37m 这个区间都可以设置字体色
\33[40~47m 这个区间都可以设置背景色
\33[90~97m 这个区间都可以设置高亮的字体色
\33[100~107m 这个区间都可以设置高亮的背景色
\33[nA 光标上移n行
\33[nB 光标下移n行
\33[nC 光标右移n行
\33[nD 光标左移n行
\33[y;xH设置光标位置
\33[2J 清屏
\33[K 清除从光标到行尾的内容
\33[s 保存光标位置
\33[u 恢复光标位置
\33[?25l 隐藏光标
\33[?25h 显示光标
```

### 3、使用例子

例1：**单字体颜色**

```c
#include <stdio.h>
int main(){
    char black[]="\033[30m black \033[0m";
    char red[]="\033[31m red \033[0m";
    char green[]="\033[32m green \033[0m";
    char yellow[]="\033[33m yellow \033[0m";
    char blue[]="\033[34m blue \033[0m";
    char popurse[]="\033[35m popurse \033[0m";
    char indigo[]="\033[36m indigo \033[0m";
    char white[]="\033[37m white \033[0m";
    printf("%s%s%s%s%s%s%s%s", black, red, green, yellow, blue, popurse, indigo, white);
    return 0;
}
```

例2：**单背景颜色**

```c
#include <stdio.h>
int main(){
    char black[]="\033[40m black \033[0m";
    char red[]="\033[41m red \033[0m";
    char green[]="\033[42m green \033[0m";
    char yellow[]="\033[43m yellow \033[0m";
    char blue[]="\033[44m blue \033[0m";
    char popurse[]="\033[45m popurse \033[0m";
    char indigo[]="\033[46m indigo \033[0m";
    char white[]="\033[47m white \033[0m";
    printf("%s%s%s%s%s%s%s%s", black, darkred, green, yellow, blue, popurse, indigo, white);
    return 0;
}
```

例3：**自由组合**

```c
#include <stdio.h>
int main(){
    char mix[]="\033[31;42m blue font red bg \033[0m";
    printf("%s", mix);
    return 0;
}
```

## 四、Node的彩色打印

Node的实现，是基于c语言的，因此Node的彩色打印其实与c语言类似。

### 1、console.log的实现

Node中的console.log的底层是process.stdout，而process.stdout的底层又是基于Stream实现的，再进一步Stream的底层指向了.cc的c语言文件。到这里，大家也就明白了为什么使用c/c++的性能好了，但是，作为与系统最为接近的高级语言，c的强大和危险是并存的。

### 2、Node的打印

知道了console.log的实现基础，我们可以大胆的输出以下代码：

```js
var black="\033[30m black \033[0m";
var red="\033[31m red \033[0m";
var green="\033[32m green \033[0m";
var yellow="\033[33m yellow \033[0m";
var blue="\033[34m blue \033[0m";
var popurse="\033[35m popurse \033[0m";
var indigo="\033[36m indigo \033[0m";
var white="\033[37m white \033[0m";
console.log(black, red, green, yellow, blue, popurse, white);
```

毫无意外，我们打印出了彩色的log。

同样的，按照c语言的混搭，有：

```js
var mix="\033[37;42m white \033[0m";
console.log(mix);
```

除了用console.log，我们也可以直接使用process.stdout.write()实现：

```js
var mix="\033[37;42m white \033[0m";
process.stdout.write(mix)
```

### 3、chalk的打印

我们知道要如何实现了，但是我们并记不住每个符号怎么办？

这里已经有造好的轮子了：chalk

安装：`npm i chalk`

使用：`console.log(chalk.red('red'))`

是不是很眼熟？你猜的没错，chalk.red('red')最终获得的就是 `\033[31m red \033[0m` 字符串。

好了，文章到此结束，希望对正在看的你有帮助~

掘金：[https://juejin.im/user/5b2b023451882574a6724cdf](https://juejin.im/user/5b2b023451882574a6724cdf)
个人博客: [https://failte.cn](https://failte.cn)
公众号: ![qrcode](https://hn-failte.github.io/assets/res/qrcode.jpg#pic_center =30x30)

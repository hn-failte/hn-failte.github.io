---
title: vite 的由来
layout: post
author: hn-failte
categories: Front-End
cover: false
coverImg: ""
top: true
mathjax: false
tags:
  - Front-End
excerpt: post
summary: ""
date: 2020-10-09 09:36:06
---

# vite 的由来

[toc]

## 一、vite 的基本使用

1、vite 的来源

> webpack 是一个由 nodejs 编写的模块打包机，它会把项目存在的文件视为一个个模块，在编译时将模块依赖进行编译、压缩等处理，最终打包成浏览器可正常执行的文件
> 最初的 webpack 功能并没有那么多，因此最初是很快的，但随着 webpack 的发展，功能越来越丰富，所消耗的时间也越来越多，并且在某些地方还会面临时间和空间的抉择
> 一个项目可能源代码只有十多兆，但是它的 node_modules 体积能达到 2 个 G 多，其源代码的依赖关系也会很复杂，从而导致无论是在开发还是打包的过程中，都会因为速度慢导致效率低

在以往的浏览器中，往往就是因为需要考虑各种各样的兼容，各种各样的模块关系处理（如：tree shaking、公共模块抽离）等，从而使得 webpack 臃肿不堪

而现在，随着 IE 的市场份额越来越小，微软最新版的 Edge 甚至采用了 Chromium 内核，这就使得低版本的兼容是否必要存在了存在了些许争议

我们都知道 ESM 有兼容问题需要 webpack 来处理，但是倘若我们不再考虑去兼容，而直接使用浏览器支持的 ESM 呢?

vue 的作者尤雨溪（尤小右）基于这个角度，就在 vue3.0 上做实验，并将之进行了实现，称这个思想实现的工具为 vite

尤小右微博这样写道：“Vite，一个基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打包。虽然现在还比较粗糙，但这个方向我觉得是有潜力的，做得好可以彻底解决改一行代码等半天热更新的问题。”

2、vite 的使用

vite 官方搭配的 Demo 是配合 vue3 使用的，通过以下命令可以将 vite + vue3.0 拉取到本地，并装上依赖

```npm
npm init vite-app vite-demo
cd vite-demo
npm install
```

注：

> npm init vite-app vite-demo 相当于 npx create-vite-app

## 二、进一步分析 vite

在 package.json 中，目前只存在 vite、@vue/compiler-sfc 和 vue 三个依赖包

接着，我们`npm run dev`启动项目，会发现命令行返回了一个 `[vite] Optimizable dependencies detected: vue` 的提示，接着我们可以在 node_modules 中发现存在`.vite_opt_cache`的文件夹，这个文件夹是 vite 的缓存目录，会将首次执行所需要的第三方依赖（node_modules）缓存到该路径

随后打开页面`localhost:3000`，先查看 index.html 源码，页面先通过 esm 的方式引入了`/vite/client`，这是 vite 的客户端部分，再通过 src 的方式引入`/src/main.js`，

浏览器的 esm 在 import 的时候只能是文件的相对路径或绝对路径，很显然，在浏览器中的@符号是无法正常解析的，很明显 vite 对路径做了替换，vite 并不像 webpack 那样，会先将模块进行编译，而 vite 只会在访问页面的时候将模块的路径进行解析为浏览器可读的路径，并不会做模块编译，因此，vite 启动基本上是秒级的启动

## 三、vite 源码实现

## 四、vite 目前的问题

## 五、附录

### 1、各大浏览器对 ES6 的支持

pc 端：

- Chrome：Chrome 51 起便可以支持 97% 的 ES6 新特性，目前最新版的 Chrome 85 支持 98% 的特性
- Firefox：Firefox 53 起便可以支持 97% 的 ES6 新特性，目前最新版的 Firefox 81 与 Chrome 保持一致， 支持 98% 的特性
- Safari：Safari 10 起便可以支持 99% 的 ES6 新特性，Safari 14 实现了 100%特性的支持
- IE：IE7~11 基本不支持 ES6，到目前为止 IE11 仅支持 11%左右的特性
- Edge： Edge 14 可以支持 93% 的 ES6 新特性，Edge15 至最新的 18 可以支持 96% 的 ES6 新特性

移动端：

- iOS Safari：10.0 版起便可以支持 99% 的 ES6 新特性。
- Android Browser：Android 4.4.4 及以下是完全不支持的，Android5.1 开始才支持 25%，Android6.0 以上可以支持大多数 ES6 新特性
- QQ 浏览器：2017 年末，QQ 浏览器开始使用 X5 内核（基于 Chromium 57）， 支持了大多数的 ES6 特性
- UC 浏览器：2017 年末，UC 浏览器开始使用 U4 内核（基于 Chromium 57）， 支持了大多数的 ES6 特性

服务端：

- Node.js：6.5 版起便可以支持 97% 的 ES6 新特性。（6.0 支持 92%）

### 2、各大浏览器的市场份额

![image-20201009104803498](https://s1.ax1x.com/2020/10/09/0DPVrd.png)

## 六、参考引用

1、[can i use](https://www.caniuse.com/?search=module)

2、[百度流量研究院](https://tongji.baidu.com/research/site)

3、[vite 源码](https://github.com/vitejs/vite)

4、[compat-table](https://github.com/kangax/compat-table/tree/gh-pages/es6)

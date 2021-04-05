---
title: tapable 在 Webpack 中的应用
layout: post
author: hn-failte
categories: Webpack
cover: false
coverImg: ""
top: true
mathjax: false
tags:
  - Webpack
excerpt: tapable 的使用，与 tapable 在 Webpack 中的应用
summary: ""
date: 2021-04-05 10:49:22
---

# tapable 在 Webpack 中的应用

## 一、tapable 是什么

首先，我们来理解下 tabable 的意义，tapable 可以拆分为 tap 和 able 的拼写，其实，含义也就是可监听的意思。

tapable 主要做的事情就是用于做各种时间的监听，提供了一系列的 hooks。

简单地说，tapable 是一个基于事件的流程管理系统。

这些 hooks 主要包括了同步和异步两大类，而同步和异步中，又分了几中不同系列的钩子。

同步类的钩子主要有：

- SyncHook
- SyncBailHook
- SyncWaterfallHook
- SyncLoopHook

异步类的钩子主要有：

- AsyncParallelHook
- AsyncParallelBailHook
- AsyncSeriesHook
- AsyncSeriesBailHook
- AsyncSeriesWaterfallHook

接下来，我们来说说这些钩子的用法。

## 二、tapable 基本钩子

1、基本的 Hook 类

该类是所有其他 Hook 类的原型

注：以下源码只标注单个方法或部分重要代码的注释，具体请查看源码

```js
const CALL_DELEGATE = function (...args) {
  // 生成同步的 call 方法
  this.call = this._createCall("sync");
  return this.call(...args);
};
const CALL_ASYNC_DELEGATE = function (...args) {
  // 生成异步回调的 call 方法
  this.callAsync = this._createCall("async");
  return this.callAsync(...args);
};
const PROMISE_DELEGATE = function (...args) {
  // 生成异步 promise 的 call 方法
  this.promise = this._createCall("promise");
  return this.promise(...args);
};
class Hook {
  constructor(args = [], name = undefined) {
    this._args = args; // 实例时携带的参数集
    this.name = name; // 该 hook 实例的 name，可为空
    this.taps = []; // 内部的 tap 实例集
    this.interceptors = []; // 挟持集，会在注册 tap 时，用于处理参数
    this._call = CALL_DELEGATE; // 调用创建的同步 call 方法
    this.call = CALL_DELEGATE; // 调用创建的同步 call 方法
    this._callAsync = CALL_ASYNC_DELEGATE; // 调用创建的异步 call 方法
    this.callAsync = CALL_ASYNC_DELEGATE; // 调用创建的异步 call 方法
    this._promise = PROMISE_DELEGATE; // 调用创建的异步 promise 方法
    this.promise = PROMISE_DELEGATE; // 调用创建的异步 promise 方法
    this._x = undefined; // 用于给其他Hook类存储参数用，Hook类未使用到

    // 若在子类有重写，则覆盖以下方法
    this.compile = this.compile; // 将抽象的 compile 方法进行覆盖
    this.tap = this.tap; // 将同步的 tap 方法进行覆盖
    this.tapAsync = this.tapAsync; // 将异步函数的 tap 方法进行覆盖
    this.tapPromise = this.tapPromise; // 将异步 promise 的 tap 方法进行覆盖
  }
  compile() {
    // 抽象方法，需子类实例实现
  }
  _createCall() {
    // 会调用 compile 方法创建一个 call 方法
  }
  _tap() {
    // 最基本的 tap 方法，其他的 tap 方法均是基本该方法封装
  }
  tap() {
    // 同步的 tap 方法
  }
  tapAsync() {
    // 异步函数的 tap 方法
  }
  tapPromise() {
    // 异步 promise 的 tap 方法
  }
  _runRegisterInterceptors() {
    // 将参数执行注册挟持器操作
  }
  withOptions() {
    // 将 tap 相关的方法重新封装一套暴露到外部的 options 中
  }
  isUsed() {
    // 该 hooks 是否有被使用（tap 或挟持器的数量不为 0 则认为未被使用）
  }
  intercept() {
    // 添加挟持，挟持方法需包括一个 register 方法用于进行挟持
  }
  _resetCompilation() {
    // 重置所有重写过的 call 方法（若_call方法也被重写则会重置为重写后的 _call 方法）
    // 包括 call、callAsync、promise
  }
  _insert() {
    // 将新增的监听插入到 taps 中，若已存在，则先删后增
  }
}

// 将 Hook 的原型设置为 null（不会继承任何Object原型的方法）
Object.setPrototypeOf(Hook.prototype, null);
```

2、基本的 Hook 初始类

该类会在其他 Hook 类继承基本 Hook 类时提供用来重写 compile 方法。

该类我们重点讲解其中的几个方法。

```js
class HookCodeFactory {
  constructor(config) {
    this.config = config;
    this.options = undefined;
    this._args = undefined; // 用于存储初始的options参数
  }

  // 该方法会通过 new Function() 将传参 args 与字符串 code 实例化为一个函数
  create(options) {
    // 该处做了简化处理
    let code = ``;
    let fn = new Function(this.args(), code);
    return fn;
  }

  // 将实例的compile时的参数存到 _x 中（在 Hook 类中该变量有保留为空）
  // 该参数会通过 setup 的 this 带入到 compile 中
  setup(instance, options) {
    instance._x = options.taps.map((t) => t.fn);
  }

  /*
   * 由于其他大部分代码都是拼接字符串构建函数，此处就不再做更多注解
   */
}
```

## 三、tapable 扩展钩子

注意：所有相关同步的 hooks，异步 tap 均重写为了报错

1、SyncHook

使用

```js
const { SyncHook } = require("tapable");

// 实例话一个Hooks类进行使用，传递的字符串参数会作为执行函数的参数
const hooks = new SyncHook(["arg1", "arg2", "arg3"]);

// 同步监听
hooks.tap("a", (...args) => {
  // 该处的args包括了arg1、agr2、arg3
  console.log(args, "a");
});

hooks.tap("b", (...args) => {
  console.log(args, "b");
});

hooks.tap("c", (...args) => {
  console.log(args, "c");
});

// call的参数会传递给前面监听的事件
hooks.call("call", () => {
  // 同步方法没有回调，若需要回调，直接在外边写即可
  console.log("call");
});
```

2、SyncBailHook

```js
const { SyncBailHook } = require("tapable");

const hooks = new SyncBailHook(["params"]);

hooks.tap("a", () => {
  console.log("hooks a");
  return void 0;
});
hooks.tap("b", () => {
  console.log("hooks b");
  return true;
});
hooks.tap("c", () => {
  // 前一个 tap 的返回值不为 undefined 时，不会再执行后续的 tap
  console.log("hooks c");
});

hooks.call("start", () => {
  console.log("done");
});
```

3、SyncWaterfallHook

```js

```

4、SyncLoopHook

```js

```

5、AsyncParallelHook

```js
const { AsyncParallelHook } = require("tapable");

// 并行的异步 Hook
const hooks = new AsyncParallelHook(["params"]);

hooks.tapPromise("a", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a");
      resolve();
    }, 1000);
  });
});

hooks.tapPromise("b", () => {
  // a、b 同步执行，b 会先完成
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks b");
      resolve();
    }, 500);
  });
});

hooks.callAsync("start", () => {
  console.log("done");
});
```

6、AsyncParallelBailHook

```js

```

7、AsyncSeriesHook

```js
const { AsyncSeriesHook } = require("tapable");

// 串行的异步 Hook
const hooks = new AsyncSeriesHook(["params"]);

hooks.tapPromise("a", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks a");
      resolve();
    }, 1000);
  });
});

hooks.tapPromise("b", () => {
  // 先执行完 a 后，才会执行 b
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hooks b");
      resolve();
    }, 500);
  });
});

hooks.callAsync("start", () => {
  console.log("done");
});
```

8、AsyncSeriesBailHook

```js

```

9、AsyncSeriesWaterfallHook

```js

```

## 三、tapable 在 webpack 中的使用

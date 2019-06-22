---
title: 实现call、apply、bind
layout: post
categories: ES6
tags: ES6 call apply bind
excerpt: 实现call、apply、bind
---

# 面试题：实现call、apply、bind

## 实现call

```js
Function.prototype.mycall = function(Tcontext, ...args){
    var globalThis = typeof window==="undefined" ? global : window;
    var context = (Tcontext instanceof Object && Tcontext!==null)
        ? Tcontext
        : globalThis;
    var sym = Symbol("call") //使用Symbol变量使得对象内部变量命名不冲突
    var val = context[sym] = this //为函数改变this为传入对象
    var res = val(...args); //执行函数
    delete context[sym]; //删除中间变量
    return res;
}
```
这种方法是网上流传最为广泛的方法
实现了该方法后，在实现apply、bind时，稍作转化即可
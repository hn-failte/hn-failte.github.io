---
title: 另一种实现call、apply、bind的方法
layout: post
categories: ES6
tags: ES6 call apply bind
excerpt: 另一种实现call、apply、bind的方法
---

# 另一种实现call、apply、bind的方法

## 实现bind

```js
module.exports = function(Tcontext, ...args) {
  let globalThis = typeof window === "undefined" ? global : window;
  let context = typeof Tcontext === "undefined" ? globalThis : Tcontext;
  let withArgs = args.length != 0; //是否传参
  if (!!this.prototype && typeof context === "object" && context !== null) {
    //context是有效对象
    return withArgs
      ? () => Object.assign(context, new this(...args)) //若带参，返回的函数不需要处理接收参数
      : (...args) => Object.assign(context, new this(...args)); //若不带参，返回的函数需要处理接收参数
  } else {
    return withArgs
    ? ()=>this(...args)
    : (...args)=>this(...args)
  }
};
```

## 实现call

在实现了bind后，只需要将call转换给bind处理就可以了

```js
module.exports = function(context, ...args){
    return this.newBind(context, ...args)()
}
```

## 实现apply

实现了call后，只需要处理下参数，转换给call处理就可以了

```js
module.exports = function(context, args){
    return args instanceof Array?this.newCall(context, ...args):this.newCall(context)
}
```

## 使用

```js
const newBind = require("./bind")
const newCall = require("./call")
const newApply = require("./apply")

Function.prototype.newBind = newBind //将bind挂载到Function原型，使得任何实例可以像使用bind一般使用newBind
Function.prototype.newCall = newCall //将call挂载到Function原型，使得任何实例可以像使用call一般使用newCall
Function.prototype.newApply = newApply //将apply挂载到Function原型，使得任何实例可以像使用apply一般使用newApply
```

在挂载到原型上后，就可以正常使用了

## 测试

1、bind的测试

```js
require(".") //导入模块

const obj = {
    q: "1"
}

const Parent = function(a, b){
    this.a = a;
    this.b = b
}

//一、使用bind的函数是构造函数，context是有效对象
//测试bind带参，执行函数不带参的情况
try {
    console.log(Parent.newBind(obj,3,2)())
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}

//测试bind带参，执行函数带参的情况 => 执行函数的参数不生效
try {
    console.log(Parent.newBind(obj,3,2)(3,4))
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}

//测试bind不带参的情况，执行函数不带参的情况 => 执行函数的参数应为undefined
try {
    console.log(Parent.newBind(obj)())
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}

//测试bind带参，执行函数带参的情况 => 执行函数的带参应生效
try {
    console.log(Parent.newBind(obj)(3,4))
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}


//二、使用bind的函数是构造函数，context是无效对象
//测试bind带参，执行函数不带参的情况
console.log(Parent.newBind(null,3,2)())

//测试bind带参，执行函数带参的情况
console.log(Parent.newBind(null,3,2)(3,4))

//测试bind不带参的情况，执行函数不带参的情况
console.log(Parent.newBind(null)())

//测试bind带参，执行函数带参的情况
console.log(Parent.newBind(null)(3,4))

//三、使用bind的函数不是构造函数
console.log(Math.pow.newBind(obj, 3, 2)())
console.log(Math.pow.newBind(null, 3, 2)())
console.log(Math.pow.newBind(1, 3, 2)())
console.log(Math.pow.newBind(null)(2,3))


console.log("测试完成")
```

2、call的测试

```js
require(".") //导入模块

const obj = {
    q: "1"
}

const Parent = function(a, b){
    this.a = a;
    this.b = b
}

//一、使用call的函数是构造函数，context是有效对象
//测试call带参
try {
    console.log(Parent.newCall(obj,3,2))
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}


//测试call不带参的情况 => 执行函数的参数应为undefined
try {
    console.log(Parent.newCall(obj))
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}

//二、使用call的函数是构造函数，context是无效对象
//测试call带参
console.log(Parent.newCall(null,3,2))

//测试call不带参的情况
console.log(Parent.newCall(null))

//三、使用call的函数不是构造函数
console.log(Math.pow.newCall(obj, 3, 2))
console.log(Math.pow.newCall(null, 3, 2))
console.log(Math.pow.newCall(1, 3, 2))


console.log("测试完成")
```

3、apply的测试

```js
require(".") //导入模块

const obj = {
    q: "1"
}

const Parent = function(a, b){
    this.a = a;
    this.b = b
}

//一、使用apply的函数是构造函数，context是有效对象
//测试apply带参
try {
    console.log(Parent.newApply(obj,[3,2]))
} catch (error) {
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}


//测试apply不带参的情况 => 执行函数的参数应为undefined
try {
    console.log(Parent.newApply(obj))
} catch (error) {
    console.log(error);
    if(error.toString()=="Illegal context") console.log("err")
    else console.log("Failed")
}

//二、使用apply的函数是构造函数，context是无效对象
//测试apply带参
console.log(Parent.newApply(null,[3,2]))

//测试apply不带参的情况
console.log(Parent.newApply(null))

//三、使用apply的函数不是构造函数
console.log(Math.pow.newApply(obj, [3, 2]))
console.log(Math.pow.newApply(null, [3, 2]))
console.log(Math.pow.newApply(1, [3, 2]))
console.log(Math.pow.newApply(1, 3, 2)) //第二个参数不为数组，结果应异常


console.log("测试完成")
```

经过测试，实现call、apply、bind基本功能是ok的

## github地址

[源码](https://github.com/hn-failte/call-apply-bind)
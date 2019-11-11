---
title: 看不懂源码？先来恶补一波Object原型吧
layout: post
categories: JavaScript
tags: prototype
excerpt: JavaScript, 原型, prototype
---

[TOC]

# Object

Object是一种引用数据类型，也是一个构造函数。

## Object属性

### 1、Object.prototype

Object的原型。
Object原型处于原型链的顶端，是所有对象的原型。

### 2、Object.name

返回Object函数名。

## Object方法

### 1、Object.assign()

将两个对象合并，并返回新的对象。
在产生冲突时，后者的属性会覆盖前者。
该方法属于浅拷贝。

```js
var target={name: "failte", age: 18};

var source={sex: "man", age: 22};

var obj = Object.assign(target, source);
```

### 2、Object.create()

以对象原型，创建一个新对象。
第一个参数为原型对象，第二个参数为新描述符属性对象。

```js
var obj = {
    this.a="a";
    this.b="b"
};

var nobj = Object.create(obj, {
    name: {
        value: 42,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
```

### 3、Object.seal()

封装对象。封装后的对象无法增删属性，但可以修改属性。
可以通过`Object.isSealed()`方法判断对象是否被封装。

```js
var obj = {a: 1};

Object.seal(obj);

obj.b = 'el';

delete obj.a;

console.log(obj);
```

### 4、Object.freeze()

冻结对象。被冻结的对象增删改属性。
返回和传入的参数是同一对象。
可以使用`Object.isFrozen()`方法判断对象是否被冻结。

```js
var obj = {a: 1};

Object.freeze(obj);

obj.b = 2;

delete obj.a;

obj.a = 10;

console.log(obj);
```

### 5、Object.is()

判断两个对象是否相同。
比较两方为 undefined、null、true、false、相同字符串、同一对象、NaN、+0、0、-0、数字时，返回true，其他情况返回false。

```js
var obj = {a: 1, b: 2};

console.log(Object.is(undefined, undefined));

console.log(Object.is(null, null));

console.log(Object.is(true, true));

console.log(Object.is(false, false));

console.log(Object.is('aaa', 'aaa'));

console.log(Object.is(obj, obj));

console.log(Object.is(NaN, NaN));

console.log(Object.is(-0, -0));

console.log(Object.is(+0, +0));

console.log(Object.is(0, 0));

console.log(Object.is(100, 100));
```

### 6、Object.preventExtensions()

限制对象不可扩展。
可以通过`Object.isExtensible()`判断对象是否被限制。

```js
var obj = {a: 1, b: 2};

Object.preventExtensions(obj);

obj.c = 3;

console.log(obj);
```

### 7、Object.getOwnPropertyNames()

返回对象可以遍历的属性的键名数组。

ES6的简洁写法为：`Object.keys(obj)`

```js
var obj = {a: 1, b: 2};

console.log(Object.keys(obj));
```

### 8、obj.hasOwnProperty()

判断对象是否存在属性

ES6简洁写法：`key in obj`

```js
var obj = {a: 1, b: 2};

console.log(obj.hasOwnProperty('a')); // ES5

console.log('a' in obj); //ES6
```

### 9、Object.getOwnPropertyDescriptor()

查询对象属性的描述符。

```js
var obj = {a: 1, b: 2};

console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
```

### 10、Object.getOwnPropertyDescriptors()

查询对象的描述符。

```js
var obj = {a: 1, b: 2};

console.log(Object.getOwnPropertyDescriptors(obj));
```

### 11、Object.getOwnPropertySymbols()

返回对象所有的Symbol值属性键名数组。

```js
var obj = {a: 1, b: 2, [Symbol('a')]: 3};

console.log(Object.getOwnPropertySymbols(obj));
```

### 12、Object.defineProperties()

定义对象属性。

```js
var obj = {};

Object.defineProperties(obj, "val", {
    value: undefined, // 属性值，默认undefined
    writable: false, // 是否可写，默认false
    enumerable: false, // 是否可枚举，默认false
    configurable: false, // 是否可配置，默认false
    get: undefined, // 该属性的getter，默认undefined
    set: undefined, // 该属性的setter，默认undefined
})
```

### 13、Object.values()

返回对象所有的属性值数组。

```js
var obj = {a: 1, b: 2};

console.log(Object.values(obj));
```

### 14、Object.entries()

返回对象所有属性与属性值的键值对列表。
```js
var obj = {a: 1, b: 2};

console.log(Object.entries(obj));
```

### 15、Object.fromEntries()

把键值对列表转换为一个对象。与Object.entries()方法相反。
```js
var obj = {a: 1, b: 2};

var entries = Object.entries(obj);

console.log(Object.fromEntries(entries));
```

### 16、Object.getPrototypeOf()

获取对象的原型。相当于直接获取obj.prototype。
```js
var obj = {a: 1, b: 2};

console.log(Object.getPrototypeOf(obj));
```

### 17、Object.setPrototypeOf()

设置对象的原型。相当于直接设置obj.prototype。
```js
function Animal() {
    this.a = 1;
    this.b = 2;
}

var obj = {};

Object.setPrototypeOf(obj, new Animal());

console.log(obj.a);
```

### 18、Object.toString()

## 原型方法

### 1、apply()

可以修改this的指向，执行并返回改变指向后的函数的运行结果。

原函数的传参以数组的方式传入。

### 2、arguments

返回当前函数的实参列表。

get/set

### 3、bind()

可以修改this的指向，返回改变指向后的函数。

### 4、call()

可以修改this的指向，执行并返回改变指向后的函数的运行结果。

原函数的传参以多个参数的的方式传入。

get/set

### 5、caller()

返回函数的调用环境。

### 6、constructor()

返回当前对象的构造函数。

### 7、length

返回当前函数的形参个数。

### 8、name

返回当前对象的名称。

### 9、toString()

返回当前对象的字符串形式。

### 10、Symbol.hasInstance

判断某对象是否为某构造器的实例。
用它自定义instanceof操作符在某个类上的行为。

获取Function原型的instanceof对应的方法
```js
var func = () => {};
var obj = {};
var log1 = Function[Symbol.hasInstance](func, Function);
var log2 = Object[Symbol.hasInstance](obj, Object);
console.log(log1, log2)
```

自定义类，并重写instanceof方法
```js
class My {
	[Symbol.hasInstance](instance) {
		console.log(instance)
		return true;
	}
	constructor() {
		this.a=1
	}
}
var my = new My()
console.log(my instanceof My)
```

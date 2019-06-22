---
title: JavaScript核心：两链一包
layout: post
categories: JavaScript
tags: JavaScript 作用域 闭包 原型 原型链
excerpt: JavaScript核心
---

# JavaScript核心：两链一包

## 作用域与闭包

### 作用域

1、变量提升

* 浏览器解析器在解析js时，预解析变量并将变量名提升到作用域的行为
* 函数与变量同时声明为一个字符时，预解析时函数有高优先级

2、全局变量

* 在全局声明的变量，作用域在全局
* 函数内有未使用声明符声明的变量时，这个变量会被浏览器转换为全局变量

3、局部变量

* 在函数内声明的变量，作用域在函数内
* 函数的传参作用域在函数内，传参与全局变量不是同一个变量

3、作用域链

* 执行函数时，总是先从函数内部找局部变量
* 若没有，则会依次向上级作用域寻找变量

### 闭包

**闭包就是访问函数内部私有属性或私有函数的公有方法**

* 1、函数拥有局部作用域，无法在外部访问局部的属性或方法

```javascript
function test(){
    var a="a";
}
console.log(a);//undefined
```

* 2、函数可以设置公共属性或方法，是的外部能够进行访问

```javascript
function test(){
    this.a="a"
}
console.log(new test().a);//a;
```

* 3、通过使用公共方法操作私有属性或方法，这种方式就称之为闭包

```javascript
function test(){
    var a="a";
    this.getA=function(){ return a; }
    this.setA=function(a){ this.a=a; }
}
```

## 原型和原型链

### 原型

1、构造函数：`construct`

用来生成对象的函数。最常见的有`Object`、`Function`、`Array`、`String`、`Number`等。

2、`new`的作用

(1)创建一个对象
(2)改变构造函数的this指向为实例对象
(3)在实例对象中产生`__proto__`属性，指向构造函数的`ptototype`

3、原型

(1)定义函数时，会生成一个`prototype`的属性，指向当前函数，这个属性称之为函数的原型
(2)构造函数`new`时，会生成一个对象，并且会生成`__proto__`属性，指向构造函数的`prototype`，这个属性称之为这个对象的原型
(3)构造函数作为对象时存在`__proto__`，指向`Function`原型
(4)所有的原型对象的`__proto__`最后都会指向`Object`原型，而`Object`原型的`__proto__`是null。
(5)任何原型的`constructor`指向构造函数，而构造函数的`prototype`又指向原型，如此，会形成死循环（类似先有鸡还是先有蛋）

### 原型链

根据原型的规则画出的关系链称为原型链。
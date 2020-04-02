---
title: 字符串拼接性能优化
date: 2019-01-09 18:18:06
layout: post
categories: JavaScript
tags: String
excerpt: 在Java中，对大量字符串处理时存在StringBuilder、StringBuffer来进行优化，那么JavaScript的String是否也能进行优化呢？
---

# 字符串拼接性能优化

在Java中，对大量字符串处理时存在StringBuilder、StringBuffer来进行优化，那么JavaScript的String是否也能进行优化呢？

这里以Java的StringBuffer为命名实现了一个JavaScript的StringBuffer。

## 传统String拼接

* **`ECMAScript`** 的字符串的值 **不能改变**。

### 字符串拼接过程

```js
    var str = "hello ";
    str += "world";
```

以上代码的执行步骤如下：

* 1、创建存储 "hello " 的字符串。
* 2、创建存储 "world" 的字符串。
* 3、创建存储连接结果的字符串。
* 4、把 str 的当前内容复制到结果中。
* 5、把 "world" 复制到结果中。
* 6、更新 str，使它指向结果。

每次完成字符串连接都会执行步骤 2 到 6，使得这种操作非常消耗资源。如果重复这一过程几百次，甚至几千次，就会造成性能问题。

## 解决方法

### 数组解决方法

用 `Array` 对象存储字符串，然后用 `join()` 方法创建最后的字符串。

```js
var arr = new Array();
arr[0] = "hello ";
arr[1] = "world";
var str = arr.join("");
```

以上代码的执行步骤如下：

* 1、创建数组
* 2、将需要拼接的字符串加入数组
* 3、调用join方法，创建存储结果的字符串，将数组中的元素全部拼接到字符串
使用该方法只在调用 join() 方法时才会发生连接操作。
缺陷：这段代码不能确切反映出它的意图。

#### StringBuffer类打包

* 为了解决传统方法存在的缺陷，可以将传统方法类打包为StringBuffer，专门解决拼接问题。
* 该类存在两个方法，即 append() 和 toString() 方法。

```javascript
function StringBuffer(str){
    var string = str ? [str] : [];
    if(!StringBuffer.prototype.append){
        StringBuffer.prototype.append=function(str){
            string.push(str);
        }
        StringBuffer.prototype.toString=function(){
            return string.join("");
        }
    }
}
```

`append()` 是自定义方法，接收一个参数，并将该参数添加到内部数组中，`toString()`已经在继承Object原型存在，需要重写，该方法调用数组的`join()`方法，返回数组拼接后字符串。

使用demo：

```javascript
var sb=new StringBuffer("failte");
console.log(sb);
console.log(sb.toString());
sb.append("'s");
console.log(sb.toString());
```

#### 性能对比：

```javascript
function StringBuffer(str){
    var string = str ? [str] : [];
    if(!StringBuffer.prototype.append) {
        StringBuffer.prototype.append = function (str) {
            string.push(str);
        }
        StringBuffer.prototype.toString = function () {
            return string.join("");
        }
    }
}

// 传统拼接
var str1 = "";
var d1 = Date.now(); // 时刻1
for(let i = 0; i<100000; i++){
    str1 += i;
}
var t1 = Date.now() - d1; // 时间间隔1

// StringBuffer拼接
var str2 = new StringBuffer("");
var d2 = Date.now(); // 时刻2
for(let i = 0; i<100000; i++){
    str2.append(i);
}
var t2 = Date.now()-d2; // 时间间隔2
console.log("t1: ", t1, "t2: ", t2);
```

**测试结果**：
使用两种方法测试拼接100000个字符串，三次结果如下：

* Round 1：
String拼接：26ms
StringBuffer拼接：5ms
* Round 2：
String拼接：24ms
StringBuffer拼接：5ms
* Round 3：
String拼接：28ms
StringBuffer拼接：5ms

测试完成。通过比较，可以很明显的发现，StringBuffer拼接的速度比String拼接速度快5倍。

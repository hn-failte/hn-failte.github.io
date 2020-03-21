---
title: 明源云前端面试记录
layout: post
categories: interview
tags: interview
excerpt: 明源云前端面试记录
---

# 明源云前端面试记录

## 笔试题

1、请写出你知道http状态码及其含义

2、假如移动端设备的尺寸是640px要实现每1rem=16px怎么实现？

3、请使用css画出梯形

4、实现一个双飞翼布局，要求中间部分优先加载

5、写出下面代码的运行结果

```js
var a = 3;
function change(a) { a = 4; }
change(a)
alert(a);
var user = {age:30} 
function change2(user) { user.age = 40; }
change2(user);
alert(user.age);
function change3(user) { user = {age:50} }
change3(user);
alert(user.age);
```

6、写出下面的结果
```js
function test(a, b){
    alert(a, b)
    return {
        test: function(a, b){
            return test(a, b)
        }
    }
}
```
| 输入                                             | 1st alert | 2nd alert | 3rd alert |
| ------------------------------------------------ | --------- | --------- | --------- |
| var a = test(111, 112); a.test(121); a.test(131) |           |           |           |
| var b = test(211).test(212).test(213)            |           |           |           |
| var c = test(311).test(321, 322); a.test()       |           |           |           |

7、如何使得a==3 && a==6成立？

8、画出vue/react/angular任意一个框架组件的生命周期图

9、生成一个长度100的数组，它的每个元素的值等于数组长度减去它的下标。要求不使用for和while实现。 

10、写出将指定类型数据转换成指定树的算法
例：
初始数据：
```js
var data = [
    {"parent_id": 0, "id":'a', "value": "xxx"},
    {"parent_id": 1, "id":'b', "value": "xxx"},
    {"parent_id": 4, "id":'c', "value": "xxx"},
    {"parent_id": 3, "id":'d', "value": "xxx"},
    {"parent_id": 2, "id":'e', "value": "xxx"},
    {"parent_id": 1, "id":'f', "value": "xxx"}]

```
通过方法toTree转换树，结果如下：
```js
var obj = {
    a: {
        value: 'xxx'
        children: {
            b: {
                value: 'xxx',
                e: {
                    value: 'xxx',
                    children: {
                    //...
                    }
                },
                f: {
                    value: 'xxx',
                    children: {
                    //...
                    }
                }
            },
            c: {
                value: 'xxx',
                children: {
                //...
                }
            },
            // ...
        }
    }
}
```

## 正式面

## 高频问题：

1、你还有什么想问我的？

2、你的个人职业发展是怎么样的呢？

### 技术：

1、页面渲染的过程

2、重排和重绘的区别

3、什么情况会触发重排

4、说说原型链

5、深拷贝以及几种实现方式

6、webpack的优化

7、跨域以及使用场景

8、浏览器事件机制

9、有接触过HTTP的30x状态码吗？是什么意思呢？什么场景会出现呢？

10、XSS/CSRF原理以及预防

11、Vue实现原理

12、前端性能优化

13、defer和async的区别

14、浏览器在加载过程中的Document Ready和loaded有什么区别

15、如何获取一个变量的数据类型

16、CDN是什么工作原理

17、说说什么是mvvm

18、闭包与使用场景

19、常用的设计模式，以及如何实现

20、盒模型、IE的盒模型与其他的有什么不同

21、margin和transform的区别是什么

22、如果width为100，设置pading为50%，实际宽度是多少

23、垂直居中、水平居中的几种方法

24、BFC以及如何触发BFC

25、webpack的工作原理

26、图片在加载的过程中闪烁，要怎么优化？
（考点：渐进式图片）

### 项目

27、说说你的这个项目？

28、说说你们的项目开发流程是什么样的？

29、说说你遇到过的记忆深刻的问题？你是怎么解决的？

30、如何有个后端将某个联调数据合适改了，你该怎么做？

31、你在项目中有没有遇到过测试认为是Bug，但你不认为是的问题？

32、你们的代码规范是怎么做的？

### hr

1、你的专业不是计算机专业？为什么你会做前端呢？

2、说说你在每家公司离职的原因？

3、说说你平时的一些爱好？

4、你想象中的好团队是什么样的呢？

5、你对加班的看法？

6、你觉得你在哪个公司成长最多？为什么？

7、说说你记忆最深刻的项目
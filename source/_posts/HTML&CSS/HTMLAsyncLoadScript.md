---
title: 浏览器异步加载JS的方法
date: 2020-04-29 10:31:07
layout: post
categories: HTML
tags:
  - Async
  - JavaScript
excerpt: 浏览器异步加载JS有哪些方法？defer和async有什么区别？module加载是怎么样的？
---
# 浏览器异步加载JS的方法

## 浏览器加载JS的方法

说到这个，最常见的就是内置JS和外联JS了

内置：

```plain
<script>
console.log('加载完成')
</script>
```

外联：

```plain
<script src="" type="application/javascript"></script>
```

而后，由于浏览器默认的脚本语言为JavaScript，因此type属性可以去掉。

```plain
<script src=""></script>
```

## 浏览器渲染规则

浏览器的渲染规则是，从上到下加载，正常情况下加载完马上就会执行。

CSS文件可以边加载边渲染，而JS文件必须等到加载完成才能渲染。

若在加载过程中遇到大体积的JS文件，则会等到JS加载完后才会继续渲染，对整个页面的加载造成阻塞。

## 浏览器的异步加载

而为了解决加载阻塞问题，浏览器提供了defer属性和async属性。

那么，defer和async有什么区别呢？

给script标签加上defer属性，其内部的JS会在整个页面加载完成后才执行。这个加载完包括整个页面的渲染和其他脚本的执行。存在多个defer时，会按照顺序执行。

而若是加上async属性，JS会在该script标签加载完后执行。这个加载完成后会中断渲染来执行。执行完成后再继续渲染。由于加载速度是不确定的，多个async脚本之间无法确保执行顺序。

## 浏览器ES6模块支持

在ES6中，添加了JS模块化的标准，在script标签上添加`type="module"`即可声明为ES6模块。

```plain
<script type="module" src=""></script>
```

对添加了`type="module"`的标签，浏览器默认会对其进行defer属性的处理，即等到整个页面加载完成后再执行，同时，也可以添加async标签，这样，该标签会在加载完成后执行。

```plain
<script type="module" src="" async></script>
```

同时，添加了`type="module"`的标签也可以直接内嵌，这样浏览器会按照默认的加载方式加载。

```plain
<script type="module">
    import moduleA from './moduleA.js'
	console.log('加载完成')
</script>
```

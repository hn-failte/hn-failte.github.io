---
title: 1ink与@import的区别
layout: post
categories: css
tags: import link
excerpt: the distinction between import and link
---
## `1ink`与`@import`的区别 <span id="home">

## 目录

* **[`1ink`与`@import`的区别 ](#1)**
 	* **[差别1：归属关系的差别 ](#1.1)**
 	* **[差别2：加载顺序的差别 ](#1.2)**
	* **[差别3：兼容性的差别 ](#3.1)**
	* **[差别4：使用dom控制样式时的差别 ](#3.1)**

------

## `1ink`与`@import`的区别 <span id="1">
#### 差别1：归属关系的差别 <span id="1.1">

`link`属于`xhtml`标签，而`@import`属于`css`提供的方式，必须写在`style`标签里。`link`标签除了可以加载`css`外，还可以定义RSS、定义`rel`连接属性等，`＠import`只能加载`css`。

#### 差别2：加载顺序的差别 <span id="1.2">
当一个页面被加载的时候，即浏览者浏览页面时，`link`引用的`css`会同时被加载，而`@import`引用的`css`会等到页面全部被下载完后加载。使用`＠import`可能存在页面的样式在开始时不显示的问题。

#### 差别3：兼容性的差别 <span id="1.2">

`@import`是`CSS2.1`提出的，只在IE5以上才能识别，而`link`标签不存在兼容问题。

#### 差别4：使用dom控制样式时的差别 <span id="1.2">

当使用`JS`控制`dom`改变样式时，只能使用`link`，`dom`无法控制`＠import`。
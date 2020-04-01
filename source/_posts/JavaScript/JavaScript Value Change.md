---
title: JavaScript变量转换
date: 2018-03-29 18:48:55
layout: post
categories: JavaScript
tags: Variable
excerpt: JavaScript变量转换
---
## JavaScript变量转换 <span id="home">

## 目录

* **[自动转换 ](#1)**
	* **[(1)Number与Boolean](#1.1)**
	* **[(2)Number与String](#1.2)**
	* **[(3)String与Boolean](#1.3)**
	* **[(4)null的自动转换](#1.4)**
	* **[(5)undefined的自动转换](#1.5)**
* **[强制转换 ](#2)**
	* **[运算强制转换 ](#2.1)**
		* **[(1)Number与Boolean](#2.1.1)**
		* **[(2)Number与String](#2.1.2)**
		* **[(3)String与Boolean](#2.1.3)**
		* **[(4)null](#2.1.4)**
		* **[(5)undefined](#2.1.5)**
	* **[类型强制转换 ](#2.2)**
		* **[(1)Number](#2.2.1)**
		* **[(2)String](#2.2.2)**
		* **[(3)Boolean](#2.2.3)**
		* **[(4)null](#2.2.4)**
		* **[(5)undefined](#2.2.5)**

------
## 一、自动转换 <span id="1">

"=="的自动转换

自动转换优先级：number>boolean>String，越小越先转换

### (1)Number与Boolean: <span id="1.1">

	console.log(0==false); //true
	console.log(1==true);  //true
	console.log(2==true);  //flase
	//这个过程其实是Boolean类型转换为数字的过程

### (2)Number与String: <span id="1.2">

	console.log(""==0);  //true
	console.log("12"==12);  //true
	console.log("12a"==12);  //false
	//String自动转换时只能转换纯数字的字符串

### (3)String与Boolean <span id="1.3">

	console.log(""==false);  //true
	console.log("s"==true);  //true
	//字符串转换为boolean均为true

### (4)null的自动转换 <span id="1.4">

null的本质是空对象，自动转换时会处理空对象的引用地址，转换为数字与其他对象的处理

	console.log(null==0);  //false
	//地址是数字，且肯定不是0

	console.log(null==false);  //false
	console.log(null==true);  //false
	//地址是数字，比较时会将boolean转换为数字

	console.log(null=="null");  //false
	console.log(null=="");  //false
	//地址为数字，比较时会将String转换为数字

### (5)undefined的自动转换 <span id="1.5">

undefined表示未定义，不带任何东西，大家可以理解为老顽固(偷笑)

	console.log(undefined==0);  //false
	//无法自动转换数字

	console.log(undefined==false);  //false
	console.log(undefined==true);  //false
	//无法自动转换boolean

	console.log(undefined=="");  //false
	console.log(undefined=="undefined");  //false
	//无法自动转换为String

	console.log(undefined==null);  //true
	console.log(undefined===null);  //false
	//null是空对象，会被认为是undefined，但严格的来说两者是不相等的

## 二、强制转换 <span id="2">

### 1、运算强制转换 <span id="2.1">

"+"会尝试将两端的值尝试转换为字符串或数字。优先级：String>Number

#### (1)Number与Boolean: <span id="2.1.1">

	console.log(1+false); //1
	console.log(1+true);  //2

#### (2)Number与String: <span id="2.1.2">

	console.log(""+1);  //"1"
	console.log("1"+1);  //"11"
	//运算时，String优先级大于Number，Number转换为String

### (3)String与Boolean <span id="2.1.3">

	console.log(""+false);  //false
	console.log(""+true);  //true
	console.log(typeof(""+true));  //String
	//按照优先级，会将boolean转换为String

#### (4)null <span id="2.1.4">

	console.log(null+1);  //1
	//null的本质是空对象,强制转换会转换为0

#### (5)undefined <span id="2.1.5">

	console.log(undefined+0);  //NaN
	//强制转换数字时为NaN
	console.log(Boolean(undefined));  //false

### 2、类型强制转换 <span id="2.2">

#### (1)Number <span id="2.2.1">

	String:
	这里说下String()和toString()的区别
	toString()可以将除了null、undefined以外的一切对象转换为String，且toString()可以接收第二个参数，将字符串的进制进行改变
	String()可以将任何对象转换为String，String只有一个传参

	Boolean:
	console.log(Boolean(0));  //false
	console.log(Boolean(1));  //true
	console.log(Boolean(2));  //true
	console.log(Boolean(-2));  //true
	//除0以外均为true


#### (2)String <span id="2.2.2">

	Number:
	console.log(Number("1"));  //1
	console.log(Number("1a"));  //NaN
	console.log(Number(""));  //0
	console.log(parseInt("1a"));  //1
	console.log(parseInt("a1"));  //NaN
	console.log(parseInt(""));  //NaN
	//使用Number进行转换时必须是纯数字字符串，否则为NaN
	//使用parseInt转换时，头部必须有数字，否则为NaN
	//parseInt是全局函数，不属于Number，与Number强制转换有区别

	Boolean:
	console.log(Boolean(""));  //false
	console.log(Boolean("true"));  //true
	console.log(Boolean("false"));  //true
	//String为空是flase，其他均为true


#### (3)Boolean <span id="2.2.3">

	Number:
	console.log(Number(false));  //0
	console.log(Number(true));  //1

	String:
	输出对应的字符串

#### (4)null <span id="2.2.4">

	Number:
	console.log(Number(null));  //0

	String:
	输出对应的字符串

	Boolean:
	console.log(Boolean(null));  //false

#### (5)undefined <span id="2.2.5">

	Number:
	console.log(Number(undefined));  //NaN
	//此种方式强制转换依旧为非数字

	String:
	输出对应的字符串

	Boolean:
	console.log(Boolean(undefined));  //false

码字不易，后面还会放出各种文章，喜欢的关注一下我吖，你们的关注是我最大的动力

github：[github.com/hn-failte](https://github.com/hn-failte)

个人博客：[hn-failte.github.io](https://hn-failte.github.io)

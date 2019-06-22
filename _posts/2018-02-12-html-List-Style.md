---
title: 有趣的list-style
layout: post
categories: html
tags: list
excerpt: list-style
---
## 有趣的list-style <span id="home">

## 目录

* **[一、list-style-type ](#1)**
 	* **[1、CSS2.0 ](#1.1)**
 	* **[2、CSS2.1 的值 ](#1.2)**
* **[二、list-style-position ](#2)**
 	* **[1、书写格式 ](#2.1)**
 	* **[2、可能的值 ](#2.2)**
* **[三、list-style-image ](#3)**
	* **[书写格式 ](#3.1)**
	* **[可能的值 ](#3.1)**

------

## 一、list-style-type <span id="1">
#### 1、CSS2.0 <span id="1.1">

	值						描述
	none					无标记。
	disc					默认。标记是实心圆。
	circle					标记是空心圆。
	square					标记是实心方块。
	decimal					标记是数字。
	decimal-leading-zero	0开头的数字标记。(01, 02, 03, 等。)
	lower-roman				小写罗马数字(i, ii, iii, iv, v, 等。)
	upper-roman				大写罗马数字(I, II, III, IV, V, 等。)
	lower-alpha				小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
	upper-alpha				大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)
	lower-greek				小写希腊字母(alpha, beta, gamma, 等。)
	lower-latin				小写拉丁字母(a, b, c, d, e, 等。)
	upper-latin				大写拉丁字母(A, B, C, D, E, 等。)
	hebrew					传统的希伯来编号方式
	armenian				传统的亚美尼亚编号方式
	georgian				传统的乔治亚编号方式(an, ban, gan, 等。)
	cjk-ideographic			简单的表意数字
	hiragana				标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）
	katakana				标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）
	hiragana-iroha			标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）
	katakana-iroha			标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）

#### 2、CSS2.1 的值 <span id="1.2">

	disc | circle | square | decimal | decimal-leading-zero | 
	lower-roman | upper-roman | lower-greek | lower-latin | 
	 upper-latin | armenian | georgian | none | inherit

--------

## 二、list-style-position <span id="2">
#### 1、说明 <span id="2.1">
该属性用于声明列表标志相对于列表项内容的位置。外部 (outside) 标志会放在离列表项边框边界一定距离处，不过这距离在 CSS 中未定义。内部 (inside) 标志处理为好像它们是插入在列表项内容最前面的行内元素一样

#### 2、可能的值 <span id="2.2">

	值			描述
	inside		列表项目标记放置在文本以内，且环绕文本根据标记对齐。
	outside		默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。
	inherit		规定应该从父元素继承 list-style-position 属性的值。

--------

## 三、list-style-image <span id="3">
#### 1、书写格式 <span id="3.1">

	url("position")

#### 2、可能的值 <span id="3.2">

	值			描述
	URL			图像的路径。
	none		默认。无图形被显示。
	inherit		规定应该从父元素继承 list-style-image 属性的值。
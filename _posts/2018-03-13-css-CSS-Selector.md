---
title: css选择符权重
layout: post
categories: css
tags: CSS Selector Weight
excerpt: the weight between varoius selectors
---
## css选择符权重 <span id="home">

## 目录

* **[css选择符权重 ](#1)**
 	* **[css选择器权重列表 ](#1.1)**
 	* **[CSS选择符冲突处理 ](#1.2)**

------

## `css`选择符权重 <span id="1">
#### `css`选择器权重列表 <span id="1.1">

	选择器		权重
	内联样式		1000
	ID			0100
	CLASS		0010
	属性选择符	0010
	TAG			0001
	伪元素		0001
	伪类			0001
	inhref		0000
	群组选择符	不变
	后代选择符	相加	

#### `CSS`选择符冲突处理 <span id="1.2">

1、权重不同：选择符的`css`发生冲突时，拥有高权值的`css`选择符将会显示

2、权重相同：选择符权重一样，将会按照加载顺序进行覆盖（就近原则）

3、`a`和`a:link`同时存在时，以`a:link`优先，注：使用`a`的伪类时，需要四个伪类(`a:link`、`a:hover`、`a:active`、`a:visited`)同时使用

4、`!important`的权重为正无穷
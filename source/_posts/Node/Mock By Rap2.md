---
title:  Mock.js与Rap2模拟接口
date: 2019-06-22 17:05:46
layout: post
categories: Node
tags: Mock
excerpt: 利用基于Mock.js的Rap2模拟前端请求数据
---

# Mock.js与Rap2模拟接口

## Mock

官网：http://mockjs.com/

Mock的存在是为了让前端独立于后端进行开发。

使用了Mock后，不用再等后端写好的接口，可以与后端同步进行开发。

同时，Mock可以生成随机数据，可以模拟各种不同的场景。

## Rap2

官网：http://rap2.taobao.org/

Rap2引用了Mock的语法，并且可以视觉化的编写接口

使用的是淘宝的服务，稳定快速

## 常用的语法

**1、生成地址**

- @city(true)@county
- @province@city@county
- @county(true)

**2、姓名**

英文名

- @name
- @first@last

中文名

- @cname
- @cfirst@clast

**3、网络**

ip地址

- @ip

邮箱地址

- @email

**4、图片**

```js
@image(wxh,background[,foreground,'png/gif/jpg'][,text])
```

**5、身份证**

- @id

**6、手机号**

- /1[3-9]\d{9}/

**7、文字**

- @word
- @cword  字
- @title
- @ctitle  标题
- @sentence
- @csentence  句子
- @paragraph
- @cparagraph  段落

**8、星级评分**

- 1-5  ★

**9、年龄**

- @age

## 效果展示

![rap2](https://hn-failte.github.io/assets/posts/rap2.png)

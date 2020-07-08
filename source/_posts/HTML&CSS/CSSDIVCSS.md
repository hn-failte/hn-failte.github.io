---
title: DIV+CSS布局
date: 2020-07-08 13:16:28
layout: post
author: hn-failte
categories: CSS
cover: false
coverImg: ""
top: true
mathjax: false
tags:
  - CSS
excerpt: DIV+CSS布局详细介绍
summary: ""
---

## DIV+CSS布局

### 一、DIV结构

```
│body {}　/* 这是一个HTML元素 */

└#Container {}　/* 页面层容器 */

├#Header {}　/* 页面头部 */

├#MianBody {}　/* 页面主体 */

│　├#mainbody-left {}　/* 主体页面左边 */

│　└#mainbody-center {}　/* 主体页面中间 */

│　└#MainBody -right{}　/* 主体页面右边 */

└#footer {}　/*页面底部*/
```

用DIV+CSS做一个导航栏是非常容易的，而且我们可以通过css来对导航栏的样式方便的作出调整。用div设置导航栏一般就用<ul>和<li>标签。

4、高度显示效果不同

一般情况下只需要使用`height: 100px`; 即可，当显示效果不同时，则可以`_height: 100px`;来对IE6的高度进行设置。

5、嵌套效果不不同

有些情况下如果div中嵌套的图片大于外层div的高度，则IE6中对高度的设置始终无效，这时要注意对该css添加overflow属性，`overloaw:hidden`，则可隐藏超出边界的部分。

### 二、文件命名规范

全局样式：global.css；

框架布局：layout.css；

字体样式：font.css；

链接样式：link.css；

打印样式：print.css；

### 三、常用类/ID命名规范

页　眉：header

内　容：content

容　器：container

页　脚：footer

版　权：copyright　

导　航：menu

主导航：mainMenu

子导航：subMenu

标　志：logo

标　语：banner

标　题：title

侧边栏：sidebar

图　标：Icon

注　释：note

搜　索：search

按　钮：btn

登　录：login

链　接：link

信息框：manage

### 四、常规书写规范及方法

1、选择DOCTYPE

html5声明
```html
<!DOCTYPE html>
```

过渡的(Transitional): 要求非常宽松的DTD // 推荐
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

严格的(Strict):要求严格的DTD
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

框架的(Frameset):专门针对框架页面设计使用的DTD
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

2、指定语言及字符集

语言定义:
```html
<html xmlns=:http://www.w3.org/1999/xhtml" lang="en">
```

编码定义:
```html
<!-- 老浏览器 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- XML文件 -->
<?xml version="1.0" encoding=" utf-8"?>
```

3. 调用样式表

外部调用法：将样式表写在一个独立的.css文件中，然后在页面head区用类似以下代码调用。（推荐）

页面内嵌法：就是将样式表直接写在页面代码的head区。

4、选用恰当的元素

根据文档的结构来选择HTML元素，而不是根据HTML元素的样式来选择。例如，使用P元素来包含文字段落，而不是为了换行。

避免过渡使用div和span

尽可能少地使用标签和结构嵌套，这样不但可以使文档结构清晰，同时也可以保持文件的小巧，在提高用户下载速度的同时，也易于浏览器对文档的解释及呈视；

5、派生选择器

可以使用派生选择器给一个元素里的子元素定义样式，在简化命名的同时也使结构更加的清晰化

如：
```css
.mainMenu ul li { background: url(images/bg.gif;) }
```

6、辅助图片用背影图处理
  仅用于修饰、间隔、提醒的图片

7、结构与样式分离
  在页面里只写入文档的结构，而将样式写于css文件中，通过外部调用CSS样式表来实现结构与样式的分离。

8、文档的结构化书写

页面CSS文档都应采用结构化的书写方式，逻辑清晰易于阅读。
如：
```html
<div id="mainMenu"><ul><li></li></ul></div>
```
```css
#mainMenu ul li { }
```

9、鼠标手势

在XHTML标准中，hand只被IE识别，当需要将鼠标手势转换为“手形”时，则将“hand”换为“pointer”，即“cursor:pointer;”

### 五、注释书写

1、行间注释

直接写于属性值后面
```css
border: 1px solid #fff; /*定义搜索输入框边框*/
```

2、整段注释

```css
/*===== 搜索条开始 =====*/   
.search {
    border:1px solid #fff;   
    background:url(../images/icon.gif) no-repeat #333;   
}
/*===== 搜索条结束 =====*/
```

### 六、样式属性代码缩写

1、不同类有相同属性及属性值的缩写

对于两个不同的类，但是其中有部分相同甚至是全部相同的属性及属性值时，应对其加以合并缩写，特别是当有多个不同的类而有相同的属性及属性值时，合并缩写可以减少代码量并易于控制。

2、同一属性的缩写

background包含：background-color、background-image、background-repeat、background-position

同一属性根据它的属性值也可以进行简写

3、内外侧边框的缩写

margin、padding

top right bottom left

上边与下边、左边与右边的边框属性值相同时，则属性值可以直接缩写为两个(上下、左右)

上下左右四个边框的属性值都相同时，则可以直接缩写成一个

在CSS中关于内外侧边框的距离是按照上、右、下、左的顺序来排列的，当这四个属性值不同时也可直接缩写

4、颜色值的缩写

当RGB三个颜色值数值相同时，可缩写颜色值代码
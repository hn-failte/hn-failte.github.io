---
title: flex布局
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
excerpt: flex布局详细介绍
summary: ""
---

# flex布局

## 一、使用注意

> 将元素display声明为flex，该元素将成为flex布局的父元素，下一级的直系子元素将成为flex子项

> flex容器内元素，即flex item的float，clear、vertical-align属性将失效

## 二、flex容器属性

1、flex-direction  排列方向

> row:主轴为水平方向，项目沿主轴从左至右排列

> column：主轴为竖直方向，项目沿主轴从上至下排列

> row-reverse：主轴水平，项目从右至左排列，与row反向

> column-reverse：主轴竖直，项目从下至上排列，与column反向



2、flex-wrap  换行方式

> nowrap：自动缩小项目，不换行

> wrap：换行，且第一行在上方

> wrap-reverse：换行，第一行在下面



3、flex-flow  flex-direction和flex-wrap的简写

默认值为row nowrap



4、justify-content  主轴对齐方式

> flex-start：左对齐

> flex-end：右对齐

> center：居中对齐

> space- between：两端对齐

> space-around：沿轴线均匀分布



5、align-items  交叉轴对齐方式



6、align-content  多行交叉轴对齐方式

定义了align-content后，align-items属性将失效

> flex-start：左对齐

> flex-end：右对齐

> center：居中对齐

> space-between：两端对齐

> space-around：沿轴线均匀分布

> stretch：各行将根据其flex-grow值伸展以充分占据剩余空间



## 三、flex item属性详述

item的属性在item的style中设置。

1、order

order的值是整数，默认为0，整数越小，item排列越靠前



2、flex-grow

定义当flex容器有多余空间时，item是否放大。默认值为0，即当有多余空间时也不放大；可能的值为整数，表示不同item的放大比例



3、flex-shrink
定义当容器空间不足时，item是否缩小。默认值为1，表示当空间不足时，item自动缩小，其可能的值为整数，表示不同item的缩小比例。

4、flex-basis

主轴占据空间，默认值为auto。



5、flex

flex属性是flex-grow、flex-shrink和flex-basis三属性的简写总和。



6、align-self

> align-self属性允许item有自己独特的在交叉轴上的对齐方式，它有六个可能的值。默认值为auto

> auto：和父元素align-self的值一致

> flex-start：顶端对齐

> flex-end：底部对齐

> center：竖直方向上居中对齐

> baseline：item第一行文字的底部对齐

> stretch：当item未设置高度时，item将和容器等高对齐



## 四、比值排序

1、等比

```css
.div1{flex:1;}
.div2{flex:1;}
.div3{flex:1;}
```

2、左固定，其余等比

```css
.div1{width:20%;}
.div2{flex:1;}
.div3{flex:1;}
```

3、左右固定，其余等比

```css
.div1{width:20%;}
.div2{flex:1;}
.div3{width:20%;}
```
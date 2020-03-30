# 为什么不用Redux

---

title: 为什么不用Redux
layout: post
categories: React
tags: React
excerpt: Why not Redux?

---

## Redux的由来: Flux

## Redux的思想

核心思想：

- 单一数据源
- 状态是只读的
- 纯函数

基本方法：
Redux包含createStore、combineReducer、dispatch、getState、subscribe等方法

数据流向：
UI层提前subscribe更新UI的订阅事件
UI层dispatch一个action
action经过Store传递到Reducer
Reducer修改Store中的数据并emit订阅事件
订阅的事件通过getState获取Store中的数据并执行订阅事件更新UI层

## Redux的使用场景

1、中大型项目

2、大多数页面都要用到公共信息

3、一个页面存在多个请求

4、组件间期望通过非组件的形式通信

## 为什么不用Redux

1、小型项目

2、首页的数据每次都需要刷新

3、存在高度复用页面（如：详情页、结果页）

4、多源多请求复用率很低的数据

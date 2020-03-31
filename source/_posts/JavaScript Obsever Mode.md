---
title: JavaScript设计模式之发布&订阅模式
date: 2019-04-27 18:48:55
layout: post
categories: JavaScript
tags: Obsever
excerpt: 面试官：你能说说发布&订阅模式和观察者模式有什么区别吗？懵逼了吗？来，上车~
---

[TOC]

# 发布&订阅模式

面试官：你能说说发布&订阅模式和观察者模式有什么区别吗？懵逼了吗？来，上车~

## 发布&订阅模式满足的条件

1、存储多个事件

2、每个事件可以订阅多个函数

3、提供订阅、取消订阅、触发三种方法

## $on 事件绑定

1、语法：`$on(eventName, callback)`

2、分析：

- 一个事件对应多个事件函数

- 分析绑定的这个事件名称在事件仓库中是否存在 如果存在则直接将事件函数添加到数组中去

- 如果不存在则创建一个数组然后将事件函数添加到数组中去

## $emit 事件触发

1、语法：`$emit(eventName, params)`

2、分析：

- 判断当前事件名称是否存在

- 如果存在，则遍历数组中所有的函数，将参数传递到数组的函数中，并执行这些函数

## $off  事件解绑

1、语法：`$off(eventName, callback)`

2、分析：

- 判断当前事件名称是否存在

- 如果存在，则再判断第二个参数是否存在

- 如果第二个参数也存在，则解绑对应的函数

- 如果第二个参数不存在则解绑全部

## 封装

subscribe.js
```js
const eventList = {};

const $on = (eventName,callback) => {
    if(!eventList[eventName]) {
        eventList[eventName] = [];
    }
    eventList[eventName].push(callback);
}

const $emit = (eventName,params) => {
    if(eventList[eventName]) {
        eventList[eventName].forEach((cb) => {
            cb(params);
        })
    }
}

const $off = (eventName,callback) => {
    if(eventList[eventName]) {
        if(callback) {
            let index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index,1);
        } else {
            eventList[eventName].length = 0;
        }
    }
}

export default {
    $on,
    $emit,
    $off
}
```

## 观察者模式和发布订阅模式

1、观察者模式

观察者模式主要参与者为主题Subject，观察者Observer。

Subject和Observer具有松耦合的关系。

在Subject发生变化时，通知Observer。

2、订阅模式

订阅模式的主要参与者为发布者Publisher、订阅者Subscriber、调度中心Broker。

Publisher和Subscriber没有直接关系。两者间需要通过Broker进行沟通。

Publisher发布时，会推送到Broker，调度中心负责管理订阅，会将Publisher发布的消息通知给Subscriber。

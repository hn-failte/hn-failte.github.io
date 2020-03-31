---
title: Vue的响应式原理
date: 2018-12-25 13:16:28
layout: post
categories: Vue
tags: Vue
excerpt: Vue的响应式原理
---

# Vue的响应式原理

## 一、响应式的底层实现

### 1、Vue与MVVM

Vue是一个 `MVVM框架`，其各层的对应关系如下

- `View层`：在Vue中是绑定dom对象的HTML

- `ViewModel层`：在Vue中是实例的vm对象

- `Model层`：在Vue中是data、computed、methods等中的数据

在 `Model` 层的数据变化时，`View`层会在ViewModel的作用下，实现自动更新

### 2、Vue的响应式原理

Vue响应式底层实现方法是 `Object.defineProperty()` 方法，该方法中存在一个getter和setter的可选项，可以对属性值的获取和设置造成影响

Vue中编写了一个wather来处理数据

在使用getter方法时，总会通知wather实例对view层渲染页面

同样的，在使用setter方法时，总会在变更值的同时，通知wather实例对view层进行更新

### 3、响应式原理与兼容

由于 `Object.defineProperty()` 方法只部分支持IE9，所以Vue兼容IE版本最低为IE9，在IE9中，Vue的核心框架、vue-router、vuex是确保可以正常使用的

### 4、响应式原理示意图

![Vue的响应式原理示意图](https://hn-failte.github.io/assets/posts/vue-bottom-implementation.png#pic_center =30x30)

## 二、响应式数据

### 1、在实例前声明

```js
var vm = new Vue({
    data: {
        name: "failte"
    }
})
```

在实例前声明的属性会在实例时添加 `getter()`、`setter()` 方法，因此此时的name是响应式的，每当name变化时，会自动更新视图

### 2、在实例后添加

```js
vm.name = "failte"
```

由于data中没有该属性，因此实例后，此时的name是非响应式的，name变化时，不会更新视图

若需要转换为响应式数据，需要使用 `Vue.set()` 方法手动添加为响应式属性

```js
Vue.set(vm.data, "name", "ajaccio")
//Vue.$set是该方法的别名
```

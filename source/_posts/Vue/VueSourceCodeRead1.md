---
title: Vue源码解读（一）
date: 2019-12-29 18:48:55
layout: post
categories: Vue
tags: Vue
excerpt: Vue源码解读（一）
---

# Vue源码解读（一）

> 有没有想过Vue是怎么写出来的，各个模块的原理是什么？那么我带大家看看源码。

首先，我们拉取vue的源码，`git clone https://github.com/vuejs/vue.git`

然后为了方便查看，我们使用vscode或webstorm进行查看

## 一、目录结构分析

根据展示的目录分析，对应了以下不同的功能：

1、benchmarks

项目的性能测试

针对vue进行性能测试

2、dist

项目的输出

可以在这里找到vue的各种版本。包括commonJS规范、esm规范、umd规范（不带后缀的）等

3、examples

项目的使用样例

可以学习如何使用Vue的样例

4、flow

静态类型检查

5、packages

vue项目包

6、scripts

项目的命令，可以对该项目进行操作

7、src

项目源文件

8、test

单元测试

9、types

vue的ts声明



## 二、src源文件

展开Vue的src目录，根据命名可以简单的将Vue分成五大块，分别对应不同的功能：

1、compile

编译模块，包括事件、指令、模板转换

2、core

核心模块，包括组件、全局API、实例、响应式、工具库、虚拟DOM

3、platform

平台模块，包括web、weex

4、server

服务模块

5、sfc

单文件组件模块，用于解析

6、shared

公共模块，包括全局常量和工具库

### 1、shared

区分好了模块，就该开始办正事了。所有的模块都会用到公共模块，可以先从shared下手。

#### 1.2 全局常量（/src/shared/constants.js）

```js
export const SSR_ATTR = 'data-server-rendered'; // ssr渲染时的属性名

export const ASSET_TYPES = [ // 断言类型
  'component',
  'directive',
  'filter'
]

export const LIFECYCLE_HOOKS = [ // 生命周期钩子
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed', // 以上的是我们最常见的8个基本钩子
  'activated',
  'deactivated', // 这两个钩子会在组件使用了keep-alive时存在
  'errorCaptured', // 错误捕获钩子
  'serverPrefetch' // 未知，待补充
]

```

#### 1.2 工具库（/src/shared/utils.js）

说明：该文件采用了flow库，类ts语法。有很多有用的函数可以在这里看到，建议大家细读。下面我只发名称与对应的功能。**建议搭配源文件一起查看！**

emptyObject：空对象，该对象不可修改

isUndef：是否是undefined或null

isDef：isUndef的非

isTrue：是否全等true

isFalse：是否全等false

isPrimitive：是否是原始类型，不包括undefined和null，但包括ES6的Symbol

isObject：是否是对象，不包括null

toRawType：获取原始数据类型字符串

isPlainObject：判断是否是纯JS对象。纯JS对象是指直接原型为Object的对象。Array、Function等均不是纯JS对象。

isRegExp：是否是正则对象。

isValidArrayIndex：判断数组的下标是否合法

isPromise：是否是Promise对象

toString：将一个值转换成字符串，对象、数组会转换成JSON字符串。

toNumber：转换成数字，针对字符串。

makeMap：生成映射，用于检测一个键是否在映射中。

isBuiltInTag：是否是在标签中生成的，这里指slot和component是否在在模板字符串中。

isReservedAttribute：检测一个属性是否是保留属性。包括key、ref、slot、slot-scope、is。

remove：从数组中移除任意该项内容。

hasOwn：是hasOwnProperty的简写，检测对象是否有该键。

cached：创建一个可以缓存的纯函数。在第一次执行后，后面会读取缓存。（有没有想到计算属性）

camelize：驼峰化一个连字符，基于缓存函数cached

capitalize：将第一个字符大写化，基于缓存函数cached

hyphenate：连字符化一个驼峰，基于缓存函数cached

bind：bind兼容，不兼容时用apply模拟

toArray：将类数组转换成数组

extend：将一个对象扩展另一个对象的属性

toObject：将一个数组转换成一个对象

noop：无具体作用，用于flow的检测

no：总是返回false

identity：返回自身

genStaticKeys：从编译器模块中返回包含静态键的字符串

looseEqual：判断两个变量是否全等，包括对象与数组

looseIndexOf：返回数组中包含变量的序号

once：单词执行函数

### 2、core（/src/core/）

然后，我们转移注意力到从最核心的地方core，查看index.js（/src/core/index.js）

可以看出instance就是Vue类，initGlobalAPI处理Vue初始化全局api，相关渲染方式处理，最后导出的是一个Vue构造函数。

除次之外，还有一个config.js（/src/core/config.js）的文件，可以看到里面的都是vue的全局配置项。目录下也有一个util工具库，最为核心的vdom等等。后面再谈这些。

#### 2.1 instance（/src/core/instance）

instance与vue实例相关，通过index.js（/src/core/instance/index.js），可以发现，这里导出的是一个Vue构造函数，而这个构造函数分成了五个过程注入元素：

```js
initMixin(Vue) // 初始化
stateMixin(Vue) // 状态
eventsMixin(Vue) // 事件
lifecycleMixin(Vue) // 生命周期
renderMixin(Vue) // 渲染
```

根据命名，我们可以初步理解各个过程的含义。随后我们对对应的部分进行查看

##### 2.1.1 init（/src/core/instance/init.js）

init用于初始化Vue实例。

首先为vue提供了`_init`方法，这个方法提供了`_uid`、`_isVue`、`$options`、`_renderProxy`、`_self`一系列属性

*注：这里的函数此时查看不一定能全懂，建议看的差不多了再回头看*

其中若传入的是组件，即传入值存在`_isComponent`会调用`initInternalComponent`进行处理

同样，在Vue中很重要的`$options`，经过了`mergeOptions`、`resolveConstructorOptions`的嵌套处理

而后是`initProxy`进行属性代理初始化

再对实例进行数据注入：

```js
initLifecycle(vm) // 初始化生命周期
initEvents(vm) // 初始化事件
initRender(vm) // 初始化渲染
callHook(vm, 'beforeCreate') // 执行beforeCreate钩子
initInjections(vm) // 初始化注入，此时数据和传值还未注入
initState(vm) // 初始化状态
initProvide(vm) // 解析数据和传值
callHook(vm, 'created') // 执行created钩子
```

可以很容易看出，我们在这里有执行两个生命周期，而能获取到this的生命周期便是created，那么我们晚会可以看看是在哪个过程中注入了this

紧随其后，如果绑定元素是存在的，会开始进行绑定。

```js
if (vm.$options.el) {
    vm.$mount(vm.$options.el)
}
```

##### 2.1.2 lifecycle（/src/core/instance/lifecycle.js）



#### 2.2 component

展开component目录，发现下面只有一个keep-alive。而keep-alive作用时候使组件不被销毁

keep-alive:

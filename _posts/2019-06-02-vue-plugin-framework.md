---
title: Vue封装插件与自写框架
layout: post
categories: vue
tags: vue plugin framwork
excerpt: Vue封装插件与自写框架
---

# 封装插件与自写框架

## 封装插件的基础：

1、插件本质是一个符合特定条件的函数，函数的第一个参数是Vue类

2、Vue.use
第一个参数：
为对象时，会查找并执行对象下的install方法，若为函数，会直接执行
第二个参数：
options，该部分的参数传到insntall中时，由于install的第一个参数为Vue，所以会从传递到第二个参数开始

3、组件的注册方法

## 封装插件的步骤

### 1、定义插件的组件

准备一个已经妥当的Vue文件

### 2、定义安装方法，导入组件并在install方法中注册

index.js
```js
import MyPlugin from ""
MyPlugin.install=(Vue, options)=>{

    //添加全局组件
    Vue.coponent(MyPlugin.name, MyPlugin)
    
    //使用extend添加组件
    var Plugin = Vue.extend({
        template: "<p>{{}}</p>"
    })
    var plugin = new Plugin()
    document.body.apped(plugin.$mount().$el)
    //plugin.$mount("#app) //???

    // 添加全局方法或属性
    Vue.myGlobalMethod = function () { 
        // 逻辑... 
    }

    // 添加全局资源 
    Vue.directive('my-directive', { 
        bind (el, binding, vnode, oldVnode) { 
            // 逻辑... 
        } ... 
    }) 

    // 注入组件选项 
    Vue.mixin({
        created: function () { 
            // 逻辑... 
        } ... 
    }) 

    // 添加实例方法 
    Vue.prototype.$myMethod = function (methodOptions) { 
        // 逻辑... 
    } }
}
```

### 3、使用

```js
import MyPlugin from ""
Vue.use(MyPlugin)
```

## 自写框架

实际上，能实现封装插件后，自写框架就是各个封装插件的集合

要注意的是，框架可以实现部分引入和全部引入，这个要额外处理


---
title: Vue组件化开发
date: 2019-08-26 18:48:55
layout: post
categories: Vue
tags: Vue
excerpt: Vue很多人都会，而组件化也是近年来比较热的一个话题，那么你对Vue中的组件化了解多少呢？
---

[TOC]

# Vue组件化开发

Vue很多人都会，而组件化也是近年来比较热的一个话题，那么你对Vue中的组件化了解多少呢？

## 组件化开发：
1、组件化开发指的是将复杂的业务拆分为一个有一个的组件
2、组件化开发的组件一般来说要灵活
3、组件化开发涉及到了Vue的js组件封装，需要掌握Vue基础、Vue实例方法与属性、Vue.extend、Vue插件等知识

## Vue实例方法与属性

**vm.$mount(el)**
会将当前的组件挂载el元素上，该操作会替换当前的元素
若$mount中接收的el为空，则会挂载到当前的vue实例以外的地方
当vm对象中存在el时，会挂载到el上

**vm.$el**
返回当前挂载的元素

## Vue.extend与Vue.Component

1、Vue.Component

定义了一个在Vue的挂载点下的一个全局组件

2、Vue.extend

定义了一个未挂载的组件类

可以接收一个组件作为当前组件类的模板

使用关键字new实例组件，可以接收参数，这个组件需要手动挂载

3、插件

**Vue.use(Plugin, options)**

Plugin：若为对象时，会查找并执行对象下的install方法，若为函数，会直接执行

options：传递到insntall函数中的参数

> install函数的第一个参数是Vue，第二个参数为options

## 全局指定、组件、方法

```js
import MyPlugin from ""
MyPlugin.install=(Vue, options)=>{

    // 添加全局组件
    Vue.component(MyPlugin.name, MyPlugin)

    // 挂载原型方法
    var Plugin = Vue.extend(MyPlugin)
    Vue.prototype.doPlugin = function(){
        var plugin = new Plugin({})
        document.body.appendChild(plugin.$mount().$el)
    }

    // 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // code
    }

    Vue.myGlobalProperty = 'property'

    // 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // code
        }
        // code
    })

    // 注入组件选项
    Vue.mixin({
        created: function () {
            // code
        } ...
    })
}
export default MyPlugin
```

## 实例：Popup插件的封装

编写：
**src/components/Popup/Popup.vue**
```vue
<template>
<div class='popup-container' v-if="status">
<div class="popup-content">
<div class="popup-title">{{title}}</div>
<div class="popup-msg">{{msg}}</div>
<a class="popup-btn" href="javascript: void(0)" @click="hidePopup">x</a>
</div>
</div>
</template>
<script>
export default {
    name: 'popup'
}
</script>
<style lang="scss">
    div.popup-container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(33, 33, 33, .5);
        box-sizing: content-box;
        div.popup-content{
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -150px -300px;
        background: #fff;
        width: 600px;
        height: 300px;
    }
    div.popup-title{
        width: 590px;
        height: 20px;
        padding: 5px;
        line-height: 20px;
        text-align: center;
        background: #3498db;
    }
    div.popup-msg{
        width: 588px;
        height: 239px;
        text-align: center;
        border: 1px solid #999;
        border-top: none;
        padding: 15px 5px;
    }
    a.popup-btn{
        position: absolute;
        top: 5px;
        right: 5px;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        color: #666;
        background: #f00;
    }
}
</style>
```

**src/components/Popup/index.js**
```js
import Popup from './Popup.vue'
const defaultData = {
    status: false,
    title: 'Popup',
    msg: 'Message'
}
Popup.install = (Vue) => {
    let PopupCom = Vue.extend(Popup)
    console.log('PopupCom', PopupCom)
    Vue.prototype.$popup = function(params) {
        let popup = new PopupCom({
            el: document.createElement('div'),
            data() {
                for(let item in params){
                    defaultData[item] = params[item]
                }
                return defaultData
            },
            methods: {
                hidePopup() {
                    this.status = false;
                },
            },
        })
        console.log('popup', popup);
        console.log('popup.$mount()', popup.$mount());
        document.body.appendChild(popup.$mount().$el)
    }
}
export default Popup
```

使用：
**src/main.js**
```js
import Vue from 'vue'
import App from './App.vue'

//引用并使用插件
import Popup from './components/Popup'
Vue.use(Popup)

new Vue({
    render: h => h(App),
}).$mount('#app')
```

**src/main.js**
```vue
<template>
<div id="app">
<img alt="Vue logo" src="./assets/logo.png">
<button @click="doit">do</button>
</div>
</template>
<script>
export default {
    name: 'app',
    methods: {
        //调用方法进行弹窗
        doit() {
            this.$popup({
                status: true
            })
        }
    },
}
</script>
<style lang="scss">
#app {
    text-align: center;
}
</style>
```

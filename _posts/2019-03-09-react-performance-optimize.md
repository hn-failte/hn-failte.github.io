---
title:  React性能优化
layout: post
categories: react
tags: react 性能优化
excerpt:  React性能优化
---

# React性能优化

## 一、事件的优化

**1、构造函数中声明**

```jsx
export default MyCom extends Component{
    constructor(){
        super()
        this.fun = this.fun.bind(this)
    }
    render(){
        return(
            <div onClick={this.fun}></div>
        )
    }
	fun(){
        console.log("fun")
    }
}
```

此中方式只会在构造函数中创建一次，性能最好，但无法传值

**2、在组件中声明**

```jsx
export default MyCom extends Component{
    render(){
        return(
            <div onClick={this.fun.bind(this, arg)}></div>
    	)
	}
    fun(){
        console.log("fun")
    }
}
```

该方法可以解决以上不能传参的问题，但每次在render时都会重新执行一遍函数

**3、在渲染内容中使用箭头函数**

```jsx
export default MyCom extends Component{
    render(){
        return(
            <div onClick={(arg)=>this.fun(arg)}></div>
    	)
	}
    fun(){
        console.log("fun")
    }
}
```

该方法每次执行render时都会重新生成箭头函数，极不推荐

## 二、数据结构优化

使用Immutable对Reducer的数据进行管理

```js
import immutable from "immutable"
const defaulteState = immutable.fromJS({
    list: []
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case "Add":
            return state.updateIn(["list"], list=>list.push(action.payload))
        default:
            return state
    }
}
```

使用该方法可以减少在修改值时无需创建新的对象，减少内存的消耗，从而达到性能优化的目的

## 三、渲染优化

`shuoldComponentUpdate`的优化

*BaseComponent.js*

```js
import React from "react";
import {is} from "immutable";
export default class BaseComponent extends React.Component{
	shouldComponentUpdate(nextProps, nextState, nextContext) {
        let thisState = this.state || {};
        let thisProps = this.props || {};
        nextProps = nextProps || {};
        nextState = nextState || {};

        if(Object.keys(thisState).length != Object.keys(nextState).length 
           || Object.keys(thisProps).length != Object.keys(nextProps).length){
            return true;
        }

        for(var key in nextProps){
            if(!is(nextProps[key],thisProps[key])){
                return true;
            }
        }

        for(var key in nextState){
            if(!is(nextState[key],thisState[key])){
                return true;
            }
        }

        return false;

    }
}
```
*MyComponent.js*

```js
class MyComponent extends BaseComponent{
    render(){
        return(<div></div>)
    }
}
```

根据比较的结果是否一致，来判定是否需要重新渲染

## 四、组件优化

`PureComponent`是纯组件

特点：
- 一般作为UI组件使用
- 会对数据进行一次浅比较，只会关注数据的地址是否改变，若未改变则不会渲染
- 使用了该组件后，禁止使用`shouldCoponentUpdate`，否则会破坏`PureCoponent`的规则


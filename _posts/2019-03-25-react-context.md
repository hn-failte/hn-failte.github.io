---
title:  React中context的用法
layout: post
categories: react
tags: react context
excerpt:  React中context的用法
---

# context的用法

## 作用

一般用于组件传值

## 使用

1、创建GlobalContext.js

```js
import { createContext } from "react"

export const { Provider, Consumer } = createContext()
```
2、用Provider把包裹需要实现传值的组件，需要传的值放在value属性上

例如：包裹整个React APP

main.js

```jsx
import React from "react"
import ReactDom from "react-dom"
import App from "./App"

import { Provider } from "./GlobalContext"

ReactDom.render(
    <Provider value={{name: "zs", age: 18}}><App /></Provider>,
    document.getElementById("app")
)
```

3、在需要接收值的组件中使用Consumer进行包裹

Consumer内部是一个函数

Consumer.js

```jsx
import React, { Component } from "react"
import { Consumer } from "GlobalContext"

export default class MyClass extends Component{
    render(){
        return(
            <Consumer>
            {
                (obj)=>(
                    <div>
                        <p>name:{obj.name}</p>
                        <p>age:{obj.age}</p>
                    </div>
                )
            }
            </Consumer>
        )
    }
} 
```


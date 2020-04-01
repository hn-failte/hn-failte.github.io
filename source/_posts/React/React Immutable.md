---
title: React之immutable的使用
date: 2019-02-28 15:45:12
layout: post
categories: react
tags: Immutable
excerpt: React开发中，Redux是必不可少的，而Redux数据单一不变的思想，往往会在Reducer中写深拷贝，对性能产生或多或少的影响，而immutable就是为了解决这个问题产生的......
---

# React中immutable的使用

React开发中，Redux是必不可少的，而Redux数据单一不变的思想，往往会在Reducer中写深拷贝，对性能产生或多或少的影响，而immutable就是为了解决这个问题产生的......

## 常规immutable

- **Immutable** ：持久化数据结构（数据不可修改）、链式调用（每次都会返回的immutable对象）

  ```js
  import immutable from "immutable"
  //创建map
  const map = immutable.Map({ //与ES6的map不同
      a:1,
      b:2,
      obj:{}
  })
  //增
  let map1 = map.set("c",3) //新创建的，不会影响初始值
  let map2 = map.setIn(["obj","name"],"zs")
  //删
  let map3 = mao.delete("a")
  let map4 = map.deleteIn(["obj","name"])
  //改
  let map5 = map.update("a",params=>params=10)
  //let map5 = map.update("a",()=>10)  ?
  let map6 = map.updateIn(["obj","name"],name=>name="ws")
  //查
  let map7 = map.get("a")
  let map8 = map.getIn(["obj","name"])
  //合并
  let map9 =map.merge(map1)
  //转换为原生对象
  let mp10 = map.toObject() //单层次（一层）

  immutable.isImmutable(map2)
  map.size()
  immutable.is(map1,map2)

  //创建list
  const list = immutable.List([1,2,3,4])
  //增
  let list1 = list.push()
  //删与改
  let list2 = list.splice(0,1)
  //查
  let list3 = list.get(0);
  let list4 = list.getIn([list, 0]);
  //合并
  let list5 = list1.concat(list2)
  //转换为原生对象
  let list6 = toArray() //单层次（一层）


  //fromJS  深层次转换  可以将所有的原生JS对象转换为immutable对象
  let state = immutable.fromJS({})
  //toJS  深层次转换  将immutable对象转换为原生JS对象
  ```



## react中使用immutable

**reducer.js**

```js
import immutable from "immutable"

const defaultState = immutable.fromJS({

})

return state.updateIn(["key"], key=>{let newkey = key; return key})
```

## redux-immutable

用处：

引入该插件，将会使整个store对象成为immutable对象，每一个模块都是一个对象

store.js

```js
import {combineReducer} from "redux-immutable"

const reducer = combineReducer({reducer1, reducer2})
```

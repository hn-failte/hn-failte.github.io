---
title: Axios基本使用
date: 2020-03-31 18:48:55
layout: post
categories: Tools
tags: Axios
excerpt: 以前使用Axios时，只知道Axios可以重写，平时也只管用get、post，直到我有一天发现，Axios居然还有个可以取消请求的方法，这才意识到，我对Axios的了解还不够深......
---

# Axios基本使用

以前使用Axios时，只知道Axios可以重写，平时也只管用get、post，直到我有一天发现，Axios居然还有个可以取消请求的方法，这才意识到，我对Axios的了解还不够深......

## 特点

1、基于Promise的一个http请求方法
2、客户端会基于xhr对象请求
3、服务端会基于http进行请求
4、基于Promise
5、支持转换为json数据类型
6、支持数据劫持
7、具有TypeScript定义

## 支持的请求方式

1、delete

2、get

3、head

4、options

5、post

6、put

7、patch

## 请求方法

1、axios

axios本身就是一个请求方法，能定义各种请求类型

axios({
    method: "",
    url: "",
    params: "", // delete、get、head、options参数置于此
    data: "", //post、put、patch请求参数置于此
    headers: "",
    timeout: "", //延时(ms)
    baseURL: "",
    withCredentials: false //是否携带cookie
})
.then()
.catch()

2、axios.method

axios支持的请求方式，都可以直接通过axois.method使用

根据data的携带方式，分为一下两种：

一类，delete、get、head、options，代表方式 **get**:
```js
axios.get("/api/1", {
    params: {},
    header: {}
})
.then(res=>{console.log(res)})
.catch(rej=>{console.log(rej)})
```

一类，post、put、patch，代表方式 **post**:
```js
axios.get("/api/1", {})
.then(res=>{console.log(res)})
.catch(rej=>{console.log(rej)})
```

## 支持的方法

1、create

用于重写axios

2、cancel

用于取消请求

3、CancelToken

取消请求类

4、isCancel

取消状态获取

5、all

并行请求，返回数组

6、spread

用于处理并行请求后的数据

```js
axios
    .all([axios.get('/api/1'), axios.get('/api/2')])
    .then(axios.spread((res1, res2)=>{
        console.log(res1)
        console.log(res2)
    }))
```

## 配置设置

获取：
```js
console.log(axios.default)
console.log(axios.defaults.baseURL)
```
设置：
```js
axios.defaults.baseURL='http://www.baidu.com/'
```

## 使用拦截器重写axios

```js
import axios from "axios"

const instance = axios.create({
    // 请求超时设置
    timeout: 5000,
    // 响应的最大长度
    maxContentLength: 1024000,
    // 响应的数据类型
    responseType: 'json',
    // 请求成功的判断
    validateStatus: status => status >= 200 && status < 300,
    // 最大重定向次数
    maxRedirects: 5,
    // 允许跨域设置Cookie
    withCredentials: false
})

// 请求头拦截
instance.interceptors.request.use((request)=>{
    if(request.method == "post"){
        request.data = request.data;
    } else if(request.method == "get"){
        request.params = {...request.data}
    }
    return request;
}, (rej)=>{
    return Promise.reject(rej)
})

// 响应头拦截
instance.interceptors.response.use((response)=>{
    if(response.statusText === "ok"){
        return response.data;
    }
}, (rej)=>{
    return Promise.reject(rej)
})

export default instance;
```

## 取消请求

### 使用场景

1、用于在指定时间内返回请求结果。

2、用于发起请求后，希望可以取消请求。

3、用于频繁请求中，页面对数据进行了更新后，请求数据时，但是再次更新了数据，此时需要取消请求。

### 使用

场景：指定时间内返回请求结果

使用方法1：
```js
const axios = require("axios");
const fs = require("fs")
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios.get("http://www.baidu.com/", { cancelToken: source.token }).then(
  res => {
    fs.writeFileSync("./baidu.html", res, "utf8");
  },
  rej => {
    console.log(rej);
  }
);
setTimeout(() => {
  source.cancel("未在规定时间内响应，取消请求");
}, 100);
```

使用方法2：
```js
const axios = require("axios");
const fs = require("fs");
const CancelToken = axios.CancelToken;
let cancel;

axios
  .get("http://www.baidu.com/", {
    cancelToken: new CancelToken(_cancel => (cancel = _cancel))
  })
  .then(
    res => {
      fs.writeFileSync("./baidu.html", res, "utf8");
    },
    rej => {
      console.log(rej);
    }
  );

setTimeout(() => {
  cancel("未在规定时间内响应，取消请求");
}, 100);
```

### 原生xhr的取消

xhr.abort()

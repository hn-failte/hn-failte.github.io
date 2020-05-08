---
title: 窗口间的通信与iframe跨域
date: 2020-04-21 18:47:50
layout: post
categories: JavaScript
tags:
  - iframe
  - postMessage
excerpt: 窗口间的该怎么通讯，iframe跨域该怎么解决？
---


# 窗口间的通信与iframe跨域

## iframe跨域场景

1、若需要通讯的两个窗口在同源域名下，则无需跨域。

2、若需要通讯的两个窗口在同一个顶级域名下，可以手动配置两个窗口的域名为该顶级域名，从而实现通讯。代码如下：

```js
document.domain = 'localhost';
```

3、若需要通讯的两个窗口不在同一顶级域名下，则需要使用到postMessage方法。

## postMessage

该方法是window下的一个方法，用于发送一条消息。

对应的事件是onmessage事件。
```js
const recvMsg = event => {
    if(event.origin === 'http://localhost:8080') {
        console.log(event.data)
    }
}
window.onmessage = recvMsg
// 也可以用事件监听
// window.addEventListener("message", recvMsg)
```

该方法可以在其他的窗口中调用，而不会产生跨域问题。（安全通讯）

## 获取到不同窗口的window对象

1、若是使用window.open打开，则可以通过window.opener获取到window对象。

2、若是使用iframe引用，则可以通过使用window.top获取到window对象。

## 样例

1、同顶级域名
localhost域名`index.html`
```plain
<!DOCTYPE html>
<html>
<body>
    <iframe src="http://localhost:8080/iframe.html" frameborder="0"></iframe>
    <script>
		 document.domain = 'localhost';
        window.list = [];
        window.setValue = (key, value) => {
            window[key] = value
        }
        window.getValue = key => {
            return window[key]
        }
    </script>
</body>
</html>
```

localhost:8080域名`iframe.html`
```plain
<!DOCTYPE html>
<html>
<body>
    iframe
    <script>
		 document.domain = 'localhost';
        console.log(top.setValue('list', [1, 2, 3]))
        console.log(top.getValue('list'))
    </script>
</body>
</html>
```


2、open形式
localhost域名`index.html`
```plain
<!DOCTYPE html>
<html>
<body>
    <script>
       window.open('http://localhost:8080/iframe.html')
		window.onmessage = (event) => {
    		if(event.origin == 'http://localhost:8080') {
				console.log(event.origin, event.data)
			}
		}
    </script>
</body>
</html>
```

localhost:8080域名`iframe.html`
```plain
<!DOCTYPE html>
<html>
<body>
    iframe
    <script>
        window.onload = () => {
            window.opener.postMessage('value', 'http://localhost');
        }
    </script>
</body>
</html>
```

3、iframe形式
localhost域名`index.html`
```plain
<!DOCTYPE html>
<html>
<body>
    <iframe src="http://localhost:8080/iframe.html" frameborder="0"></iframe>
    <script>
		window.onmessage = (event) => {
    		if(event.origin == 'http://localhost:8080') {
				console.log(event.origin, event.data)
			}
		}
    </script>
</body>
</html>
```

localhost:8080域名`iframe.html`
```plain
<!DOCTYPE html>
<html>
<body>
    iframe
    <script>
        window.onload = () => {
            window.top.postMessage('value', 'http://localhost');
        }
    </script>
</body>
</html>
```

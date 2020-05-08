---
title: LESS从入门到精通
date: 2018-04-17 13:16:28
layout: post
categories: CSS
tags: LESS
excerpt: LESS从入门到精通
---

# LESS 从入门到精通

## 一、LESS 是什么

**LESS** 是 **CSS 预处理语言**，是 **CSS** 的扩展。

然后说说比较流行的几款预编译器：**SASS/SCSS**、**LESS**、**Stylus**。

**SASS** 学习网站：

- https://www.sass.hk/
- https://www.w3cschool.cn/sass/
- https://github.com/sass/sass

**LESS** 学习网站：

- http://lesscss.cn/
- https://less.bootcss.com/
- https://www.w3cschool.cn/less/
- https://github.com/less/less.js

**Stylus** 学习网站：

- https://stylus.bootcss.com/
- https://github.com/stylus/stylus

## 二、为什么用 LESS

SASS/SCSS 和 Stylus 都很强，但是我还是选择了 LESS，个人喜欢 NodeJS，然后 stylus 空格我又不喜欢，就用了 LESS，现在用的也习惯了，下面就给大家介绍一下 LESS 的一些用法吧。

LESS——像写 javascript 一样书写 css

特点：

- 1、写样式更简单：嵌套
- 2、使用方便：变量、运算、函数
- 3、学习成本低：语法

## 三、怎么用 LESS

### 1、安装使用

#### (1)浏览器中使用

##### 引用

```html
<link rel="stylesheet/less" type="text/css" href="index.less" />
<!-- 必须加上/less -->
<script src="less-1.3.3.min.js"></script>
<!-- js必须在less后引用 -->
```

通过以上配置，在访问页面时，js 会自动编译 less 为 css

##### CDN：

`https://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js`

`https://cdn.bootcss.com/less.js/3.9.0/less.js`

##### 观察模式

在每次保存文件后，调试时，总要进行手动刷新，于是有了观察模式

**基本设置**

```html
<link rel="stylesheet/less" href="index.less" />
<script>
  less = { env: "development" };
</script>
//声明开发模式
<script src="less-1.3.3.min.js"></script>
<script>
  less.watch();
</script>
//调用观察模式
```

调用了观察模式后，就可以实现在每次保存时自动编译
观察模式的原理是每隔一段时间进行编译

**扩展配置**

在基础设置的后面添加 script 标签，内容如下

```js
less = {
  // 开发环境development，生产模式production
  env: "development",
  // 异步加载
  async: false,

  // 在页面下异步读取导入
  fileAsync: false,

  // 观察模式间隔
  poll: 1000,

  // 使用函数
  functions: {},

  // 行信息输出comment、mediaQuery、all
  dumpLineNumbers: "all",

  // 是否调整url为相对
  relativeUrls: false,

  // 根路径
  rootpath: ":/"
};
```

#### (2)使用 node 编译

**使用此方法需要先安装 node**

**node 下载链接**：http://nodejs.cn/download/

**安装了 node 之后，就可以正式安装 `less` 了**

```node
npm install -g less
```

当 less 文件写好后，就可以使用一下命令进行编译

```node
lessc index.less index.css
```

#### (3)gulp 打包工具

使用此方法需要分别在 **全局** 与 **项目** 安装 gulp

```node
//全局
npm install -g gulp

//当前项目
npm install --save-dev gulp
```

然后在安装 gulp 的插件 **gulp-less**

```node
npm install -save-dev gulp-less
```

安装完之后，创建入口文件 **gulpfile.js**，并写入:

```node
var origin = "./index.less"; //填写你需要转化的less文件的路径
var result = "./"; //填写你转化后文件存在的目录路径
var gulp = require("gulp");
gulp.task("less2css", function() {
  gulp
    .src(origin)
    .pipe(less())
    .pipe(result);
});
```

至此，就可以通过输入 `gulp less2css` 命令进行编译了
但是，每次保存后都要去编译很麻烦，于是，补充以下代码

```node
gulp.task("lessc", function() {
  gulp.watch("origin", ["less2css"]);
});
```

现在只需要输入 `gulp lessc` 就可以实现 less 的观察者模式了

### 2、语法

保留 CSS 的基础语法，并进行了扩展

```less
@import "reset.css" //less在编译时不会变动css文件
  @import "base" //less导入其他less文件时可以省略文件格式
  @import url("base.less");
```

### 3、运算

在`less`中，可以在书写属性时直接进行加减乘除

例子：`header`插入了一个`padding`

```less
@fullWidth: 1200px;
.header {
  width: @fullWidth – 20px * 2;
  padding: 0px 20px * 2;
}
```

### 4、变量

#### (1)格式：以@开头

```less
@headergray: #c0c0c0;
@fullWidth: 1200px;
@logoWidth: 35%;
```

#### (2)字符串插值

```less
@name: banner;
background: url("images/@{name}.png") no-repeat;
```

编译：

```css
background: url("images/banner.png") no-repeat;
```

#### (3)避免编译

```less
background: ~"red";
```

编译：

```css
background: red;
```

#### (4)移动端 rem 布局中的使用

```less
@fullWidth: 750;
@toRem: unit(@fullWidth / 10, rem);
header {
  height: 150 / @toRem;
}
```

编译：

```css
header {
  height: 2rem;
}
```

### 5、混合

#### (1)在一个类中继承另一个类

```less
.class1 {
  color: red;
}
.class2 {
  background: green;
  .class1;
}
```

编译后：

```css
.class1 {
  color: red;
}
.class2 {
  background: green;
  color: red;
}
```

#### (2)用&替换当前选择器

```less
a {
  color: #000;
  &:hover {
    color: #f00;
  }
}
```

编译后：

```css
a {
  color: #000;
}

a:hover {
  color: #f00;
}
```

#### (3)在父类中嵌套子类

```less
.class1 {
  p {
    span {
      a {
      }
    }
    &:hover {
    }
  }
  div {
  }
}
```

编译后：

```css
.class1{ }
.class1 p{ }
.class1 p span{
.class1 p span a{ }
.class1 p:hover{  }
.class1 div{  }
```

#### (4)带参混合

```less
.color(@color=red) {
  color: @color;
}
.class1 {
  .color(#0f0);
}
.class2 {
  .color();
}
```

编译后：

```css
.class1 {
  color: #0f0;
}
.class2 {
  color: red;
}
```

#### (5)块定义

```less
@demo: {
  color: #f00;
};
body {
  @demo();
}
```

编译后：

```css
body {
  color: #f00;
}
```

该方式和类继承的区别在于该块不会出现在编译的 CSS 中。

### 6、函数

#### (1)逻辑控制

- 格式：statement when(conditons)、prop: if((conditions),value);

- 例子 1：在 less 中使用一个带参类名展示上下左右四个方向的纯 CSS 三角形

**index.less**

```less
.base() {
  width: 0;
  height: 0;
}
@normal: 20px solid transparent;
@anger: 20px solid #f00;
.triangle(@val) when(@val=left) {
  .base();
  border-left: none;
  border-right: @anger;
  border-top: @normal;
  border-bottom: @normal;
}
.triangle(@val) when(@val=right) {
  .base();
  border-right: none;
  border-left: @anger;
  border-top: @normal;
  border-bottom: @normal;
}
.triangle(@val) when(@val=top) {
  .base();
  border-left: @normal;
  border-right: @normal;
  border-top: none;
  border-bottom: @anger;
}
.triangle(@val) when(@val=bottom) {
  .base();
  border-left: @normal;
  border-right: @normal;
  border-top: @anger;
  border-bottom: none;
}
.div1 {
  .triangle(left);
}
.div2 {
  .triangle(right);
}
.div3 {
  .triangle(top);
}
.div4 {
  .triangle(bottom);
}
```

**index.html**

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet/less" href="index.less">
        <script src="../less-1.3.3.min.js"></script>
    </head>

    <body>
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
    </body
</html>
```

- 例子 2：

```less
background: if((true), #f00);
```

#### (2)循环

例子：将 8 个 td 的背景依次更换为 bg_1.png、bg_2.png、…、bg_8.png

```less
table td {
  width: 200px;
  height: 200px;
  .loop(@i) when(@i<9) {
    &:nth-child(@{i}) {
      background: url(~"../images/partner_@{i}.png") no-repeat;
    }
    .loop(@i+1);
  }
  .loop(1);
}
```

#### (3)列表

```less
@backgroundlist: apple, pear, coconut, orange;
```

#### (4)less 函数库

```less
image-size(“bg.png”) //获取图片的Width和Height
image-width() //获取图片的Width和Height
image-height() //获取图片的Width和Height
convert(9s, ms) //转换9秒为毫秒
convert(14cm, mm) //转换14厘米为毫米
```

更多函数参考官方函数库，包括混合函数、数学函数、字符串函数、列表函数等等

### 7、使用 JS 表达式

- less 中还可以引用 js 表达式，不过一般都不推荐使用，此种方式在使用 nodejs 将 less 编译 css 时可能会报错。

- 格式：**\`javascript\`**

- 例子：将高度设置为当前获取到的浏览器的高度

```less
@fullHeight: unit(` window.screen.height `, px);
div {
  height: @fullHeight;
}
```

- 尝试将 **@width: unit(\` window.screen.width \`, px)** 引进 **vw 布局** ？
  不推荐，不建议 less 在正式环境中使用，使用 LESS 时需要在头部引入 js，而在 js 执行时的时候，会消耗时间，而 less 编译需要在 js 执行后，会在一定程度上影响到性能。

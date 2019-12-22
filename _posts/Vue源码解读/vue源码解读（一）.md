# Vue源码解读（一）

> 有没有想过Vue是怎么写出来的，各个模块的原理是什么？那么我带大家看看源码。

首先，我们拉取vue的源码，`git clone https://github.com/vuejs/vue.git`

然后为了方便查看，我们使用vscode或webstorm进行查看

## 目录结构分析

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



## src源文件

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

公共模块
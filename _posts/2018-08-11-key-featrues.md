---
title: 谈谈Vue/React中的Key值的作用
layout: post
categories: key
tags: vue react key
excerpt: key
---

# 谈谈Vue/React中的Key值的作用

在一个Vue项目或者React项目中，写循环时，往往会加上key值。那么这个key值到底有多大的用处呢？



首先，在Vue中，存在一个DOM复用机制，会尽量的回收DOM元素进行复用，而这个机制本身是高效的，但很多时候也会造成不可预知的Bug，而在加了key值后，元素就有了一个标识，复用机制不会复用带key值的元素。而React也存在类似的机制。



反之，若使用相同的key值，可以使组件复用，也有可能导致渲染内容缺失。



因此，key值一般来说，最好是独一无二的。



除此之外，虚拟DOM在使用Diff算法进行对比时，若存在key值，可以更高效更迅速。
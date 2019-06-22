---
title: linux安装nodejs
layout: post
categories: linux
tags: linux nodejs shell centos
excerpt: linux安装nodejs
---
## linux安装nodejs
以CentOS 7为例，来安装nodejs。
#### 1、下载

````shell
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
````

直接在nodejs.org下载也可以，推荐下载lts版本。
    
#### 2、解压

````shell
    tar -xvf node-v10.15.3-linux-x64.tar.xz
````

#### 3、文件测试

    进入当前目录，进入shell
````shell
    ./node -v  //控制台输出v10.15.3
````
    
#### 4、存储位置

    为了方便，移动并重命名文件夹

````shell
    mv node-v10.15.3-linux-x64.tar.xz /usr/nodejs
````
    
#### 5、建立软链接

````shell
    ln -s /usr/nodejs/bin/node /usr/local/bin/node
    ln -s /usr/nodejs/bin/npm /usr/local/bin/npm
````

备注：前面的目录是当前存放nodejs文件夹的目录，后面的为软链接的目录，请勿更改
    
#### 6、测试

````shell
    node -v  //控制台输出v10.15.3
    echo "console.log('Hello World!')" > test.js
    node test.js  //控制台输出Hello Wolrd!
````
到此，nodejs就已经可以在CentOS上使用了，愉快的coding吧！

#### 7、一键执行脚本
````shell
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
tar -xvf node-v10.15.3-linux-x64.tar.xz
mv node-v10.15.3-linux-x64.tar.xz /usr/nodejs
ln -s /usr/nodejs/bin/node /usr/local/bin/node
ln -s /usr/nodejs/bin/npm /usr/local/bin/npm
````
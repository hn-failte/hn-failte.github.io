---
title: linux使用技巧
layout: post
categories: linux
tags: linux shell
excerpt: linux使用技巧
---
# linux使用技巧

## 文件存储位置

### /

根目录

### /usr

系统级的目录，可以理解为C:/Windows/，/usr/lib理解为C:/Windows/System32。

### /usr/local

用户级的程序目录，可以理解为C:/Progrem Files/。用户自己编译的软件默认会安装到这个目录下。

### /opt

用户级的程序目录，可以理解为D:/Software，opt有可选的意思，这里可以用于放置第三方大型软件（或游戏），当你不需要时，直接rm -rf掉即可。在硬盘容量不够时，也可将/opt单独挂载到其他磁盘上使用。

### /usr/src

系统级的源码目录。

### /usr/local/src

用户级的源码目录。

## 快速启动bash

设置中选择键盘，添加新快捷键
设置启动方式为windows中的Win+R
设置命令为/usr/bin/gnome-terminal

## 自动补全命令

tab键

## 隐藏文件

.file

## 显示颜色
--color=never
ls --color=never

## 执行.sh文件

````shell
//第一种
chmod +x *.sh   //添加执行权限
./*.sh  //执行
//第二种
sh *.sh
````

## Linux升级git脚本

````shell
su - root #使用root
yum install perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker #安装依赖
wget https://www.kernel.org/pub/software/scm/git/git-2.13.1.tar.gz #下载
tar xzf git-2.13.1.tar.gz 
cd git-2.13.1
./configure
make
make install
````

## linux印象笔记nixnote2

````shell
sudo add-apt-repository ppa:nixnote/nixnote2-daily
sudo apt update
sudo apt install nixnote2
````
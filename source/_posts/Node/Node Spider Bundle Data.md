---
title: Node爬取大批量文件
date: 2019-06-27 10:16:47
layout: post
categories: Node
tags: Spider
excerpt: 有个朋友在搞留学工作室，经常访问的一个网站叫留学者指南，然而每次都要去访问该网站，显得极其不专业。于是托俺帮忙写脚本去爬他家的东西，我观察了下，这次，我们要爬的东西就有点多了——大概就20多万个文件吧~~~
---

# Node爬取大批量文件

> 有个朋友在搞留学工作室，经常访问的一个网站叫留学者指南，然而每次都要去访问该网站，显得极其不专业。于是托俺帮忙写脚本去爬他家的东西，我观察了下，这次，我们要爬的东西就有点多了——大概就20多万个文件吧~~~
>
> 在20多万个文件中，下载极有可能会被中断，因此需要做下载进度备份，下载进度恢复。
>
> 那么针对这样子的需求，我们开始吧！
>
> 上代码！

```js
const cheerio = require("cheerio"); //用于处于HTML文档流，用法类似jQuery
const http = require("http"); //用于发起请求
const fs = require("fs"); //用于检测、写入文件等其他文件操作

// "http://www.compassedu.hk/sitemap1.txt",
// "http://www.compassedu.hk/sitemap2.txt", //重复的链接
var source = [ //Robots.txt显示的数据源
    "http://m.compassedu.hk/sitemap3.txt",
    "http://m.compassedu.hk/sitemap4.txt",
    "http://m.compassedu.hk/sitemap6.txt",
    "http://m.compassedu.hk/sitemap7.txt",
    "http://m.compassedu.hk/sitemap8.txt"
]
var s = 0; //控制源的序号
var arr = []; //合并的下载地址数组
var sou = []; //源下载地址数组
var i = 0; //当前下载地址数组序号

fs.exists(__dirname+"/compassedu", function(flag){ //下载路径检测
    if(!flag) fs.mkdirSync(__dirname+"/compassedu"); //创建下载存放目录
})
fs.exists(__dirname+"/logs", function(flag){ //日志路径检测
    if(!flag) fs.mkdirSync(__dirname+"/logs"); //创建日志存放目录
})

if(fs.existsSync(__dirname+"/logs/compassedu_backup")){ //是否存在断连恢复下载的控制文档
    let obj = JSON.parse(fs.readFileSync(__dirname+"/logs/compassedu_backup")); //存在则读取上次下载的位置
    i = obj.index;
    init(); //开始初始化程序
}
else{
    init(); //开始初始化程序
}

function init(){ //初始化
    http.get(source[s], function(res){ //获取源下载地址文件

        //将源文件的内容存储到数组
        let rawData = "";
        res.setEncoding("utf8");
        res.on("data", function(chunk){ //监听数据流
            rawData += chunk;
        });
        res.on("end", function(){ //监听结束
            sou[s] = rawData.split("\n");
            console.log("源", s+1, ": ", sou[s].length, "条数据");
            s++;
            if(s<source.length){ //源文件还未读取完
                init();
            }
            else{ //源文件读取完毕
                for(let m=0;m<sou.length;m++){ //将所有的地址数组合并
                    arr = arr.concat(sou[m]);
                }
                arr = [...new Set(arr)]; //去重
                console.log("总计: ", arr.length, "条数据", "\n爬虫配置完毕!!\n开始爬取 >>");
                start(); //开始爬取程序
            }
        });
    })
}

function start(){ //开始
    let url = arr[i];
    console.log(url); //打印当前爬取的URL

    http.get(url,function(res){ //发起请求
        let obj = { //将当前的信息存储到对象中
        	"time": new Date().toLocaleTimeString(),
            "index": i,
            "url": url,
            "status": res.statusCode
        };
        fs.appendFileSync("./logs/download.log", JSON.stringify(obj), "utf8"); //写入日志文件
        fs.writeFileSync("./logs/compassedu_backup", JSON.stringify({"index": i}), "utf8"); //将当前的下载URL序号写入断连恢复文件
        //读取请求到的数据流
        let rawData = "";
        res.setEncoding("utf8");
        res.on("data", function(chunk){ //监听数据流事件
            rawData += chunk;
        });
        res.on("end", function(){ //监听结束事件
            $ = cheerio.load(rawData); //启用类jQuery插件
            title = $(".container-public h1").text().replace(/\s/,"").trim(); //读取数据流部分的标题
            body = $(".container-public").html(); //读取数据流部分的内容
            body = body.split("visible-xs")[0]; //剥离多于的数据或其他处理，准备写入文件
            i++; //序号+1
            fs.writeFile(__dirname+"/compassedu/"+title+".html", body, "utf8", function(err){ //将处理好的数据写入文件
                if(!err) console.log(title, "写入成功");
                else{
                    console.log(err);
                }
            });
            if(i>=arr.length) { //若序号达到数组的最后，结束程序
                console.log("爬取结束");
                fs.unlinkSync("./logs/compassedu_backup");//爬取结束，销毁断连恢复文件
                return;
            }
            else { //否则递归运行
                start();
            }
        });
        res.on("error", function(err){ //监听其他错误
            console.log(err);
        });
    })
}
```

> 至此，就结束了，是否有bug还不清楚，数据还没爬完呢~
>
> 有bug的话，我后续补充修复~

---
title: Redis的基本使用
date: 2020-01-03 21:16:39
layout: post
categories: DateBase
tags: Redis
excerpt: 最近春节将至，听后端说他们在准备扩容Redis，恰好项目也做得差不多了，也学学Redis的相关知识吧~
---

[TOC]

# Redis的基本使用

最近春节将至，听后端说他们在准备扩容Redis，恰好项目也做得差不多了，也学学Redis的相关知识吧~

Redis是运行在内存中的，即正常电脑的运行内存，因此Redis的运行速度是非常快的，而也由于这个原因，Redis内存不够用需要扩容是常见的问题。

## 一、安装与运行

1、linux：

redis.sh

```bash
wget http://download.redis.io/releases/redis-2.8.17.tar.gz
tar xzf redis-2.8.17.tar.gz
cd redis-2.8.17
make
```
新建以上文件执行，即可安装redis。

2、windows:

下载地址：[https://github.com/MSOpenTech/redis/releases](https://github.com/MSOpenTech/redis/releases)

运行：`redis-server redis.windows.conf`

控制台脚手架：`redis-cli -h 127.0.0.1 -p 6379` （本机不需要加参数）

## 二、redis数据类型

Redis支持五种数据类型：

1、字符串string

> redis的最基本元素，在redis中没有数字，只有字符串

2、哈希hash

> 存储键值对。

3、列表list

> 列表类似数组

4、集合set

> 集合不会带有重复的元素

5、有序集合zset(sorted set)。

> 有序集合是不允许重复的string类型元素的集合。每个元素都会关联一个double类型的分数，通过分数来进行从小到大的排序。

## 三、指令

### help指令

> 该指令支持tab键补全

1、查看全部的提示：help

2、指定某类的提示：help @<kind>
```bash
# 查看string类型的操作
help @string
# 查看有序数组类型的操作
help @sorted_set
#查看常用操作
help @generic
# 查看连接相关的操作
help @connection
```

3、指定某个命令的提示：help <command>

### 通用键指令

1、删除：del <key>

2、序列化给定键对应的值：dump <key>

3、检测键是否存在：exsits <key>

4、将给定键添加过期时间（秒）：expire <key> <seconds>

5、指定时间（秒）时键将过期：expireat <key> <timestamp>

6、将给定键添加过期时间（毫秒）：pexpire <key> <milliseconds>

7、指定时间（毫秒）时键将过期：expireat <key> <timestamp>

8、返回给定模式的key：keys <pattern>

9、移动当前key到另一个数据库：move <key> <db>

10、移除过期时间设置：persist <key>

11、返回key剩余的过期时间（毫秒）：pttl <key>

12、返回key剩余的过期时间（秒）ttl <key>

13、随机返回 一个key：randomkey

14、修改key名：rename <key> <new>

15、当新的键名不存在时才修改key名：renamenx <key> <new>

16、返回key的类型：type <key>

### string类指令

1、获取：get <key>

2、获取子字符串：getrange <key> <startIndex> <endIndex>
```bash
getrange str 2 5
```

3、获取多个: mget <key1> <key2> <key3>
```bash
mget str1 str2 str3
```

4、设置（存在会覆盖）：set <key> <value>
```bash
set str "this is a string"
```

5、设置多个: mset <key1> <value1> <key2> <value2>
```bash
mset str1 "string1" str2 "string2" str3 "string3"
```

6、设置（存在时不会覆盖）：setnx <key> <value>
```bash
set str "this is a string"
setnx str "string"
```

7、设置多个（存在时不会覆盖）：msetnx <key> <value>

8、设置值并带过期时间（秒）：setex <key> <seconds> <value>
```bash
setex str 3 "this is a string"
```

9、设置值并带过期时间（毫秒）：psetex <key> <milliseconds> <value>
```bash
psetex str 3000 "this is a string"
```

10、获取旧值并设置新值: getset <key> <value>

11、追加值到已存在键的末尾：append <key> <value>

12、获取指定偏移量上的位: getbit <key> <offset>
```bash
getbit str 3000
```

13、设置指定偏移量上的位: setbit <key> <offset> <value>

14、返回字符串长度: strlen <key>

15、存储的数字值增/减1: incr/decr <key>

16、存储的数字值增/减指定量: incrby/decrby <key> <increment>

17、存储的数字值增指定浮点量: incrbyfloat <key> <increment>


### hash

1、获取：hget <key> <hash-key>

2、获取全部: hgetall <key>

3、获取多个字段：hmget <key> <hash-key1> <hash-key2>

4、设置（已存在会覆盖）：hset <key> <hash-key> <hash-value>

5、设置（已存在不会覆盖）：hsetnx <key> <hash-key> <hash-value>

6、设置多个：hmset <key> <hash-key1> <hash-value1> <hash-key2> <hash-value2>

7、删除：hdel <key> <hash-key1> <hash-key2>

8、判断哈希是否存在：hexsits <key> <hash-key>

9、指定哈希增指定量：hincrby <key> <hash-key> <increment>

10、指定哈希增指定浮点量：hincrbyfloat <key> <hash-key> <increment>

11、获取哈希表的所有key：hkeys <key>

12、获取哈希表的所有value：hvals <key>

13、获取哈希表的长度：hlen <key>

### 数组

1、查看指定序号元素: lindex <key> <index>

2、查看数组长度: llen <key>

3、左/右添加元素（头/尾部）：lpush/rpush <key> <item1> <item2>

4、左/右移除元素（头/尾部）：lpop/rpop <key> <item1> <item2>

5、表存在的情况下，左/右添加一个元素（头/尾部）：lpushx/rpushx <key> <item>

6、左/右移除并弹出元素（头/尾部），无元素会阻塞直到超时或执行：lpushx/rpushx <key> <item1> <item2> timeout

7、移除指定方向的指定匹配元素指定个数: lrem <key> <direction+count> <value>
```bash
lrem list -2 hello
```

8、设置指定序号元素的值：lset <key> <index> <value>

9、移除最后一个元素并添加到另一个数组：rpoplpush <source> <destination>

10、移除最后一个元素并添加到另一个数组，无元素会阻塞直到超时或执行：brpoplpush <source> <destination> timeout

11、查询指定范围的元素：lrange <key> <start> <end>

12、裁剪指定范围的元素（范围外的会删除）: ltrim <key> <start> <end>

### Set集合

1、添加元素：sadd <set> <value>

2、统计集合的元素数量：scard <set>

3、比较并返回差集/交集/并集：sdiff/sinter/sunion <set1> <set2> <set3>

4、指定集合存储比较的差集/交集/并集：sdiffstore/sinterstore/sunionstore <destination> <set1> <set2> <set3>

5、是否是集合的元素：sismember <set> <value>

6、查询所有的元素：smembers <set>

7、移动元素到另一个集合：smove <source> <destination> <value>

8、返回指定个随机元素：srandmember <set> <number>

9、移除并返回随机一个元素：spop <set>

10、迭代元素：sscan <set> <cursor> match <derection+index> count <number>
```bash
sscan myset 0 match -1 count 2
```

### Sorted Set 有序集合

1、添加成员：zadd <set> <key1> <value1> <key2> <value2>

2、集合元素个数：zcard

3、查询指定索引间的键值对数量：zcount <set> <start> <end>

4、查询指定索引间的键集合：zrange <set> <start> <end>

5、给指定键对应的值添加指定增量：zincrby <set> <increment> <value>

6、根据给定的值获取键：zscore <set> <value>

7、删除指定键对应的键值对：zrem <set> <key>

8、交集：zinterstore

9、指定一个字符串区间，返回区间中的值个数：zlexcount <set> <start> <end>
```bash
zlexcount set1 [a [z
zlexcount set1 - +
```

10、通过score区间查询值：zrangebyscore <set> <start> <end>

11、返回指定元素的索引：zrank <set> <value>

12、移除给定字典/排名/分数区间的元素：zremrangebylex/zremrangebyrank/zremrangebyscore

13、获取指定成员的排名：zrevrange

14、获取索引区间/分数区间的元素，分数值从大到小：zrevrank/zrevrankbyscore <set> <start> <end>

15、指定一个set储存多个有序集的并集：zunionstore <destination> <numkeys> [key1] [key2]

16、迭代元素：zscan <set> <cursor> match <derection+index> count <number>
```bash
zscan myset 0 match -1 count 2
```

## 四、连接

1、验证密码：`auto pwd`

2、打印：`echo msg`

3、查看服务是否执行：`ping`

4、退出连接：`quit`

5、切换到指定数据库：`select index`

## 五、redis事务

1、机制

单个命令的执行是原子性的，但事务的执行是非原子性的。
> 命令的原子性：操作要么全部执行，要么全不执行
> 事务的非原子性：使用事务在处理多个命令时，不会因为其中一个失败而取消整个事务

2、指令

标记事务块开始：multi

执行事务块命令：exec

按键监视：watch key1 key2

取消所有监视：unwatch

取消事务：discard

## 六、服务器指令

1、异步执行一个AOF文件重写操作：bgrewriteaof

2、后台异步保存当前数据库的数据到磁盘：bgsave

3、关闭客户端连接（本机可以不接参数）：client kill <ip:port> <id clientIid>

4、获取服务器与客户端连接列表：client list

5、获取连接名称：client getname

6、指定时间内终止来自客户端的命令：client pause <timeout>

7、设置当前连接的名称：client setname <conn_name>

8、获取集群节点的映射数组：cluster slots

9、获取redis命令详情数组：command

10、获取命令总数：command count

11、获取给定命令所有键：command getkeys

12、获取服务器时间

13、获取指定命令描述数组：command info <command1> <command2>

14、获取指定配置参数的值：config get <parameter>

15、修改配置文件：config rewrite

16、修改配置参数而无需重启：config set <parameter> <value>

17、重置info命令中某些统计数据：config resetstat

18、当前数据库key的数量：dbsize

19、获取key的调试信息：debug object key

20、是服务崩溃：debug segfault

21、删所有库：flushall

22、删当前库：flushdb

23、统计各种信息：info <section>

24、lastsave：返回最近一次保存数据的时间

25、实时打印服务器的命令：monitor

26、返回当前角色：role

27、同步保存数据到硬盘：save

28、异步保存数据到硬盘并关闭服务器：shutdown [save/nosave]

29、将当前服务器转变成指定服务器的丛属服务器：slaveof host port

30、管理慢日志：slowlog subcommand <arg>

31、用于复制功能的内部命令：sync

## 七、node连接redis

1、安装依赖：`npm i redis`

2、使用：
```js
const redis = require('redis');

const client = redis.createClient();

client.select(0, () => { console.log('use db 0') })

client.on('error', err => { console.log(err) })

client.set('str_key', 'string', redis.print);

client.hset('hash_table', 'hash_key', 'hash', redis.print);

client.hkeys('hash_table', (err, data) => {
    console.log(data);
    client.quit();
});
```

> 其他的指令的用法大同小异，具体请参考[github](https://github.com/NodeRedis/node_redis)

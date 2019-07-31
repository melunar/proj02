# 发布订阅（观察者）模式 [Publish/Subscribe(Observer)]

> 参考 <https://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html>

> 定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

> 观察者模式可以很好的实现2个模块之间的解耦：举个例子，你来公司面试的时候，完事之后每个面试官都会对你说：“请留下你的联系方式， 有消息我们会通知你”。 在这里“你”是订阅者， 面试官是发布者。所以你不用每天或者每小时都去询问面试结果， 通讯的主动权掌握在了面试官手上。而你只需要提供一个联系方式（你订阅了面试官的面试结果类型的消息）。  
还有个常用的场景，平时经常接触的dom事件，比如`div.onclick=fn`这里就是用的订阅发布的模式，你订阅（Subscribe）了div的click事件， 当点击div（publish）的时候,fn就会被触发

总而言之，发布订阅设计模式的好处：  
1. 支持简单的广播通信，自动通知所有已经订阅过的对象。
2. 页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
3. 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。

## 说明

源码位于`src/index`支持commonjs模式下演示

## demo

在node环境中运行demo，执行`node ./demo.js`

## api

#### 引用
`const pubsub = require('pathToModule/index')`

#### 发布 pubsub.publish(topic, data)

参数：

1. topic: [String] [发布消息主题]
2. data: [Any] [发布消息内容]

返回值：无

#### 订阅 pubsub.subscribe(topic, fn)

参数：

1. topic: [String] [订阅消息主题]
2. fn: [Function] [接收到消息回调函数]

返回值：订阅认证token

#### 退订消息 pubsub.unsubscribe(token)

参数：

1. token: [token] [订阅认证token]

返回值：token


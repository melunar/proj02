var pubsub = require('./src/index')

//将订阅赋值给一个变量，以便退订
var test1Subscription = pubsub.subscribe('topic', function(topics, data) {
  console.log('test1Subscription ' + topics + ': ' + data)
})
var test2Subscription = pubsub.subscribe('topic', function(topics, data) {
  console.log('test2Subscription ' + topics + ': ' + data)
})

//发布通知
pubsub.publish('topic', 'message!')
pubsub.publish('topic', [{ pro1: 'val1' }, { pro2: 'val2' }])

//退订test1
setTimeout(function() {
  pubsub.unsubscribe(test1Subscription)
}, 0)

//再发布一次，验证一下是否还能够输出信息
pubsub.publish('topic', 'last message!')

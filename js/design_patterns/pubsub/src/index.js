var pubsub = {} // 发布订阅
var topics = {}, // 回调函数存放的数组
  subUid = -1 // 订阅者token（ID）
// 发布方法
pubsub.publish = function(topic, args) {
  if (!topics[topic]) {
    return false
  }

  setTimeout(function() {
    var subscribers = topics[topic],
      len = subscribers ? subscribers.length : 0

    while (len--) {
      subscribers[len].func(topic, args)
    }
  }, 0)

  return true
}
//订阅方法
pubsub.subscribe = function(topic, func) {
  if (!topics[topic]) {
    topics[topic] = []
  }

  var token = (++subUid).toString()
  topics[topic].push({
    token: token,
    func: func
  })
  return token
}
/**
 * 退订方法
 * token: 订阅案例
 */
pubsub.unsubscribe = function(token) {
  for (var m in topics) {
    if (topics[m]) {
      for (var i = 0, j = topics[m].length; i < j; i++) {
        if (topics[m][i].token === token) {
          topics[m].splice(i, 1)
          return token
        }
      }
    }
  }
  return false
}

module.exports = pubsub

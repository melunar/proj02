const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(302, { Location: 'http://baidu.com' })
  console.log(res._header)
  res.end()
})

server.listen(3100)

// 302 浏览器直接重定向到 location 指定地址

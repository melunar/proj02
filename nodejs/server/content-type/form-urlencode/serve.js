// const http = require('http')

// const server = http.createServer(function (req, res) {
//   if (req.url.includes('/favicon.ico')) {
//     res.end()
//     return
//   }
//   res.writeHead(200)
//   res.write('我收到表单了: ')
//   console.log(res._header)
//   res.end()
// })

// server.listen(3111)

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/form-urlencode', urlencodedParser, function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')

  console.log('get application/x-www-form-urlencoded Params: ', req.body)

  res.json({ result: 'success', data: req.body })
})

const port = 3111
app.listen(port, () => {
  console.log(`Started at port ${port}`)
})

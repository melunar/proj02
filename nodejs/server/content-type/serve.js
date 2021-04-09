var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multipart = require('connect-multiparty')


// 用来解析 form-urlencode body
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 用来解析 form-data body
var multipartMiddleware = multipart()

app.all('*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next()
 })

/** form-urlencode 数据类型接口演示 */
app.post('/form-urlencode', urlencodedParser, function (req, res) {
  console.log('get application/x-www-form-urlencoded Params: ', req.body)
  res.json({ result: 'success', data: req.body })
})

/** form-data 数据类型接口演示 */
app.post('/form-data', multipartMiddleware, function (req, res) {
  console.log('get application/form-data Params: ', req.body)
  res.json({ result: 'success', data: req.body })
})

const port = 3111
app.listen(port, () => {
  console.log(`Started at port ${port}`)
})

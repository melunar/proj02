var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multipart = require('connect-multiparty')


// 用来解析 form-urlencode body
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 用来解析 form-data body
var multipartMiddleware = multipart()
// 用来解析 application-json body
let jsonParser = bodyParser.json({extended: false})

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

/** application-json 数据类型接口演示 */
app.post('/application-json', jsonParser, function (req, res) {
  console.log('get application-json Params: ', req.body)
  res.json({ result: '您发送的数据是：', data: req.body })
})
/** form get 数据类型接口演示 */
app.get('/get', function (req, res) {
  console.log('get Params: ', req.query)
  res.json({ result: '您发送的数据是：', data: req.query })
})
const port = 3111
app.listen(port, () => {
  console.log(`Started at port ${port}`)
})

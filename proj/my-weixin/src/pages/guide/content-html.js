import React from 'react'
let contentArray = [
  '<h1 id="-"><strong>概述</strong></h1>',
  '<p>微信JS-SDK是<a href="https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&amp;lang=zh_CN" target="_blank">微信公众平台</a> 面向网页开发者提供的基于微信内的网页开发工具包。</p>',
  '<p>通过使用微信JS-SDK，网页开发者可借助微信高效地使用拍照、选图、语音、位置等手机系统的能力，同时可以直接使用微信分享、扫一扫、卡券、支付等微信特有的能力，为微信用户提供更优质的网页体验。</p>',
  '<p>此文档面向网页开发者介绍微信JS-SDK如何使用及相关注意事项。</p>',
  '<h4 id="-"><strong>步骤一：绑定域名</strong></h4>',
  '<p>先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。</p>',
  '<p>备注：登录后可在“开发者中心”查看对应的接口权限。</p>',
  '<h4 id="-js-"><strong>步骤二：引入JS文件</strong></h4>',
  '<p>在需要调用JS接口的页面引入如下JS文件，（支持https）：<a href="http://res.wx.qq.com/open/js/jweixin-1.4.0.js">http://res.wx.qq.com/open/js/jweixin-1.4.0.js</a></p>',
  '<p>如需进一步提升服务稳定性，当上述资源不可访问时，可改访问：<a href="http://res2.wx.qq.com/open/js/jweixin-1.4.0.js">http://res2.wx.qq.com/open/js/jweixin-1.4.0.js</a> （支持https）。</p>',
  '<p>备注：支持使用 AMD/CMD 标准模块加载方法加载</p>',
  '<h4 id="-config-"><strong>步骤三：通过config接口注入权限验证配置</strong></h4>',
 ' <p>所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）。</p>',
  '<pre><code>wx.config({<br>    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。<br>    appId: \'\', // 必填，公众号的唯一标识<br>    timestamp: , // 必填，生成签名的时间戳<br>    nonceStr: \'\', // 必填，生成签名的随机串<br>    signature: \'\',// 必填，签名<br>    jsApiList: [] // 必填，需要使用的JS接口列表<br>});<br></code></pre>',
  '<p>签名算法见文末的<a href="#62">附录1</a>，所有JS接口列表见文末的<a href="#63">附录2</a></p>',
  '<h4 id="-ready-"><strong>步骤四：通过ready接口处理成功验证</strong></h4>',
  '<pre><code>wx.ready(function(){<br>    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。<br>});<br></code></pre></br>',
  '<h4 id="-error-"><strong>步骤五：通过error接口处理失败验证</strong></h4>',
  '<pre><code>wx.error(function(res){<br>    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。<br>});<br></code></pre>',
  '<h3 id="-"><strong>接口调用说明</strong></h3>',
  '<p>所有接口通过wx对象(也可使用jWeixin对象)来调用，参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：</p>',
  '<p>1.success：接口调用成功时执行的回调函数。</p>',
  '<p>2.fail：接口调用失败时执行的回调函数。</p>',
  '<p>3.complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。</p>',
  '<p>4.cancel：用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。</p>',
  '<p>5.trigger: 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。</p>',
  '<p>备注：不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回。</p>',
  // '<p>以上几个函数都带有一个参数，类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：</p>',
  '<p>调用成功时："xxx:ok" ，其中xxx为调用的接口名</p>',
  '<p>用户取消时："xxx:cancel"，其中xxx为调用的接口名</p>',
  '<p>调用失败时：其值为具体错误信息</p>'
]
export default contentArray
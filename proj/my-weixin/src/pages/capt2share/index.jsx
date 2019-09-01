import React from 'react'

export default class Share extends React.PureComponent {
  state = {
    textContent: ''
  }
  componentDidMount() {
    this.setShareConfig()
  }

  setShareConfig = () => {
    // wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
      
    // })
    const shareFoo = function() {
      wx.updateAppMessageShareData({ 
        title: '自定义分享标题', // 分享标题
        desc: '自定义分享描述', // 分享描述
        link: 'https://www.qq.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://mat1.gtimg.com/pingjs/ext2020/qqindex2018/dist/img/qq_logo_2x.png', // 分享图标
        success: function (res) {
          debugger
          console.log('###', res)
          // 设置成功
        }
      })
    }
    shareFoo()
    // setTimeout(shareFoo, 3000)
  }

  render() {
    return <div></div>
  }
}

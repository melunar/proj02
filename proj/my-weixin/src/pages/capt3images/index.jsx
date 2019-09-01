import React from 'react'

class Images extends React.PureComponent {
  state = {
    textContent: ''
  }
  componentDidMount() {}

  chooseImage = () => {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log('@@res', res)
        // var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
      }
    })
  }

  render() {
    return <div>
      <p>
        <span>拍照或从手机相册中选图接口</span>
        <button onClick={this.chooseImage}>chooseImage</button>
      </p>
    </div>
  }
}

export default Images

import React from 'react'
// import { withRouter } from 'react-router-dom'
import scriptJs from 'scriptjs'
import { Toast } from 'antd-mobile'

// import './style/index.css'

class Capt1 extends React.PureComponent {
  state = {
    wxsdkLoaded: false,
    result: 'unknow', 
    checkList: {
      chooseImage: { result: 'unknow' },
      chooseImagexxx: { result: 'unknow' },
      uploadImage: { result: 'unknow' }
    }
  }
  componentDidMount() {
    scriptJs('http://res.wx.qq.com/open/js/jweixin-1.4.0.js', () => {
      this.setState({ wxsdkLoaded: true })
    })
  }
  // handleClick = (callParam) => (e) => {
  //   console.log(e)
  //   console.log(callParam)
  // }
  checkJsApi = (funName) => (e) => {
    if (!this.state.wxsdkLoaded) {
      return Toast.fail('sdk未加载或加载失败，无法检测')
    }
    wx.checkJsApi({
      jsApiList: [funName], // 需要检测的JS接口列表
      success: (res) => {
        const state = res.checkResult[funName] ? 'true' : 'false'
      this.setState({
        checkList: {
          ...this.state.checkList,
        ...{ [funName]: { result: state } }
        }
      })
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      }
    })
  }

  render() {
    const list = Object.keys(this.state.checkList).map((keyName, index) => {
      return (
        <p key={index}>
          <button onClick={ this.checkJsApi(keyName) /* () => { this.checkJsApi(keyName) } */}>checkJsApi: {keyName}</button> 
          <span>result：{this.state.checkList[keyName].result}</span>
        </p>
      )
    })
    return (
      <div className="page page-capt1">
        <p>sdk ready：{this.state.wxsdkLoaded + ''}</p>
        {list}
      </div>
    )
  }
}

// export default withRouter(Guide)
export default Capt1

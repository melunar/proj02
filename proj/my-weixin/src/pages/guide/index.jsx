import React from 'react'
import { withRouter } from 'react-router-dom' //引入withRouter

import contentArray from './content-html'
import './style/index.css'

// @withRouter export default 
// class Guide extends React.Component {
class Guide extends React.PureComponent {
  state = {
    title: '帮助',
    content: contentArray.map(arr => `${arr}`)
  }
  componentDidMount() {
    document.title = this.state.title
  }

  render() {
    return (
      <div className="page page-guide">
        <div dangerouslySetInnerHTML={{__html: this.state.content.join('')}}></div>
      </div>
    )
  }
}

export default withRouter(Guide)

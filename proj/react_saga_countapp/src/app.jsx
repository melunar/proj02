import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './components/counter'

import { 
  incrementAction,
  decrementAction,
  incrementAsyncActionSaga /* !! saga action  */ 
} from './saga/actions'

// 使用connect注解 需安提供provider，安装"@babel/plugin-proposal-decorators", 并配置babel-plugin
@connect(state => ({
  value: state
}), {
  incrementAction, decrementAction, incrementAsyncActionSaga
})
export default class App extends Component {
  constructor(props) {
    super(props)
    // this.decrementAction = this.props.decrementAction
  }

  render() {
    return <div>
      <Counter 
        vaule={this.props.value}
        onIncrement={this.props.incrementAction}
        onDecrement={this.props.decrementAction}
        onIncrementAsync={this.props.incrementAsyncActionSaga}
      />
      <span>value: {this.props.value}</span>
    </div>
  }
}

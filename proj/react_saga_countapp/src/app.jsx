import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Counter from './components/counter'

import { 
  incrementAction,
  decrementAction,
  incrementAsyncActionSaga, /* !! saga action  */ 
  eatDinnerActionSaga,
  cookDinnerActionSaga,
  cookedDinnerActionSaga
} from './saga/actions'

// 使用connect注解 需安提供provider，安装"@babel/plugin-proposal-decorators", 并配置babel-plugin
@connect(state => ({
  value: state.counter,
  dinnerReady: state.dinnerReady,
  enjoyDish: state.enjoyDish
}), {
  incrementAction, decrementAction, incrementAsyncActionSaga,
  cookDinnerActionSaga,
  cookedDinnerActionSaga,
  eatDinnerActionSaga
})
export default class App extends Component {
  constructor(props) {
    super(props)
    // this.decrementAction = this.props.decrementAction
  }

  render() {
    return <div>
      {/* <Counter 
        vaule={this.props.value}
        onIncrement={this.props.incrementAction}
        onDecrement={this.props.decrementAction}
        onIncrementAsync={this.props.incrementAsyncActionSaga}
      />
      <span>value: {this.props.value}</span> */}  
      <p><button onClick={
        () => {
          this.props.eatDinnerActionSaga()
          this.props.cookDinnerActionSaga()
        }
      }>So hungry, need some food.</button> </p>
      <p><button onClick={
        () => {this.props.cookedDinnerActionSaga()}
      }>Take some fast meal. </button></p>
      <hr/>
      <p>
        dinner is ready: {this.props.dinnerReady?'yes':'no'}
        <br/>
        eating?: {this.props.enjoyDish?'yes':'no'}
      </p>
    </div>
  }
}

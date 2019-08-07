import React, { Component } from 'react'
import Counter from './components/counter'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Counter 
        vaule={this.props.value}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
        onIncrementAsync={this.props.onIncrementAsync}
      />
      <span>value: {this.props.value}</span>
    </div>
  }
}

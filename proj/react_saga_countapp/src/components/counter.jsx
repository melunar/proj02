import React, { Component } from 'react'

 const Counter = (props) => {
  // ? value 不更新
  let { /* value,  */onIncrement, onDecrement, onIncrementAsync } = props
  return <div>
    <button onClick={onIncrement}>INCREMENT +1</button>
    <button onClick={onDecrement}>DECREMENT -1</button>
    <button onClick={onIncrementAsync}>INCREMENT_ASYNC +2 (after 1s)</button>
    <hr/>
    {/* <span>value: {value}</span> */}
  </div>
 }

export default Counter
// export default class Counter extends Component {
//   render() {
//     return (<div>
//       <button>INCREMENT</button>
//       <button>DECREMENT</button>
//       <button>INCREMENT_ASYNC</button>
//     </div>)
//   }
// }

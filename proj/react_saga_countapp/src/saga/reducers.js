import { handleActions } from 'redux-actions'
import * as types from './types'

// 初始化 声明state
const initState = 0

// const counter = function (state = initState, action) {
//   switch (action.type) {
//     case types.INCREMENT: 
//       return state + 1
//     case types.DECREMENT:
//       return state -1
//     case types.INCREMENT_ASYNC:
//       return state
//     default: 
//       return state
//   }
// }

export default handleActions({
  // new data: action.payload
  [types.INCREMENT]: (state/* , action */) => state + 1,
  [types.DECREMENT]: (state/* , action */) => state - 1,
  [types.INCREMENT_ASYNC]: (state, { payload }) => {
    return Number(payload) ? state + payload : state
  }
}, initState)
import { handleActions } from 'redux-actions'
import * as types from './types'

// 初始化 声明state
const initState = {
  counter: 0,
  dinnerReady: false,
  enjoyDish: false
}

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
  [types.INCREMENT]: (state/* , { payload } */) => ({ ...state, ...{ counter: state.counter + 1 } }),
  [types.DECREMENT]: (state/* , { payload } */) => ({ ...state, ...{ counter: state.counter - 1 } }),
  [types.INCREMENT_ASYNC]: (state, { payload }) => {
    return Number(payload) ? { ...state, ...{ counter: state.counter + payload } } : { ...state }
  },
  [types.COOKED_DINNER__SAGA]: state => ({ ...state, dinnerReady: true }),
  [types.EAT_DINNER]: state => ({ ...state, enjoyDish: true })
}, initState)
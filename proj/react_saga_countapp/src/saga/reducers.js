import * as types from './types'
export default function counter(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT: 
      return state + 1
    case types.DECREMENT:
      return state -1
    case types.INCREMENT_ASYNC:
      return state
    default: 
      return state
  }
}
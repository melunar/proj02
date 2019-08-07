import { createAction/*, createActions */ } from 'redux-actions'
import * as types from './types'

export const incrementAction = createAction(types.INCREMENT)
export const decrementAction = createAction(types.DECREMENT)
export const incrementAsyncAction = createAction(types.INCREMENT_ASYNC)
export const incrementAsyncActionSaga = createAction(types.INCREMENT_ASYNC__SAGA)







// const { incrementAction, decrementAction, incrementAsyncAction } = createActions({
//   [types.INCREMENT]: state => state + 1,
//   [types.DECREMENT]: state => state - 1,
//   [types.INCREMENT_ASYNC]: state => state
// })

// export default {
//   incrementAction,
//   decrementAction,
//   incrementAsyncAction
// }
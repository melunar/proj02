import { createAction/*, createActions */ } from 'redux-actions'
import * as types from './types'

export const incrementAction = createAction(types.INCREMENT)
export const decrementAction = createAction(types.DECREMENT)
export const incrementAsyncAction = createAction(types.INCREMENT_ASYNC)
export const incrementAsyncActionSaga = createAction(types.INCREMENT_ASYNC__SAGA)

export const eatDinnerAction = createAction(types.EAT_DINNER)
export const eatDinnerActionSaga = createAction(types.EAT_DINNER__SAGA)
export const cookDinnerAction = createAction(types.COOK_DINNER)
export const cookDinnerActionSaga = createAction(types.COOK_DINNER__SAGA)
export const cookedDinnerAction = createAction(types.COOKED_DINNER)
export const cookedDinnerActionSaga = createAction(types.COOKED_DINNER__SAGA)






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
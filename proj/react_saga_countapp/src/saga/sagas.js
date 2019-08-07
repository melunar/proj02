import { takeEvery, takeLetest, put, call, take, fork} from 'redux-saga/effects'

import { incrementAsyncAction } from './actions'
import * as types from './types'

export const delay = ms => new Promise(resolve => {
  setTimeout(resolve(2), ms)
})

function* incrementAsync() {
  // 延迟1s increment
  const number = yield call(delay, 1000)
  // yield put({type: types.INCREMENT_ASYNC})
  yield put(incrementAsyncAction(number))
}
export default function* rootSaga() {
  // 同理takeEvery === (take+fork)
  // while(true) {
  //   yield take(types.INCREMENT_ASYNC)
  //   yield fork(incrementAsync)
  // }
  yield takeEvery(types.INCREMENT_ASYNC__SAGA, incrementAsync)
}
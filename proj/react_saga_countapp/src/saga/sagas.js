import { takeEvery, takeLetest, put, call, take, fork} from 'redux-saga/effects'
import * as types from './types'

export const delay = ms => new Promist(resolve => {
  setTimeout(resolve, ms)
})

function* incrementAsync() {
  debugger
  // 延迟1s increment
  yield call(delay, 1000)
  yield put({type: types.INCREMENT_ASYNC})
}
export default function* rootSaga() {
  // 同理takeEvery === (take+fork)
  // while(true) {
  //   yield take(types.INCREMENT_ASYNC)
  //   yield fork(incrementAsync)
  // }
  // ?? yield* takeEvery(types.incrementAsync, incrementAsync)
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync)
}
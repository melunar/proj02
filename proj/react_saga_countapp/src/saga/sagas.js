import { takeEvery, takeLatest, put, call, take, fork} from 'redux-saga/effects'

import { incrementAsyncAction } from './actions'
import * as types from './types'

export const delay = ms => new Promise(resolve => {
  setTimeout(() => { 
    console.log('....delay 1s')
    resolve(2) 
  }, ms)
})

function* incrementAsync() {
  // 延迟1s increment
  const number = yield call(delay, 1000)
  console.log('....after delay 1s') // __exec__: {takeLatest: once, takeEvery: always}
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

  /* 在任何时刻 takeLatest 只允许执行一个 fetchData 任务，并且这个任务是最后被启动的那个，如果之前已经有一个任务在执行，那之前的这个任务会自动被取消 */
  /* 当然，但是异步api没有被取消 */
  // yield takeLatest(types.INCREMENT_ASYNC__SAGA, incrementAsync)
}
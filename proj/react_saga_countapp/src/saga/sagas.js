import { takeEvery, takeLatest, put, call, take, fork} from 'redux-saga/effects'

import {
  incrementAsyncAction,
  eatDinnerAction,
  cookDinnerAction,
  cookedDinnerAction,
  cookedDinnerActionSaga,
} from './actions'
import * as types from './types'

export const delay = ms => new Promise(resolve => {
  setTimeout(() => { 
    console.log(`....delay ${ms/1000}s`)
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

// function* eatDinner() {
//   const dinnerReady = yield call(delay, 5000)
//   console.log('...dinner cooked')
//   yield put(cookDinnerAction(dinnerReady))
//   yield put(eatDinnerAction(true))
// }

function* eatDinner() {
  yield waitCookDinner()
  console.log('...wait over, dinner cooked')
  yield put(eatDinnerAction(true))
}

function* cookDinner() {
  console.log('...cooked start')
  yield call(delay, 2000)
  console.log('...cooked end')
  yield put(cookedDinnerActionSaga(true))
}
function* cookedDinnerFast() {
  yield call(delay, 0)
  console.log('...cooked end by fast meal')
  yield put(cookedDinnerAction(true))
}

function* waitCookDinner() {
  console.log('...wait dinner cooked')
  yield take(types.COOKED_DINNER__SAGA)
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

  // ----------------------------------------------------------------------

  yield takeLatest(types.COOK_DINNER__SAGA, cookDinner)
  yield takeLatest(types.COOKED_DINNER__SAGA, cookedDinnerFast)
  yield takeLatest(types.EAT_DINNER__SAGA, eatDinner)

}
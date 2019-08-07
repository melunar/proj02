import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './saga/sagas'
import rootReducer from './saga/reducers'

import App from './app'
import * as types from './saga/types'

// create middleware
const sagaMiddleware = createSagaMiddleware()
let middlewares = []
middlewares.push(sagaMiddleware)

// create store with middleware
const creatStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = creatStoreWithMiddleware(rootReducer)

// 启动saga程序
sagaMiddleware.run(rootSaga)

// 封装 dispatch(actionType)
const action = type => store.dispatch({ type })

const root = document.getElementById('App') 

function render() {
  ReactDOM.render(
    // <Provider store={store}>
      <App 
        value={store && store.getState()}
        onIncrement={() => action(types.INCREMENT)}
        onDecrement={() => action(types.DECREMENT)}
        onIncrementAsync={() => action(types.INCREMENT_ASYNC)}
      />
    // </Provider>
      , 
    root)
}
render()
store.subscribe(render)
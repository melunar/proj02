import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './saga/sagas'
import rootReducer from './saga/reducers'

import App from './app'

// create middleware
const sagaMiddleware = createSagaMiddleware()
let middlewares = []
middlewares.push(sagaMiddleware)

// create store with middleware and logger
const logger = createLogger({ diff: false })
const creatStoreWithMiddleware = applyMiddleware(...middlewares, logger)(createStore)
const store = creatStoreWithMiddleware(rootReducer)

// 启动saga程序
sagaMiddleware.run(rootSaga)

// 封装 dispatch(actionType)
// const action = type => store.dispatch({ type })

const root = document.getElementById('App')

function render() {
  ReactDOM.render(
    // Provider：context of Connect(App)
    <Provider store={store}>
      <App />
    </Provider>
      , 
    root)
}
render()
store.subscribe(render)
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../index'
export const history = createHistory()
const initialState = {}
const enhancers = []
//thunk 能让action 里面执行一些异步操作
const middleware = [
  thunk,
  routerMiddleware(history)
];
//开发模式下  chrome 利用devTools。。插件查看redux 节点树状态
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
// compose 核心代码 funcs.reduce((a, b) => (...args) => a(b(...args)))       
// (...args) = > fn1(fn2(fn3(...args))) 
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
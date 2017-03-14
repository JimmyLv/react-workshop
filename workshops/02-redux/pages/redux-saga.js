import { createStore, applyMiddleware } from 'redux'
import { Provider as Redux } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { call, take, put, takeLatest } from 'redux-saga/effects'

const initialState = {
  count: 0,
  failure: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'fail':
      return { ...state, failure: !state.failure }
    default:
      return state
  }
}

function* incAction() {
  return new Promise((res, rej) => {
    setTimeout(() => res(put({ type: 'inc' })), 1000)
    rej(put({ type: 'fail' }))
  })
}
function* rootSaga() {
  yield [
    takeLatest(incAction),
  ]
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default props => (
  <Redux store={store}>
    <div>Redux</div>
  </Redux>
)

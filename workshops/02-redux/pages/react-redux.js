import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

setInterval(() => {
  store.dispatch({ type: 'inc' })
}, 1000)

const Counter = connect(state => ({ count: state.count }))(props => (
  <div>Redux Counter: {props.count}</div>
))

export default () => (
  <Redux store={store}>
    <Counter />
  </Redux>
)
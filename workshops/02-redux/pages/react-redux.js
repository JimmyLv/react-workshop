import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

const INC = 'inc'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

setInterval(() => {
  store.dispatch({ type: INC })
}, 1000)

const Counter = connect(state => ({ count: state.count }))(props => (
  <div>Redux Counter: {props.count}</div>
))

export default () => (
  <Redux store={store}>
    <Counter />
  </Redux>
)
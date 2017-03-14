import { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider as Redux, connect } from 'react-redux';
import thunk from 'redux-thunk'

const logger = ({ getState, dispatch }) => next => action => {
  console.info('action type:', action.type)
  next(action)
}

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk, logger))

class Counter extends Component {
  componentDidMount() {
    setInterval(() => {
      console.info(this.props)
      this.props.incCount()
    }, 2000)
  }

  render() {
    const { count } = this.props
    return (
      <span>Count: {count}</span>
    )
  }
}

const App = connect(
  state => ({ count: state.count }),
  dispatch => ({ incCount: () => setTimeout(() => dispatch({ type: 'inc' }), 1000) }))
(Counter)

export default props => (
  <Redux store={store}>
    <App />
  </Redux>
)

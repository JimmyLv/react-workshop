import { Component } from 'react'

class Redux extends Component {
  state = { count: 0 }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Redux</h1>
        <span>Count: {count}</span>
      </div>
    )
  }
}

export default Redux
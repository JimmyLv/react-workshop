import { Component } from 'react'

class Redux extends Component {
  constructor(props) {
    super(props)
    this.state={
      count: 0
    }
    this.timer()
  }

  timer() {
    setInterval(
      () => this.setState({
        count: this.state.count++
      }),
      1000
    )
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <span>Count: {this.state.count}</span>
      </div>
    )
  }
}

export default Redux
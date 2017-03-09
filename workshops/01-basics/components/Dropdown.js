import { PropTypes, Component } from 'react'

class Dropdown extends Component {
  static propTypes = {
    dropdown: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
  }

  state = {
    toggle: false
  }

  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const { dropdown, children } = this.props
    return <div >
      <button onClick={(e) => this.handleClick(e)}>{children}</button>
      {this.state.toggle && dropdown}
    </div>
  }
}

export default Dropdown
import { Text, List } from '../components'

export default props => (
  <div>
    <h1>Hello React!</h1>
    <div>
      <span>handle click: </span>
      <Text onClick={e => console.log(e)} />
    </div>
    <div>
      <span>handle change: </span>
      <Text onChange={e => console.log(e)} />
    </div>
    <div>
      <span>handle focus: </span>
      <Text onFocus={e => console.log(e)} />
    </div>

    <List data={{ a: 'a', b: 'b', c: 'c' }} />
  </div>
)

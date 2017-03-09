import { Text, List, Dropdown, Appointment } from '../components'

const dropdownList = (
  <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>
)
const listData = { a: 'a', b: 'b', c: 'c' }

export default props => (
  <div>
    <h1>Hello React!</h1>

    <hr />

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

    <hr />

    <List data={listData} />

    <hr />

    <Dropdown dropdown={dropdownList}>Click me!</Dropdown>

    <hr />

    <Appointment isAHuman={true} isBooked={false}/>
    <Appointment isAHuman={true} isBooked={true}/>
    <Appointment isAHuman={false} isBooked={false}/>

  </div>
)

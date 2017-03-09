export default ({ condition, yes = 'yes', no = 'no' }) => (
  <div>{ condition ? yes : no }</div>
)
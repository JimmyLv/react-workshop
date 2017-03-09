export default ({ data }) => (
  <ul>
    {Object.keys(data).map(key =>
      <li key={key}>{`${key}: ${data[key]}`}</li>)}
  </ul>
)
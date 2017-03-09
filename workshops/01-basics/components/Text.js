export default ({ onClick, onChange, onFocus }) => (
  <input
    type="text"
    onClick={onClick && (e => onClick(e))}
    onChange={onChange && (e => onChange(e))}
    onFocus={onFocus && (e => onFocus(e))}
  />
)
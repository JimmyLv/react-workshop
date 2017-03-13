import { Component } from 'react'

import Todo from '../model/Todo'

const ENTER_KEY = 13

const ALL_TODOS = 'All';
const ACTIVE_TODOS = 'Active';
const COMPLETED_TODOS = 'Completed';

const FILTERS = {
  [ALL_TODOS]: () => true,
  [ACTIVE_TODOS]: todo => !todo.completed,
  [COMPLETED_TODOS]: todo => todo.completed,
}

class TodoMVC extends Component {
  state = {
    todos: [new Todo('Hello '), new Todo('World!')],
    filter: ALL_TODOS,
  }

  addTodo(title) {
    this.setState({
      todos: [...this.state.todos, new Todo(title)]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }

  updateTodo(id, newTitle) {
    this.setState({
      todos: this.state.todos.map((todo) => todo.id === id ? { ...todo, title: newTitle } : todo)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })
  }

  render() {
    const { todos, filter } = this.state
    return (
      <div>
        <h2>TodoList</h2>

        <AddTodo create={(title) => this.addTodo(title)} />
        <TodoList
          todos={todos.filter(FILTERS[filter])}
          remove={(id) => this.removeTodo(id)}
          toggle={(id) => this.toggleTodo(id)}
        />
        <hr />
        <Filter filter={filter} setFilter={(type) => this.setState({ filter: type })} />
      </div>
    )
  }
}

const AddTodo = ({ create }) => (
  <input
    type="text"
    placeholder="What wanna do?"
    onKeyDown={(e) => {
      if (e.keyCode !== ENTER_KEY) {
        return
      }

      e.preventDefault()

      create(e.target.value)
    }}
  />
)

const TodoList = ({ todos, toggle, remove }) => (
  <ol>
    {todos.map(({ id, title, completed }) =>
      <li key={id}>
        <span
          style={{ textDecoration: completed && 'line-through' }}
          onClick={() => toggle(id)}
        >{title}</span>
        <button style={{ marginLeft: 20 }} onClick={() => remove(id)}>x</button>
      </li>
    )}
  </ol>
)

const Filter = ({ filter, setFilter }) => (
  <ul>
    {Object.keys(FILTERS).map(type =>
      <li key={type} style={{ color: filter === type && 'red' }} onClick={() => setFilter(type)}>{type}</li>
    )}
  </ul>
)

export default TodoMVC
export default class Todo {
  constructor(title){
    this.id = Math.random()
    this.title = title
    this.completed = false
  }
}

import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleCompleted} = this.props
    const {editing, updatedTitle} = this.state

    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <div className="edit-list-container">
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
              className="edit-input"
            />
            <button
              type="button"
              onClick={this.handleSave}
              className="save-btn"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="list-item-container">
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleCompleted(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <button
              type="button"
              onClick={this.handleEdit}
              className="edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem

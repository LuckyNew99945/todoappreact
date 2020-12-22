import React from 'react'
import Todo from './Todo';
export default function TodoList() {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo/>
      </ul>
    </div>
  )
}

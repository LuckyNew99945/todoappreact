import React from 'react'
import Todo from './Todo';

export default function TodoList({setTodos,todos,filteredTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

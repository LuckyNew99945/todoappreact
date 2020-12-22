import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'
function App() {

  //states
  //input text state for input text for todo
  const [inputText,setInputText] = useState('');
  //todos is collection of todo from input text
  const [todos, setTodos] = useState([]);
  //set status in select option to determine which todo is shown.default is all
  const [status,setStatus] = useState('all');
  //filtered todos is collection of todo that match with status option
   const [filteredTodos,setFilteredTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Lucky Todo App</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;

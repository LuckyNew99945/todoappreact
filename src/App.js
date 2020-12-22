import React, { useEffect, useState } from 'react';
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

   //functions

  const filterHandler = () => {
     switch(status) {
       case 'completed':
         setFilteredTodos(todos.filter(todo => todo.completed === true))
         break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
     }
   }

  const saveLocalTodos = () => {
     localStorage.setItem('todos', JSON.stringify(todos));
   }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  //Run once when app start

  useEffect(() => 
  getLocalTodos(),[]);

  //Run everytime todos and status change

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[todos, status])
  return (
    <div className="App">
      <header>
        <h1>Lucky Todo App</h1>
      </header>
      <Form inputText = {inputText} todos={todos} setInputText={setInputText} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

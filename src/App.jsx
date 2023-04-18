import React, {useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from './Components/Todolist'
import "./App.css";
import { addTodoAction } from "./Redux/store/Todos";




export default function App() {
  const [text, setText] = useState('')
  let dispatch = useDispatch()

  const [filter, setFilter] = useState('')
 

  const onclickHandler = (event) => {
    event.preventDefault()
    if (text.trim() !== '') {
      dispatch(addTodoAction(text))

      setText('')


    }
  }





  return (
    <>
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="">
        <input type="text" class="todo-input" value={text} onChange={e => setText(e.target.value)} />
        <button class="todo-button" type="submit" onClick={onclickHandler}>
          <i class="fas fa-plus-circle fa-lg"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo" onChange={(event) => setFilter(event.target.value)} >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div class="todo-container">
        <ul class="todo-list">
          <TodoList filter={filter} />
        </ul>
      </div>
    </>
  );
}

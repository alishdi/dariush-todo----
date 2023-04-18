import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodoAction } from '../Redux/store/Todos'

export default function Todo({ title, id, isDone }) {
  const selector = useSelector(state => state.filter)
  const dispatch = useDispatch()


  const deleteHandler = (e) => {
    e.preventDefault()
    dispatch(removeTodoAction(id))
  }
  const completHandler = (e) => {
    e.preventDefault()
    dispatch(completeTodo(id))
  }
  return (
    <>
      <div class="todo">
        <li class={isDone ? 'complet-btn-true' : 'todo-item'}>{title}</li>
        <button class={'complete-btn'} onClick={completHandler} ><i class="fas fa-check-circle"></i></button>
        <button class="trash-btn" onClick={deleteHandler}><i class="fas fa-trash"></i></button>
      </div>
    </>
  )
}

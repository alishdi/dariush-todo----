import { filter } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todolist({filter}) {


  let selector = useSelector(state => state.todos)



  let filterd = selector.filter(todo => {
    if (filter === 'completed') {
      return todo.isDone
    } else if (filter === 'incomplete') {
      return !todo.isDone
    } else {
      return selector
    }
  })




  return (
    <>
      {filterd.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  )
}

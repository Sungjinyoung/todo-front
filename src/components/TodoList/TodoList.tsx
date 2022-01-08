<<<<<<< HEAD
import React from 'react'
import './TodoList.scss'

const TodoList = () => {
  return (
    <div className="todo-list-container">
=======
import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import TodoItem from "../TodoItem/TodoItem"
import { getTodoList } from "../../lib/api"
import { AxiosError, AxiosResponse } from "axios"

const TodoList = () => {
  const [todoList, setTodolist] = useState({})

  useEffect(() => {}, [])

  return (
    <div className="todo-list-container">
      <Box sx={{ width: 300, height: 200, border: "1px solid gray" }}>
        <TodoItem
          title="오늘 할일"
          description="집에서 과제를 해야해요"
          deadline={new Date().getTime()}
        />
      </Box>
>>>>>>> dda444844772db73b4a62aa66330dfa079b628c4
    </div>
  )
}

export default TodoList

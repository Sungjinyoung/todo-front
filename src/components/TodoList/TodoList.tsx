import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import TodoItem from "../TodoItem/TodoItem"
import { getTodoList } from "../../lib/api"
import { AxiosError, AxiosResponse } from "axios"

const TodoList = () => {
  const [totalTodoItems, setTotalTodoItems] = useState<TodoItemInterface[]>([])

  useEffect(() => {
    const getTodalTodoItems = async () => {
      const response: AxiosResponse = await getTodoList()
      setTotalTodoItems(response.data)
    }
  }, [])

  return (
    <div className="todo-list-container">
      {totalTodoItems.map((item) => {
        return (
          <Box sx={{ width: 300, height: 200, border: "1px solid gray" }}>
            <TodoItem {...item} />
          </Box>
        )
      })}
    </div>
  )
}

export default TodoList

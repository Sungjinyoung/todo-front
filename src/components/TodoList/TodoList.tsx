import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import TodoItem from "../TodoItem/TodoItem"
import { getTodoList } from "../../lib/api"
import { AxiosError, AxiosResponse } from "axios"

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <Box sx={{ width: 300, height: 200, border: "1px solid gray" }}>
        <TodoItem
          title="오늘 할일"
          description="집에서 과제를 해야해요"
          deadline={new Date().getTime()}
        />
      </Box>
    </div>
  )
}

export default TodoList

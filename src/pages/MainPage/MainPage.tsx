import React, { useEffect } from "react"
import TodoList from "../../components/TodoList/TodoList"

const MainPage = () => {
  useEffect(() => {
    //
  }, [])
  return (
    <div className="main-page">
      <TodoList></TodoList>
    </div>
  )
}

export default MainPage

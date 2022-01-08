<<<<<<< HEAD
import React from 'react'
import './MainPage.scss'

=======
import React, { useEffect } from "react"
import TodoList from "../../components/TodoList/TodoList"
>>>>>>> dda444844772db73b4a62aa66330dfa079b628c4

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

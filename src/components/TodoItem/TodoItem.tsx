import React from 'react'
<<<<<<< HEAD
import './TodoItem.scss'

const TodoItem = () => {
  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-title">
        오늘의 할일
      </div>
    </div>
  )
=======
import { Checkbox, Button } from '@mui/material'

interface todoItemProps { 
	title: string,
	description: string,
	subItem?: object,
	deadline?: number,
}

const TodoItem = (props: todoItemProps) => {
	const { title, description, subItem, deadline } = props
	return (
		<div className="todo-item">
			<div className="title">{title}</div>
			<div className="description">{description}</div>
			<div className="sub-item">
				<Checkbox />하위 항목1
				<Checkbox />하위 항목2
			</div>
			<Button>삭제</Button>
			<Button>완료</Button>
		</div>
	)
>>>>>>> dda444844772db73b4a62aa66330dfa079b628c4
}

export default TodoItem

import React from 'react'
import { Checkbox, Button } from '@mui/material'

interface todoItemProps { 
  id: number
  title: string
  description: string
  deadline: number
  status: TODO_STATUS_ENUM
  subItems?: SubItemInterface
}

const TodoItem = (props: todoItemProps) => {
	const { title, description, deadline, status, subItems} = props
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
}

export default TodoItem

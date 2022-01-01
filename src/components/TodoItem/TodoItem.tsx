import React from 'react'
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
}

export default TodoItem

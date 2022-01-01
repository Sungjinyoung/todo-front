import React from 'react'
import TodoList from '../../components/TodoList/TodoList'


const MainPage:React.FC = () => {
	return (
		<div className='main-page'>
			<TodoList></TodoList>
		</div>
	)
}

export default MainPage
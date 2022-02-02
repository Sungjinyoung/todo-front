import axios, { AxiosInstance } from 'axios'
import { API_URL } from '../constants'

enum TODO_STATUS_ENUM {
  READY = 'ready',
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
}

interface SubItemInterface {
  description: string
  done: boolean
}

interface createTodoItemDto {
  title: string
  description: string
  deadline: { type: number; required: false }
  status: TODO_STATUS_ENUM
  subItems?: SubItemInterface
}

interface loginDto {
  id: string
  password: string
}

interface registerDto {
  name: string
  id: string
  password: string
  birth: string
}

const todoAPI: AxiosInstance = axios.create({
  baseURL: API_URL,
})

const getTodoList = () => {
  return todoAPI.get('/todo/all', {
    // params --> get의 req.query가 되는 것
  })
}

const getTodoItem = (id: number) => {
  return todoAPI.get(`/todolist/get/${id}`)
}

const createTodoItem = (requestDto: createTodoItemDto) => {
  return todoAPI.post('/todolist/create', requestDto)
}

const loginUser = (loginInfo: loginDto) => {
  return todoAPI.post('/user/login', loginInfo)
}

const registerUser = (registerInfo: registerDto) => {
  return todoAPI.post('/user/register', registerInfo)
}

export { getTodoList, getTodoItem, createTodoItem, loginUser, registerUser }

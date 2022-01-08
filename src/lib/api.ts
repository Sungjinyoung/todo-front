import axios, { AxiosInstance } from "axios"

enum TODO_STATUS_ENUM {
  READY = "ready",
  IN_PROGRESS = "inProgress",
  DONE = "done",
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

const todoAPI: AxiosInstance = axios.create({
  baseURL: "localhost:8080",
})

const getTodoList = () => {
  return todoAPI.get("/todolist/all")
}

const getTodoItem = (id: number) => {
  return todoAPI.get(`/todolist/get/${id}`)
}

const createTodoItem = (requestDto: createTodoItemDto) => {
  return todoAPI.post("/todolist/create", requestDto)
}

export { getTodoList, getTodoItem, createTodoItem }

enum TODO_STATUS_ENUM {
  READY = 'ready',
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
}
interface SubItemInterface {
  description: string
  done: boolean
}

interface TodoItemInterface {
  id: number
  title: string
  description: string
  deadline: number
  status: TODO_STATUS_ENUM
  subItems?: SubItemInterface
}

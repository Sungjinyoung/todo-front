import React, { createContext, useContext, useReducer } from 'react'

interface RegisterForm {
  name: string
  birth: string
  id: string
  password: string
}

type Action =
  | { type: 'HANDLE_NAME'; name: string }
  | { type: 'HANDLE_BIRTH'; birth: string }
  | { type: 'HANDLE_ID'; id: string }
  | { type: 'HANDLE_PASSWORD'; password: string }

type RegisterDispatch = React.Dispatch<Action>

interface RegisterContextProps {
  children: React.ReactNode
}

const RegisterStateContext = createContext<RegisterForm | null>(null)
const RegisterDispatchContext = createContext<RegisterDispatch | null>(null)

export const useRegisterStateContext = () => {
  const state = useContext(RegisterStateContext)
  if (!state) throw new Error('not wrapped with provider')
  return state
}

export const useRegissterDispatchContext = () => {
  const dispatch = useContext(RegisterDispatchContext)
  if (!dispatch) throw new Error('not wrapped with provider')
  return dispatch
}

const reducer = (state: RegisterForm, action: Action): RegisterForm => {
  switch (action.type) {
    case 'HANDLE_NAME':
      return { ...state, name: action.name }
    case 'HANDLE_BIRTH':
      return { ...state, birth: action.birth }
    case 'HANDLE_ID':
      return { ...state, id: action.id }
    case 'HANDLE_PASSWORD':
      return { ...state, password: action.password }
    default:
      throw new Error('unknown Type')
  }
}

const RegisterContextProvider = (props: RegisterContextProps) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    birth: '',
    id: '',
    password: '',
  })

  return (
    <RegisterStateContext.Provider value={state}>
      <RegisterDispatchContext.Provider value={dispatch}>
        {children}
      </RegisterDispatchContext.Provider>
    </RegisterStateContext.Provider>
  )
}

export default RegisterContextProvider

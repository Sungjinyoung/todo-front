import React, { createContext, useContext, useReducer } from 'react'

interface LoginForm {
  id: string
  password: string
}

type LoginDispatch = React.Dispatch<Action>

type Action =
  | { type: 'HANDLE_ID'; id: string }
  | { type: 'HANDLE_PASSWORD'; password: string }

interface LoginContextProviderProps {
  children: React.ReactNode
}

const LoginStateContext = createContext<LoginForm | null>(null)
const LoginDispatchContext = createContext<LoginDispatch | null>(null)

export const useLoginStateContext = (): LoginForm => {
  const state = useContext(LoginStateContext)
  if (!state) throw new Error('unknown type')
  return state
}

export const useLoginDispatchContext = (): LoginDispatch => {
  const dispatch = useContext(LoginDispatchContext)
  if (!dispatch) throw new Error()
  return dispatch
}

const reducer = (state: LoginForm, action: Action): LoginForm => {
  switch (action.type) {
    case 'HANDLE_ID': {
      return { ...state, id: action.id }
    }
    case 'HANDLE_PASSWORD': {
      return { ...state, password: action.password }
    }
    default:
      throw new Error('Unknown Action Type')
  }
}

const LoginContextProvider = (props: LoginContextProviderProps) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    password: '',
  })

  return (
    <LoginStateContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  )
}

export default LoginContextProvider

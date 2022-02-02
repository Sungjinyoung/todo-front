import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { autoHypenPhone } from '../common'

interface RegisterForm {
  name: string
  birth: string | null
  id: string
  password: string
  cellphone: string

  nameInvalid: boolean
  nameErrorMessage: string
  idInvalid: boolean
  idErrorMessage: string
  passwordInvalid: boolean
  passwordErrorMessage: string
  birthInvalid: boolean
  birthErrorMessage: string
  cellphoneInvalid: boolean
  cellphoneErrorMessage: string
}

type RegisterInputAction =
  | { type: 'HANDLE_NAME'; name: string }
  | { type: 'HANDLE_BIRTH'; birth: string | null }
  | { type: 'HANDLE_ID'; id: string }
  | { type: 'HANDLE_PASSWORD'; password: string }
  | { type: 'HANDLE_CELLPHONE'; cellphone: string }
  | { type: 'SET_NAME_ERROR'; error: boolean; message: string }
  | { type: 'SET_ID_ERROR'; error: boolean; message: string }
  | { type: 'SET_PASSWORD_ERROR'; error: boolean; message: string }
  | { type: 'SET_BIRTH_ERROR'; error: boolean; message: string }
  | { type: 'SET_CELLPHONE_ERROR'; error: boolean; message: string }

type RegisterFormDispatch = React.Dispatch<RegisterInputAction>

interface RegisterContextProps {
  children: React.ReactNode
}

const RegisterStateContext = createContext<RegisterForm | null>(null)
const RegisterDispatchContext = createContext<RegisterFormDispatch | null>(null)

export const useRegisterStateContext = () => {
  const registerInfo = useContext(RegisterStateContext)
  if (!registerInfo) throw new Error('not wrapped with provider')
  return registerInfo
}

export const useRegisterDispatchContext = () => {
  const dispatchRegisterInfo = useContext(RegisterDispatchContext)
  if (!dispatchRegisterInfo) throw new Error('not wrapped with provider')
  return dispatchRegisterInfo
}

const registerReducer = (state: RegisterForm, action: RegisterInputAction): RegisterForm => {
  switch (action.type) {
    case 'HANDLE_NAME':
      return { ...state, name: action.name }
    case 'HANDLE_BIRTH':
      return { ...state, birth: action.birth }
    case 'HANDLE_ID':
      return { ...state, id: action.id }
    case 'HANDLE_PASSWORD':
      return { ...state, password: action.password }
    case 'HANDLE_CELLPHONE':
      return { ...state, cellphone: autoHypenPhone(action.cellphone) }
    case 'SET_NAME_ERROR': {
      return {
        ...state,
        nameErrorMessage: action.message,
        nameInvalid: action.error,
      }
    }
    case 'SET_BIRTH_ERROR': {
      return {
        ...state,
        birthErrorMessage: action.message,
        birthInvalid: action.error,
      }
    }
    case 'SET_PASSWORD_ERROR': {
      return {
        ...state,
        passwordErrorMessage: action.message,
        passwordInvalid: action.error,
      }
    }
    case 'SET_ID_ERROR': {
      return {
        ...state,
        idErrorMessage: action.message,
        idInvalid: action.error,
      }
    }
    case 'SET_CELLPHONE_ERROR': {
      return {
        ...state,
        cellphoneErrorMessage: action.message,
        cellphoneInvalid: action.error,
      }
    }
    default:
      throw new Error('unknown Type')
  }
}

const RegisterContextProvider = (props: RegisterContextProps) => {
  const { children } = props
  const [registerInfo, dispatchRegisterInfo] = useReducer(registerReducer, {
    name: '',
    birth: null,
    id: '',
    password: '',
    cellphone: '',

    nameInvalid: false,
    nameErrorMessage: '',
    idInvalid: false,
    idErrorMessage: '',
    passwordInvalid: false,
    passwordErrorMessage: '',
    birthInvalid: false,
    birthErrorMessage: '',
    cellphoneInvalid: false,
    cellphoneErrorMessage: '',
  })

  useEffect(() => {
    const koreanRegExp = /^[가-힣]*$/g
    if (!koreanRegExp.test(registerInfo.name))
      dispatchRegisterInfo({
        type: 'SET_NAME_ERROR',
        error: true,
        message: '※ 올바르지 않은 이름입니다.',
      })
    else
      dispatchRegisterInfo({
        type: 'SET_NAME_ERROR',
        error: false,
        message: '',
      })
  }, [registerInfo.name])

  useEffect(() => {
    if (registerInfo.id.length === 0)
      dispatchRegisterInfo({
        type: 'SET_ID_ERROR',
        error: true,
        message: '※ 아이디를 입력해주세요.',
      })
    else if (registerInfo.id.length < 7)
      dispatchRegisterInfo({
        type: 'SET_ID_ERROR',
        error: true,
        message: '※ 아이디는 7자 이상으로 설정해주세요.',
      })
    else dispatchRegisterInfo({ type: 'SET_ID_ERROR', error: false, message: '' })
  }, [registerInfo.id])

  useEffect(() => {
    if (registerInfo.password.length === 0)
      dispatchRegisterInfo({
        type: 'SET_PASSWORD_ERROR',
        error: true,
        message: '※ 비밀번호를 입력해주세요.',
      })
    else if (registerInfo.password.length < 8)
      dispatchRegisterInfo({
        type: 'SET_PASSWORD_ERROR',
        error: true,
        message: '※ 비밀번호는 8자 이상으로 설정해주세요.',
      })
    else
      dispatchRegisterInfo({
        type: 'SET_PASSWORD_ERROR',
        error: false,
        message: '',
      })
  }, [registerInfo.password])

  useEffect(() => {
    if (registerInfo.cellphoneErrorMessage.length === 0)
      dispatchRegisterInfo({
        type: 'SET_CELLPHONE_ERROR',
        error: true,
        message: '※ 전화번호를 입력해주세요.',
      })
    else if (registerInfo.cellphone.length < 13 || !registerInfo.cellphone.startsWith('010'))
      dispatchRegisterInfo({
        type: 'SET_CELLPHONE_ERROR',
        error: true,
        message: '※ 전화번호를 확인해주세요.',
      })
    else
      dispatchRegisterInfo({
        type: 'SET_CELLPHONE_ERROR',
        error: false,
        message: '',
      })
  }, [registerInfo.cellphone])

  return (
    <RegisterStateContext.Provider value={registerInfo}>
      <RegisterDispatchContext.Provider value={dispatchRegisterInfo}>{children}</RegisterDispatchContext.Provider>
    </RegisterStateContext.Provider>
  )
}

export default RegisterContextProvider

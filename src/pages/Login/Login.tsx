import React, { InputHTMLAttributes, useState } from 'react'
import Button from '../../components/Share/Button/Button'
import Input from '../../components/Share/Input/Input'
import MainTitle from '../../components/Share/MainTitle/MainTitle'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { useLoginDispatchContext } from '../../contexts/login'

const Login = () => {
  const dispatch = useLoginDispatchContext()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()

  const goRegisterPage = () => {
    navigate('/register')
  }

  const changeShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_ID', id: e.target.value })
  }

  return (
    <div className="login-page-container">
      <MainTitle />
      <div className="title-wrapper">
        <div className="title">로그인</div>
      </div>
      <div className="input-form">
        <div className="id">ID</div>
        <Input type="text" onChange={handleInputId} />
        <div className="password">PW</div>
        <Input
          type="password"
          showPassword={showPassword}
          changeShowPassword={changeShowPassword}
        />
      </div>
      <div className="button-wrapper">
        <Button text="로그인" />
      </div>
      <div className="register-routing-button" onClick={goRegisterPage}>
        회원가입
      </div>
    </div>
  )
}

export default Login

import { SxProps } from '@mui/material'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Share/Button/Button'
import Input from '../../components/Share/Input/Input'
import MainTitle from '../../components/Share/MainTitle/MainTitle'
import {
  useRegissterDispatchContext,
  useRegisterStateContext,
} from '../../contexts/register'
import './Register.scss'

const RegisterInputStyle: SxProps = {
  height: 60,
  padding: '26px 22px',
}

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const dispatch = useRegissterDispatchContext()
  const { name, birth, id, password } = useRegisterStateContext()

  const changeShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dayjs(e.target.value).format('YYYY-MM-DD')
    dispatch({ type: 'HANDLE_NAME', name: e.target.value })
  }

  const handleBirthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_BIRTH', birth: e.target.value })
  }

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_ID', id: e.target.value })
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_PASSWORD', password: e.target.value })
    console.log(password)
  }

  const register = () => {
    if (password.length < 8) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }

  return (
    <div className="register-page">
      <MainTitle />
      <div className="title-wrapper">
        <div className="title">회원가입</div>
      </div>
      <div className="register-form">
        <div className="form name">
          <span className="label">이름</span>
          <Input
            style={RegisterInputStyle}
            onChange={handleNameInput}
            type="text"
          />
        </div>
        <div className="form birth">
          <span className="label">생년월일</span>
          <Input
            style={RegisterInputStyle}
            onChange={handleBirthInput}
            type="text"
          />
        </div>
        <div className="form id">
          <span className="label">ID</span>
          <Input
            style={RegisterInputStyle}
            onChange={handleIdInput}
            type="text"
          />
        </div>
        <div className="form password">
          <span className="label">PW</span>
          <Input
            style={RegisterInputStyle}
            onChange={handlePasswordInput}
            showPassword={showPassword}
            changeShowPassword={changeShowPassword}
            error={passwordError}
            type="password"
          />
          {passwordError && (
            <div className="error">※ 비밀번호를 8자리 이상 입력해 주세요.</div>
          )}
        </div>
      </div>
      <div className="button-wrapper">
        <Button text="회원가입" onClick={register} />
      </div>
    </div>
  )
}

export default Register

import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Share/Button/Button'
import Input from '../../components/Share/Input/Input'
import MainTitle from '../../components/Share/MainTitle/MainTitle'

import { DatePicker, LocalizationProvider } from '@mui/lab'
import { TextField } from '@mui/material'
import koLocale from 'dayjs/locale/ko'
import DateAdapter from '@mui/lab/AdapterDayjs'

import { useRegisterDispatchContext, useRegisterStateContext } from '../../contexts/register'

import { registerUser } from '../../lib/api'
import './RegisterPage.scss'
import dayjs from 'dayjs'
import { autoHypenPhone } from '../../common'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
  const registerInfo = useRegisterStateContext()
  const dispatchRegisterInfo = useRegisterDispatchContext()
  const navigate = useNavigate()

  const changeShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRegisterInfo({ type: 'HANDLE_NAME', name: e.target.value })
  }

  const handleBirthInput = (birth: string | null) => {
    dispatchRegisterInfo({ type: 'HANDLE_BIRTH', birth: birth })
  }

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRegisterInfo({ type: 'HANDLE_ID', id: e.target.value })
  }

  const handleCellPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRegisterInfo({ type: 'HANDLE_CELLPHONE', cellphone: autoHypenPhone(e.target.value) })
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRegisterInfo({ type: 'HANDLE_PASSWORD', password: e.target.value })
  }

  const register = async () => {
    const { idInvalid, passwordInvalid, nameInvalid, birthInvalid, cellphoneInvalid } = registerInfo
    if (idInvalid || passwordInvalid || nameInvalid || birthInvalid || cellphoneInvalid) {
      setShowErrorMessage(true)
      return
    } else {
      setShowErrorMessage(false)
    }
    try {
      const response: AxiosResponse = await registerUser({
        name: registerInfo.name,
        id: registerInfo.id,
        birth: dayjs(registerInfo.birth).format('YYYY-MM-DD'),
        password: registerInfo.password,
      })
      if (response.data.success) {
        alert('회원가입이 완료되었습니다.')
        navigate('/', { replace: true })
      }
    } catch (err) {
      if (axios.isAxiosError(err)) window.alert(err.response?.data.detail)
    }
  }

  return (
    <div className="register-page">
      <MainTitle />
      <div className="title-wrapper">
        <div className="title">회원가입</div>
      </div>
      <div className="register-form">
        <div className="form id">
          <span className="label">ID</span>
          <Input onChange={handleIdInput} type="text" error={showErrorMessage && registerInfo.idInvalid} />
          {showErrorMessage && registerInfo.idInvalid && <div className="error">{registerInfo.idErrorMessage}</div>}
        </div>
        <div className="form password">
          <span className="label">PW</span>
          <Input
            onChange={handlePasswordInput}
            showPassword={showPassword}
            changeShowPassword={changeShowPassword}
            error={showErrorMessage && registerInfo.passwordInvalid}
            type="password"
          />
          {showErrorMessage && registerInfo.passwordInvalid && <div className="error">{registerInfo.passwordErrorMessage}</div>}
        </div>
        <div className="form name">
          <span className="label">이름</span>
          <Input onChange={handleNameInput} type="text" error={showErrorMessage && registerInfo.nameInvalid} />
          {showErrorMessage && registerInfo.nameInvalid && <div className="error">{registerInfo.nameErrorMessage}</div>}
        </div>
        <div className="form birth">
          <span className="label">생년월일</span>
          <LocalizationProvider dateAdapter={DateAdapter} locale={koLocale}>
            <DatePicker
              openTo="year"
              views={['year', 'month', 'day']}
              className="date-picker"
              value={registerInfo.birth}
              onChange={handleBirthInput}
              inputFormat="YYYY.MM.DD"
              okText="확인"
              cancelText="확인"
              toolbarTitle="생년월일"
              toolbarFormat="YYYY년 MM월 DD일"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {showErrorMessage && registerInfo.birthInvalid && <div className="error">{registerInfo.birthErrorMessage}</div>}
        </div>
        <div className="form cellphone">
          <span className="label">전화번호</span>
          <Input onChange={handleCellPhoneInput} type="text" error={showErrorMessage && registerInfo.cellphoneInvalid} value={registerInfo.cellphone} />
          {showErrorMessage && registerInfo.cellphoneInvalid && <div className="error">{registerInfo.cellphoneErrorMessage}</div>}
        </div>
      </div>
      <div className="button-wrapper">
        <Button text="회원가입" onClick={register} />
      </div>
    </div>
  )
}

export default RegisterPage

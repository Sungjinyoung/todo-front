import { SxProps } from '@mui/material'
import { padding } from '@mui/system'
import React from 'react'
import Button from '../../components/Share/Button/Button'
import Input from '../../components/Share/Input/Input'
import MainTitle from '../../components/Share/MainTitle/MainTitle'
import './Register.scss'

const RegisterInputStyle: SxProps = {
  height: 60,
  padding: '26px 22px',
}

const Register = () => {
  return (
    <div className="register-page-container">
      <MainTitle />
      <div className="title-wrapper">
        <div className="title">회원가입</div>
      </div>
      <div className="input-form">
        <div className="form name">
          <span className="label">이름</span>
          <Input style={RegisterInputStyle} type="text" />
        </div>
        <div className="form birth">
          <span className="label">생년월일</span>
          <Input style={RegisterInputStyle} type="text" />
        </div>
        <div className="form id">
          <span className="label">ID</span>
          <Input style={RegisterInputStyle} type="text" />
        </div>
        <div className="form password">
          <span className="label">PW</span>
          <Input style={RegisterInputStyle} type="password" />
        </div>
      </div>
      <div className="button-wrapper">
        <Button text="회원가입" />
      </div>
    </div>
  )
}

export default Register

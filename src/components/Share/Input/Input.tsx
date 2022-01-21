import React from 'react'
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material'
import './Input.scss'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface InputProps {
  type: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  showPassword?: boolean
  changeShowPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Input = (props: InputProps) => {
  const { type, onChange, showPassword, changeShowPassword } = props
  return (
    <>
      <OutlinedInput
        className="input"
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        endAdornment={
          type === 'password' && (
            <InputAdornment position="end">
              <IconButton onClick={changeShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </>
  )
}

export default Input

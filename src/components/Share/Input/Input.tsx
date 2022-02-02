import React from 'react'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import './Input.scss'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface InputProps {
  type: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  showPassword?: boolean
  changeShowPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void
  error?: boolean
  value?: string | number
  placeholder?: string
}

const Input = (props: InputProps) => {
  const { type, onChange, showPassword = true, changeShowPassword, error, value, placeholder } = props
  return (
    <>
      <OutlinedInput
        className="input"
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        error={error}
        value={value}
        placeholder={placeholder}
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

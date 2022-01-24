import React from 'react'
import './Button.scss'

interface ButtonProps {
  text: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const { text, onClick } = props
  return (
    <button className="button" type="button" onClick={onClick}>
      <span className="text">{text}</span>
    </button>
  )
}

export default Button

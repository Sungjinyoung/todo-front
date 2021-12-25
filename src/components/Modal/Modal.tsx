import React from 'react'
import './Modal.scss'
import DeadLine from '../TodoItem/DeadLine/DeadLine'

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-title">
      </div>
      <DeadLine />
    </div>
  )
}

export default Modal

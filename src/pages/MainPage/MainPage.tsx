import React, { useEffect } from 'react'
import { InputAdornment, OutlinedInput } from '@mui/material'
import { ReactComponent as MagnifyingGlass } from '../../assets/icons/magnify_glass.svg'
import './MainPage.scss'

const MainPage = () => {
  useEffect(() => {}, [])
  return (
    <div className="main-page">
      <div className="dashboard">
        <OutlinedInput
          sx={{ border: 0 }}
          className="search-input"
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlass />
            </InputAdornment>
          }
        />
      </div>
    </div>
  )
}

export default MainPage

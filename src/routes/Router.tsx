import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import LoginContextProvider from '../contexts/login'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <LoginContextProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </LoginContextProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default Router

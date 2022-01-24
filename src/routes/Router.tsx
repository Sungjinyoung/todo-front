import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import LoginContextProvider from '../contexts/login'
import RegisterContextProvider from '../contexts/register'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <LoginContextProvider>
          <RegisterContextProvider>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </RegisterContextProvider>
        </LoginContextProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default Router

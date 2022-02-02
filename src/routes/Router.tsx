import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import LoginContextProvider from '../contexts/login'
import RegisterContextProvider from '../contexts/register'
import LoginPage from '../pages/LoginPage/LoginPage'
import MainPage from '../pages/MainPage/MainPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <LoginContextProvider>
          <RegisterContextProvider>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="/main" element={<MainPage />}></Route>
            </Routes>
          </RegisterContextProvider>
        </LoginContextProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default Router

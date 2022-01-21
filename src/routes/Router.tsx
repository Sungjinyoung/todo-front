import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router

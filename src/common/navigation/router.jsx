import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Login from "../../ui/features/login/Login"
import Home from "../../ui/features/home/Home"
import Signup from "../../ui/features/signup/Signup"

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<Login/>)
  },
  {
    path: '/home',
    element: (<Home/>)
  },
  {
    path: '/create-account',
    element: (<Signup/>)
  }
]) 
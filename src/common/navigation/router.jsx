import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Login from "../../ui/features/login/Login"
import Home from "../../ui/features/home/Home"

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<Login/>)
  },
  {
    path: '/home',
    element: (<Home/>)
  }
]) 
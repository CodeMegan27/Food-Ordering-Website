import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'


export default function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/search/:searchTerm' element={<Homepage />} />
        <Route path='/tag/:tag' element={<Homepage />} />
    </Routes>
  )
}

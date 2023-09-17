import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'
import FoodPage from './pages/Food/FoodPage'
import CartPage from './pages/Cart/CartPage'


export default function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/search/:searchTerm' element={<Homepage />} />
        <Route path='/tag/:tag' element={<Homepage />} />
        <Route path='/food/:id' element={<FoodPage />} />
        <Route path='/cart' element={<CartPage />} />
    </Routes>
  )
}

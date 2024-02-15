import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Listing from './Listing';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/listings" element={<Listing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
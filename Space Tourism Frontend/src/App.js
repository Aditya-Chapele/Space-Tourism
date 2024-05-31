import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {
  return (
    <div className='content-grid'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination/> } />
        <Route path='/crew' element={<Crew/> } />
        <Route path='/technology' element={<Technology/> } />
      </Routes>
    </div>
  )
}

export default App
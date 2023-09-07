import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Nav from './layouts/Nav'

// import pages
import Home from './pages/Home'
import Comunidade from './pages/Comunidade'
import Sobre from './pages/Sobre'
import Sustentabilidade from './pages/Sustentabilidade'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/comunidade' element={<Comunidade/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/sustentabilidade' element={<Sustentabilidade/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

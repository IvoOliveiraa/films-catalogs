import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Search from './pages/Search.jsx'

import './style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={ <App />}>
        <Route path='/' element={ <Home />} />
        <Route path='sobre/:id' element={ <About />} />
        <Route path='search' element={ <Search />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)

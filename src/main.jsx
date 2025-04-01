import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Search from './pages/Search.jsx'
import Series from './pages/Series.jsx'

import './style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={ <App />}>
      <Route path='/' element={ <Home />} />
      <Route path='movie/:id' element={ <Movies />} />
      <Route path='serie' element={ <Series />} />
      <Route path='search' element={ <Search />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)

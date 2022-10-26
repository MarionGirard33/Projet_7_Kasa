import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './components/Error'

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Housing/:id" element={<Housing />} /> 
      <Route path="/About" element={<About />} /> 
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
// import FicheLogement from './pages/FicheLogement'
// import APropos from './pages/APropos'
// import Error from './components/Error'

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      {/* <Route path="/FicheLogement/:id" element={<FicheLogement />} /> 
      <Route path="/APropos" element={<APropos />} /> 
      <Route path="*" element={<Error />} /> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>,
document.getElementById('root')
)
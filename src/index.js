import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './components/Error';
import "./style/normalize.css";
import "./style/main.scss";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Housing/:id" element={<Housing />} />
      <Route path="/About" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
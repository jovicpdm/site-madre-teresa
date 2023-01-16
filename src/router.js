import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import News from './pages/News';
import Publications from './pages/Publications';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/transparencia" element={<Publications/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

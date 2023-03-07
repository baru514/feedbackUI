import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import FeedbackProvider from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route exact path='/' element={
          <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList /> 
          </div>
        } />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App
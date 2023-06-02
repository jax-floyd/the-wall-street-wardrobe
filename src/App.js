import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';

import Home from './pages/Home';
import About from './pages/About';
import Questions from './pages/Questions';
import Sources from './pages/Sources';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
            <div class="overflow-x-hidden relative font-serif mb-20">
              <Header />
              <Home />
            </div>
          }
        />
        <Route exact path='/about' element={
            <div class="overflow-x-hidden relative font-serif mb-20">
              <Header />
              <About />
            </div>
          }
        />
        <Route exact path='/questions' element={
            <div class="overflow-x-hidden relative font-serif mb-20">
              <Header />
              <Questions />
            </div>
          }
        />
        <Route exact path='/sources' element={
            <div class="overflow-x-hidden relative font-serif mb-20">
              <Header />
              <Sources />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import ManualPage from './pages/manual';
import YouPage from './pages/you';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signin" element={<SigninPage/>}/>
        <Route exact path="/manual" element={<ManualPage/>}/>
        <Route exact path="/you" element={<YouPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
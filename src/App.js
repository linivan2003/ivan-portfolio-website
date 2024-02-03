import React from 'react';
import './App.scss';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Layout />} />
    </Routes>
  );
}

export default App;
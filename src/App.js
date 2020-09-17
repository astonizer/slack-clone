import React from 'react';
import Header from './components/header/Header';
import './App.css'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* Routing */}
    </div>
  );
}

export default App;
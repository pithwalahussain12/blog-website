import React from 'react';
import './App.css';
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000000' }}>
      <div className="" style={{ position: 'relative' }}>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;

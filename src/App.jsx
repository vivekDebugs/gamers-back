import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarHead from './components/NavbarHead/NavbarHead';
import PlayerProfile from './components/PlayerProfile/PlayerProfile'

function App() {
  return (
    <div className="app">
      <NavbarHead />
      <div className="app__main">
        <Navbar />
        <PlayerProfile />
      </div>
    </div>
  );
}

export default App;

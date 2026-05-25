import React from "react";

// styles
import '../src/App.css';

// components

import Rody from "../components/rody";
import DonorCarousel from "../components/donors";
import Nav from "../components/nav";
import Carousel from "../components/Carousel";


function App() {
  return (
    <div className="App">
      
        {/* Navigation Bar */}
        <Nav />
        {/* Main Content */}
        <main className="container">
        {/* Rody's profile and mission statement */}
        <Rody />
        {/* Donor Carousel */}
        <DonorCarousel />
        
      </main>
    </div>
  )
}

export default App
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
      
      <Nav />
    
      <main className="container">

        <Rody />

        <DonorCarousel />
        
      </main>
    </div>
  )
}

export default App
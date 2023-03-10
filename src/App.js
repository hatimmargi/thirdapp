import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Katie from "./imgs/image 12.png";
// import Wedding from "./imgs/wedding-photography 1.png"
// import Bike from "./imgs/mountain-bike 1.png"
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
<div className="cards-container">
<Card
        title="Life lessons with Katie Zaferes"
        img='img1.png'
        rating={5.0}
        reviewCount={6}
        country="SD"
        price={136}
      />
      <Card
        title="Learn wedding photograph"
        img='img2.png'
        rating={5.0}
        reviewCount={6}
        country="USA"
        price={125}
      />
      <Card
        title="Group Mountain Biking"
        img='img3.png'
        rating={4.8}
        reviewCount={2}
        country="SD"
        price={50}
      />
</div>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
// import Katie from "./imgs/image 12.png";
// import Wedding from "./imgs/wedding-photography 1.png"
// import Bike from "./imgs/mountain-bike 1.png"
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // item ={item} this is replaced then we remove .item in our props
        // Other Way Spread Operator Similar to the long way
        {...item}
        // title={item.title}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards-container">{cards}</div>
    </div>
  );
}

export default App;

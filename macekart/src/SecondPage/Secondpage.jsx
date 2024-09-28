import React, { useEffect, useRef, useState } from 'react';
import './secondPage.css';
import img1 from "../assets/react.svg"
function SecondPage() {
  const cardboxRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  let cardList = [
    { card: "Card 1", price: "$10" },
    { card: "Card 2", price: "$15" },
    { card: "Card 3", price: "$20" },
    { card: "Card 4", price: "$25" },
    { card: "Card 5", price: "$30" },
    { card: "Card 6", price: "$35" },
    { card: "Card 7", price: "$40" },
    { card: "Card 8", price: "$45" },
    { card: "Card 9", price: "$50" },
    { card: "Card 10", price: "$55" }
  ];
  useEffect(() => {
    const cardbox = cardboxRef.current;

    const handleScroll = () => {
      const cardboxRect = cardbox.getBoundingClientRect();
      const cardboxCenter = cardboxRect.left + cardboxRect.width / 2;

      let closestCard = null;
      let closestDistance = Infinity;

      const allCards = Array.from(cardbox.children);
      allCards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - cardboxCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      setActiveCard(closestCard);
    };

    cardbox.addEventListener('scroll', handleScroll);

    return () => {
      cardbox.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="SecondPage">
      <div className="headingbox">
        <h4>MACEKART.IN</h4>
        <h1>Find your Perfect Wear</h1>
      </div>
      <div className="cardbox" ref={cardboxRef}>
        {cardList.map((obj, index) => (
          <div key={index} className={`card ${activeCard && activeCard.textContent.includes(obj.card) ? 'active' : ''}`}>
            <img src={img1} alt="img" />
            <h4>{obj.card}</h4>
            <h4>{obj.price}</h4>
          </div>
        ))}
      </div>
      <div className='fullcenter'>
        <button className='allproducts'>ALL PRODUCTS</button>
      </div>
    </div>
  );
}

export default SecondPage;

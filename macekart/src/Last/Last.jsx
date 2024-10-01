import React, { useRef, useEffect, useState } from 'react'
import "./Last.css"
import img1 from "../assets/react.svg"
function Last() {
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
    <div className='last'>
      <div className='AboutSmallx'>
        <div className="aleftx">
          <h1>Good Quality Dress</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis sapiente dignissimos, expedita harum cum possimus voluptate sequi dolorem, saepe minima officia suscipit quasi unde cumque, quia veritatis minus architecto dolorum earum incidunt? Quod vel, doloremque praesentium cum sunt ipsam impedit excepturi quisquam beatae possimus, aliquid explicabo, omnis dignissimos accusamus.</p>
          <div className='fullcentery'>
            <button className='allproductsy'>SHOP NOW</button>
          </div>
        </div>
        <div className="arighty">
        </div>
      </div>
      <div className='lastcenter'>
        <h1>Recommended For You</h1>
      </div>

      <div className="cardboxx" ref={cardboxRef}>
        {cardList.map((obj, index) => (
          <div key={index} className={`cardx ${activeCard && activeCard.textContent.includes(obj.card) ? 'activex' : ''}`}>
            <img src={img1} alt="img" />
            <h4>{obj.card}</h4>
            <h4>{obj.price}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Last

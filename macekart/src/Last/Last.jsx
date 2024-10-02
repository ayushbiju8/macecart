import React, { useRef, useEffect, useState } from 'react'
import "./Last.css"
import img1 from "../assets/react.svg"
import { useParams } from 'react-router-dom';

const productList = [
  { id: 1, price: 1299, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 2, price: 1399, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 3, price: 1499, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 4, price: 1599, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 5, price: 1699, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 6, price: 1799, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 7, price: 1899, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 8, price: 1999, imgSrc: img1, link: 'https://wa.me/1234567890' },
  { id: 9, price: 2099, imgSrc: img1, link: 'https://wa.me/1234567890' },
];

function Last() {
  const cardboxRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const { productId } = useParams(); // Get the product ID from the URL

  // Find the product details from the productList using the productId
  const product = productList.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis sapiente dignissimos...</p>
          <p className='bolder'>Price: {product.price}</p>
          <div className='fullcentery'>
            <button className='allproductsy'>SHOP NOW</button>
          </div>
        </div>
        <div className="arighty">
          <img src={product.imgSrc} alt={`Product ${product.id}`} />
        </div>
      </div>

      <div className='lastcenter'>
        <h1>Recommended For You</h1>
      </div>

      <div className="cardboxx" ref={cardboxRef}>
        {productList.map((obj, index) => (
          <div key={index} className={`cardx ${activeCard && activeCard.textContent.includes(obj.card) ? 'activex' : ''}`}>
            <img src={obj.imgSrc} alt={`Product ${obj.id}`} />
            <h4>{obj.card}</h4>
            <h4>{obj.price}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Last;

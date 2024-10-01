import React, { useState } from 'react'
import "./Third.css"
import img1 from '../assets/d.svg'
import img2 from '../assets/react.svg'
function Third() {
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownName); // Open the selected dropdown
    }
  };
  const productList = [
    { id: 1, price: 1299, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 2, price: 1399, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 3, price: 1499, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 4, price: 1599, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 5, price: 1699, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 6, price: 1799, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 7, price: 1899, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 8, price: 1999, imgSrc: img2, link: 'https://wa.me/1234567890' },
    { id: 9, price: 2099, imgSrc: img2, link: 'https://wa.me/1234567890' },
  ];
  return (
    <div className='Allproducts'>
      <div className="headingbox">
        <h4>MACEKART.IN</h4>
        <h1>ALL PRODUCTS</h1>
      </div>
      <div className="fullcenterx">
        <div className="dcontainer">
          <div className="dropdown">
            <button onClick={() => toggleDropdown('gender')} className="dropdown-toggle">
              GENDER <img src={img1} alt="" />
            </button>
            {openDropdown === 'gender' && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('price')} className="dropdown-toggle">
              PRICE <img src={img1} alt="" />
            </button>
            {openDropdown === 'price' && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('category')} className="dropdown-toggle">
              CATEGORY <img src={img1} alt="" />
            </button>
            {openDropdown === 'category' && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('collection')} className="dropdown-toggle">
              COLLECTION <img src={img1} alt="" />
            </button>
            {openDropdown === 'collection' && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('more')} className="dropdown-toggle">
              MORE <img src={img1} alt="" />
            </button>
            {openDropdown === 'more' && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="productscontainer">
      {productList.map((product) => (
        <div key={product.id} className="products">
          <img src={product.imgSrc} alt={`Product ${product.id}`} />
          <h4>$ {product.price}</h4>
          <a href={product.link} target="_blank" rel="noopener noreferrer">Whatsapp</a>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Third

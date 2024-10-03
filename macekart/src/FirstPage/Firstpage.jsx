import React, { useRef, useEffect } from 'react';
import './first.css';
import shoepic from '../assets/Homepage/shoepic.jpeg'; // Ensure the path is correct
import tshirt from '../assets/Homepage/tshirt.jpeg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

function Firstpage() {
  const mainBodyRef = useRef(null);

  const scrollLeft = () => {
    mainBodyRef.current.scrollBy({
      left: -window.innerWidth, // Scroll left by the width of the window
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    mainBodyRef.current.scrollBy({
      left: window.innerWidth, // Scroll right by the width of the window
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000); // Auto scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='FirstPage'>
      <div className="contentsoffirstpage">
        <div className="taboffirstpage">
          <div className="logoinfirstpage">MACEKART.IN</div>
          <div className="tabbuttonoffirstpage">
            <button className="tablinks">Home</button>
            <button className="tablinks">About</button>
            <button className="tablinks">Product</button>
            <button className="tablinks">Testimonials</button>
            <button className="tablinks">Contact Us</button>
          </div>
          <button className="SHOPNOWinFrontpage">SHOP NOW!</button>
        </div>

        {/* Left and Right Navigation Buttons */}
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <button className="scroll-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

        {/* Main Body Content */}
        <div className="mainbodyoffirst" ref={mainBodyRef}>
          {/* First Slide */}
          <div className="mainbodyoffirstpage">
            <div className="leftofmainbodyoffirstpage">
              <div className="messagesinmainbody">
                <h3 className='vintagecoll'>Vintage Collection</h3>
                <h1 className='sneakersale'>SNEAKERS</h1>
                <h1 className='sneakersale'>SALE!</h1>
                <h6 className='halfprice'>Half the price Twice the style</h6>
              </div>
              <div className="buttoninmainbody">
                <button className="SHOPNOWinFrontpage">SHOP NOW!</button>
              </div>
            </div>
            <img src={shoepic} alt="Shoe Image" />
          </div>

          {/* Second Slide */}
          <div className="mainbodyofsecondpage">
            <div className="leftofmainbodyoffirstpage">
              <div className="messagesinmainbody">
                <h3 className='vintagecoll'>Aesthetic Collection</h3>
                <h1 className='sneakersale'>T-SHIRTS</h1>
                <h1 className='sneakersale'>SALE!</h1>
                <h6 className='halfprice'>Half the price Twice the style</h6>
              </div>
              <div className="buttoninmainbody">
                <button className="SHOPNOWinFrontpage">SHOP NOW!</button>
              </div>
            </div>
            <img src={tshirt} alt="Tshirt Image" />
          </div>

          {/* Third Slide */}
          <div className="mainbodyofthirdpage">
            <div className="leftofmainbodyoffirstpage">
              <div className="messagesinmainbody">
                <h3 className='vintagecoll'>Aesthetic Collection</h3>
                <h1 className='sneakersale'>T-SHIRTS</h1>
                <h1 className='sneakersale'>SALE!</h1>
                <h6 className='halfprice'>Half the price Twice the style</h6>
              </div>
              <div className="buttoninmainbody">
                <button className="SHOPNOWinFrontpage">SHOP NOW!</button>
              </div>
            </div>
            <img src={shoepic} alt="Shoe Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;

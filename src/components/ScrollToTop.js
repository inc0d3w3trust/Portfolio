import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { ChevronUpOutline } from 'react-ionicons';
import './styles/ScrollToTop.css';

function ScrollToTop() {
  const [scrollTopBtnStyle, setScrollTopBtnStyle] = useState('scroll-to-top-btn');

  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  }

  const handleScroll = () => {
    const scrollTop = document.body.getBoundingClientRect().top;

    if(scrollTop !== 0 && scrollTop < -70) {
      setScrollTopBtnStyle('scroll-to-top-btn active');
    }

    if(scrollTop === 0 || scrollTop > -70) {
      setScrollTopBtnStyle('scroll-to-top-btn');
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  

  return (
    <div className={scrollTopBtnStyle} onClick={handleScrollToTop}>
      <ChevronUpOutline
        color={'#fff'} 
        height="25px"
        width="25px"
      />
    </div>
  );
}

export default ScrollToTop;
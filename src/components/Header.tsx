import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  return (
    <>
      <header className='header-section d-none d-xl-block'>
        [Header Placeholder]
      </header>
    </>
  );
};

export default Header;

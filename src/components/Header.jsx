import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from '../assets/HobbyCue Logo.png';
import Search from '../assets/search.png';
import Explore from '../assets/explore.png';
import Hobby from '../assets/Hobbies.png';
import Bookmark from '../assets/bookmark.png';
import Cart from '../assets/cart.png';
import Bell from '../assets/notifications.png';
import Menu from '../assets/menu.png';
import searchmob from '../assets/search-mobile.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

  const handleDrawerToggle = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleResize = (e) => {
      e.preventDefault();
      setIsMobile(window.innerWidth <= 360);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='header'>
        <div style={{display: 'flex'}}>
        <img src={Logo} alt="" className='header-content'/>
        <input placeholder='Search here' type='text' className='header-input'/>
        <button className='input-search'><img src={Search} alt="" /></button>
        <div className='header-left'>
        <img src={Explore} alt="" className='explore-icon'/>
        <select className='explore-dropdown'>
          <option>Explore</option>
          <option>Community</option>
          <option>Venues</option>
          <option>Events</option>
          <option>Store</option>
          <option>Blogs</option>
        </select>
        <img src={Hobby} alt="" className='hobbies-icon'/>
        <select className='explore-dropdown'>
          <option>Hobbies</option>
        </select>
        <img src={Bookmark} alt="" className='bookmark-icon'/>
        <img src={Bell} alt="" className='bell-icon'/>
        <img src={Cart} alt="" className='cart-icon'/>
        <button className='sign-in-btn'>Sign In</button>
        </div>
        </div>
        {isMobile ? (
            <div className='header-mobile' onClick={handleDrawerToggle}>
              <img src={Logo} alt="" className='header-content-mobile'/>
              <div style={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
              <img src={searchmob} alt="" className='search-mobile'/>
              <img src={Bell} alt="" className='bell-mobile'/>
              <img src={Menu} alt="" className='mobile-menu'/>
              </div>
            </div>
          ) : (<></>)}
    </div>
    </>
  )
}

export default Header
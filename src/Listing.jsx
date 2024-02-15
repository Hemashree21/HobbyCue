import React, { useState } from 'react';
import Header from './components/Header';
import './Listing.css';
import People from './assets/people.png';
import Place from './assets/place.png';
import Product from './assets/product.png';
import Program from './assets/program.png';
import Add from './assets/add.png';
import pplhover from './assets/people-hover.png';
import placehover from './assets/place-hover.png';
import producthover from './assets/product-hover.png';
import programhover from './assets/program-hover.png';

const Listing = () => {
    const [pplHovered, setPplHovered] = useState(false);
    const [placeHovered, setPlaceHovered] = useState(false);
    const [programHovered, setProgramHovered] = useState(false);
    const [productHovered, setProductHovered] = useState(false);
  return (
    <>
    <Header/>
    <div className='listings'>
        <span className='add-listing'><img src={Add} alt="" style={{marginRight: '1rem'}}/>Add Your Listing</span>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div className='people-listing' onMouseOver={()=>setPplHovered(true)} onMouseLeave={()=>setPplHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img src={pplHovered ? pplhover : People} alt="" style={{marginLeft: '1rem', marginTop: '1rem'}}/>
            <div className='listing-text'>People</div>
            </div>
            <p className='listing-para'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
          </div>
          <div className='place-listing' onMouseOver={()=>setPlaceHovered(true)} onMouseLeave={()=>setPlaceHovered(false)}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <img src={placeHovered ? placehover : Place} alt="" style={{marginLeft: '1rem', marginTop: '1rem'}}/>
            <div className='listing-text'>Place</div>
            </div>
            <p className='listing-para'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
          </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem'}}>
          <div className='product-listing' onMouseOver={()=>setProductHovered(true)} onMouseLeave={()=>setProductHovered(false)}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <img src={productHovered ? producthover : Product} alt="" style={{marginLeft: '1rem', marginTop: '1rem'}}/>
            <div className='listing-text'>Product</div>
            </div>
            <p className='listing-para'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
          </div>
          <div className='program-listing' onMouseOver={()=>setProgramHovered(true)} onMouseLeave={()=>setProgramHovered(false)}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <img src={programHovered ? programhover : Program} alt="" style={{marginLeft: '1rem', marginTop: '1rem'}}/>
            <div className='listing-text'>Program</div>
            </div>
            <p className='listing-para'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
          </div>
          </div>
        </div>
    </>
  )
}

export default Listing
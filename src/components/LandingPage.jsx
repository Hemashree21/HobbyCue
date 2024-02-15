import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Group from '../assets/landing-page.png';
import Google from '../assets/google.png';
import Facebook from '../assets/Facebook.png';
import Lock from '../assets/forgot-password.png';
import People from '../assets/people.png';
import Place from '../assets/place.png';
import Product from '../assets/product.png';
import Program from '../assets/program.png';
import Add from '../assets/add.png';
import Testimonals from '../assets/testimonals.png';
import Profile from '../assets/profile.png';
import Mic from '../assets/mic.png';
import Family from '../assets/grp-pic.png';
import { Link } from 'react-router-dom';
import top from '../assets/top.png';
import show from '../assets/hide-password.png';
import eye from '../assets/show-password.png'; 

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className='landing-page-explore'>
        <div className="explore-hobby">
          <span className='explore-text'>Explore your </span><span className='explore-hobbies'>hobby </span><span className='explore-text'>or </span><span className='explore-passion'>passion</span>
          <p className='explore-para'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
          <p className='explore-para'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
          <img src={Group} alt="" style={{marginTop: '5rem'}} className='group-img'/>
        </div>
        <div className='auth-sign-in'>
          <div style={{display: 'flex', gap: '1rem'}}>
            <div 
              className='lp-auth' 
              onClick={() => setActiveSection('signIn')} 
              style={{
                borderBottom: activeSection === "joinIn" ? 'none' : '2px solid rgba(128, 100, 162, 1)'
              }}>
              Sign In
            </div>
            <div 
              className='lp-auth' 
              style={{
                borderBottom: activeSection === 'joinIn' ? '2px solid rgba(128, 100, 162, 1)' : 'none'
              }}
              onClick={() => setActiveSection('joinIn')}
            >
              Join In
            </div>
          </div>
          <div className='auth-google'><img src={Google} alt="" className='sm-icon'/>Continue with Google</div>
          <div className='auth-google'><img src={Facebook} alt="" className='sm-icon'/>Continue with Facebook</div>
          <div style={{display: 'flex', marginTop: '20px'}}>
            <hr/>
            <span className='connect'>Or connect with</span>
            <hr/>
          </div>
          <input type='email' placeholder='Email' className='auth-email' required/>
      <div className="password-container">
          <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' className='auth-email' onClick={togglePasswordVisibility} required/>
          <i className="eye-icon" onClick={togglePasswordVisibility}>
          <img src={passwordVisible ? show : eye} alt="" />
      </i>
          </div>
          <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
          {activeSection !== 'joinIn' && (
              <>
                <div>
                  <label className="custom-checkbox">
                    <input type="checkbox" className='remember-checkbox'/>
                    <span className="checkmark"></span><span className='remember-me'>Remember me</span>
                  </label>
                </div>
                <div><img src={Lock} alt="" style={{verticalAlign: 'middle', marginRight: '0.5rem'}}/><span className='forgot-password'>Forgot password?</span></div>
              </>
          )}
            {(activeSection === 'joinIn') && (
              <>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <div style={{display: 'flex', margin: 'auto', marginLeft: '0', gap: '5px'}}>
              <span className="password-strength"></span><span className="password-strength"></span><span className="password-strength"></span>
              </div>
              <div className='forgot-password'>Password strength</div>
              </div>
              </>
            )}
          </div>
          <button type='submit' className='auth-continue'>Continue</button>
        </div>
      </div>
      <div className='pppp'>
        <div className='pppp-blocks'>
          <div className='pp-flex' style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className='people-block'>
            <div className='pp-align' style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img className='pppp-img' src={People} alt=""/>
            <div className='block-text'>People</div>
            </div>
            <p className='block-para'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
            <Link to="/other">
            <button className='block-btn'>Connect</button>
            </Link>
          </div>
          <div className='people-block'>
          <div className='pp-align' style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img className='pppp-img' src={Place} alt=""/>
            <div className='block-text'>Place</div>
            </div>
            <p className='block-para'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
            <Link to="/other"><button className='block-btn'>Meet up</button></Link>
          </div>
          </div>
          <div className='pp-flex' style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className='people-block'>
          <div className='pp-align' style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img className='pppp-img' src={Product} alt=""/>
            <div className='block-text'>Product</div>
            </div>
            <p className='block-para'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
            <Link to="/other"><button className='block-btn'>Get it</button></Link>
          </div>
          <div className='people-block'>
          <div className='pp-align' style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img className='pppp-img' src={Program} alt=""/>
            <div className='block-text'>Program</div>
            </div>
            <p className='block-para'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
            <Link to="/other"><button className='block-btn'>Attend</button></Link>
          </div>
          </div>
        </div>
      </div>
      <div className='add-ur-own'>
        <div className='add-block'>
        <div className='pp-align' style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <img className='pppp-img' src={Add} alt=""/>
            <div className='block-text'>Add your own</div>
            </div>
            <p className='block-para'>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
            <Link to="/listings">
            <button className='block-btn'>Add new</button>
            </Link>
        </div>
      </div>
      <div className='testimonals'>
        <div className="testimonal-block">
        <div className='pp-align' style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
            <img className='pppp-img' src={Testimonals} alt=""/>
            <div className='block-text'>Testimonals</div>
            </div>
            <p className='testimonal-para'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            <div className='test-flex' style={{display: 'flex', justifyContent: 'space-between', marginTop: '3rem'}}>
            <div className="testimonal-audio" style={{position: 'relative'}}>
            <audio src="" controls></audio>
  <img src={Profile} alt="" className='profile-pic'/>
  <img src={Mic} alt="" className='mic-pic'/>
</div>
        <div className='shubha-dancer'>
  <img src={Profile} alt="" className='avatar-pic'/>
  <div style={{marginLeft: '10px'}}>
    <span className='shubha'>Shubha Nagarajan</span>
    <div className='dancer'>Classical dancer</div>
  </div>
</div>
        </div>
        </div>
      </div>
      <div className='community'>
        <div className='com-pic'>
        <span className='com-text'>Your </span><span className='hobbies'>hobby, </span><span className='com-text'>Your </span> <span className='passion'>Community...</span>
        </div>
        <button className='get-started'>Get started</button>
        <div style={{width: '100%'}}>
        <button className='go-to-top' onClick={scrollToTop}><img src={top} alt="" /></button>
        </div>
        <img src={Family} alt="" className='grp-dance'/>
      </div>
    </>
  )
}

export default LandingPage;

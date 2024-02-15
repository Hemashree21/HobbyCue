import React from 'react';
import './Footer.css';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import insta from '../assets/insta.png';
import pinterest from '../assets/pinterest.png';
import ggl from '../assets/google+.png';
import youtube from '../assets/youtube.png';
import telegram from '../assets/telegram.png';
import gmail from '../assets/gmail.png';

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-links">
            <div className="footer-link-blk">
                <div className='footer-blks'>
                    <div className="hobbycue">
                        <span className='footer-heading'>Hobbycue</span>
                        <ul className='unordered-list'>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Work With Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="how-do-i">
                    <span className='footer-heading'>How Do I</span>
                        <ul className='unordered-list'>
                            <li>Sign Up</li>
                            <li>Add a Listing</li>
                            <li>Claim Listing</li>
                            <li>Post a Query</li>
                            <li>Add a Blog Post</li>
                            <li>Other Queries</li>
                        </ul>
                    </div>
                    <div className="quicklinks">
                    <span className='footer-heading'>Quick Links</span>
                        <ul className='unordered-list'>
                            <li>Listings</li>
                            <li>Blog Posts</li>
                            <li>Shop / Store</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="socialmedia">
                    <span className='footer-heading'>Social Media</span>
                    <div className='sms-icons'>
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={ggl} alt="" />
                        <img src={youtube} alt="" />
                        <img src={telegram} alt="" />
                        <img src={gmail} alt="" />
                    </div>
                    <span className='footer-heading'>Invite Friends</span>
                    <input placeholder='Search here' type='text' className='footer-input'/>
                    <button className='invite-search'>Invite</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
        <span className='copyright-heading'>© Purple Cues Private Limited</span>
        </div>
    </div>
    </>
  )
}

export default Footer
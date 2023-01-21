import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a className='social-icon-link facebook' href='https://www.facebook.com/' aria-label='Facebook'>
             <i className='fab fa-facebook-f' />
            </a>
            <a className='social-icon-link instagram' href='https://www.instagram.com/' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </a>
            <a className='social-icon-link youtube' href='https://www.youtube.com/' aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </a>
            <a className='social-icon-link twitter' href='https://twitter.com/'  aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </a>
            <a className='social-icon-link linkedin' href='https://in.linkedin.com/'  aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </a>
          </div>          
        </div>
        
        <small className='website-rights'>Copyright 2022 <i className='fas fa-copyright'/> MovieVerse Entertainment Pvt. Ltd. All Rights Reserved.</small>   
    </div>
  );
}

export default Footer;

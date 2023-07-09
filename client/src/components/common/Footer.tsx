import React from 'react';

function Footer() {
  return (
    <footer>
    <div className='footer-content'>
      <div className='footer-column'>
        <h4>About Fluentoo</h4>
        <p>Fluentoo is a language exchange platform that connects language learners from around the world. We aim to facilitate language learning through meaningful conversations and cultural exchange.</p>
      </div>
      <div className='footer-column'>
        <h4>Explore</h4>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Find a Language Partner</a></li>
          <li><a href='#'>Language Resources</a></li>
          <li><a href='#'>FAQ</a></li>
        </ul>
      </div>
      <div className='footer-column'>
        <h4>Contact</h4>
        <ul className='contact'>
          <li>Email: info@fluentoo.com</li>
          <li>Phone: +972-5922-12345</li>
          <li><a href='#'>Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div className='footer-bottom'>
      <p>&copy; 2023 Fluentoo. All rights reserved.</p>
    </div>
  </footer>
  
  );
}

export default Footer;

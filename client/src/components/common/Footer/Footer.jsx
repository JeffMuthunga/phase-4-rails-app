import React from 'react';
import styles from './Footer.module.css';
import SiteLinks from './SiteLinks'
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer>
      <div>
        <SocialLinks/>
      </div>
      <div>
        <SiteLinks/>        
      </div>
    </footer>
  )
}

export default Footer
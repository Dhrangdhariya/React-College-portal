import React from 'react'
import './Footer.css'

const Footer = () => {
    let date = new Date;
    date = date.getFullYear();
  return (
    <div className='footer'>
      <p> &copyright; {date} Edusity. All rights reserved.</p>
      <ul>
        <li>Term of service</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  )
}

export default Footer

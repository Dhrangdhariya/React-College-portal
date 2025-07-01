import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = ()=>{
    menu ? setMenu(false) : setMenu(true);
  }
  
  const [sticky, setSticky] =useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="logo" className='logo'/>
        <ul className={menu ? '' : 'hide-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testmonials' smooth={true} offset={-260} duration={500}>Testmonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
